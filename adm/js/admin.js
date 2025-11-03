// =============================================
// SISTEMA ADMINISTRATIVO - SUPERMERCADO RIGONATO
// =============================================

// Credenciais de acesso padrão do sistema
const DEFAULT_CREDENTIALS = {
    email: 'rigonato@com.br',
    password: 'rigonato321'
};

// Cache para melhor performance
let productsCache = null;
let statsCache = null;
let isLoading = false;

// Função para verificar se o usuário está autenticado
function checkAuth() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const currentPage = window.location.pathname;
    
    // Redireciona se não estiver logado tentando acessar dashboard
    if (isLoggedIn === 'true' && currentPage.includes('index.html')) {
        window.location.href = 'dashboard.html';
    } else if (isLoggedIn !== 'true' && currentPage.includes('dashboard.html')) {
        window.location.href = 'index.html';
    }
}

// Função de login do sistema
function login(email, password) {
    if (email === DEFAULT_CREDENTIALS.email && password === DEFAULT_CREDENTIALS.password) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminEmail', email);
        return true;
    }
    return false;
}

// Função de logout do sistema
function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    window.location.href = 'index.html';
}

// Função para exibir alertas no sistema
function showAlert(message, type = 'danger') {
    const existingAlerts = document.querySelectorAll('.alert-dismissible');
    existingAlerts.forEach(alert => alert.remove());
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Função para corrigir caminhos de imagem
function fixImagePath(imagePath) {
    if (!imagePath) return '../img/icon/rg.png';
    
    // Remove ../ se existir no início
    let cleanPath = imagePath.replace(/^\.\.\//, '');
    
    // Se já começar com img/, mantém como está
    if (cleanPath.startsWith('img/')) {
        return `../${cleanPath}`;
    }
    
    // Se for um caminho relativo sem ../, adiciona ../
    if (!cleanPath.startsWith('http') && !cleanPath.startsWith('/')) {
        return `../img/${cleanPath}`;
    }
    
    return imagePath;
}

// Função para carregar dados dos produtos
function loadProductsData() {
    if (productsCache) {
        return productsCache;
    }
    
    // Tenta carregar do sistema admin, depois do sistema principal
    try {
        if (typeof adminProducts !== 'undefined') {
            productsCache = adminProducts.loadProducts();
        } else if (typeof products !== 'undefined') {
            productsCache = products;
        } else {
            console.warn('Sistema de produtos não encontrado. Usando dados de exemplo.');
            productsCache = getSampleProducts();
        }
        
        // Corrige caminhos das imagens em todos os produtos
        for (const section in productsCache) {
            productsCache[section].forEach(product => {
                product.image = fixImagePath(product.image);
            });
        }
        
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        productsCache = getSampleProducts();
    }
    
    return productsCache;
}

// Dados de exemplo para teste
function getSampleProducts() {
    return {
        'padaria': [
            {
                id: 1,
                name: 'Pão Francês',
                price: 0.50,
                category: 'Pães',
                image: '../img/icon/rg.png'
            },
            {
                id: 2,
                name: 'Bolo de Chocolate',
                price: 15.90,
                category: 'Bolos',
                image: '../img/icon/rg.png'
            }
        ],
        'acougue': [
            {
                id: 3,
                name: 'Picanha',
                price: 79.90,
                category: 'Bovina',
                image: '../img/icon/rg.png'
            }
        ]
    };
}

// Função para calcular estatísticas dos produtos
function calculateProductStats() {
    if (statsCache) {
        return statsCache;
    }
    
    const products = loadProductsData();
    let totalProducts = 0;
    let totalValue = 0;
    const categories = {};
    
    for (const section in products) {
        totalProducts += products[section].length;
        products[section].forEach(product => {
            totalValue += product.price;
            categories[product.category] = (categories[product.category] || 0) + 1;
        });
    }
    
    statsCache = { 
        totalProducts, 
        totalValue, 
        categories, 
        totalSections: Object.keys(products).length 
    };
    
    return statsCache;
}

// Função para atualizar as estatísticas no dashboard
function updateProductStats() {
    if (isLoading) return;
    
    try {
        const stats = calculateProductStats();
        
        document.getElementById('totalProducts').textContent = stats.totalProducts;
        document.getElementById('totalValue').textContent = `R$ ${stats.totalValue.toFixed(2).replace('.', ',')}`;
        document.getElementById('totalSections').textContent = stats.totalSections;
        document.getElementById('totalCategories').textContent = Object.keys(stats.categories).length;
    } catch (error) {
        console.error('Erro ao atualizar estatísticas:', error);
    }
}

// Função para carregar produtos por seção
function loadProductsBySection() {
    if (isLoading) return;
    isLoading = true;
    
    const products = loadProductsData();
    const container = document.getElementById('productsBySection');
    if (!container) {
        isLoading = false;
        return;
    }
    
    try {
        container.innerHTML = '';
        
        if (Object.keys(products).length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="bi bi-inbox"></i>
                    <h5>Nenhuma seção encontrada</h5>
                    <p>Adicione produtos para começar</p>
                </div>
            `;
            isLoading = false;
            return;
        }
        
        for (const section in products) {
            const sectionProducts = products[section];
            const sectionCard = document.createElement('div');
            sectionCard.className = 'product-admin-card';
            sectionCard.innerHTML = `
                <div class="d-flex justify-content-between align-items-start">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <i class="bi bi-folder-fill text-primary"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-capitalize">${section}</h6>
                            <p class="text-muted mb-0">${sectionProducts.length} produtos</p>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold text-primary">R$ ${sectionProducts.reduce((t, p) => t + p.price, 0).toFixed(2).replace('.', ',')}</div>
                        <small class="text-muted">Valor total</small>
                    </div>
                </div>
                <div class="mt-2 d-flex gap-1">
                    <button class="btn btn-sm btn-outline-primary" onclick="openSectionManager('${section}')">
                        <i class="bi bi-pencil"></i> Gerenciar
                    </button>
                    <button class="btn btn-sm btn-success" onclick="openProductModal(null, '${section}')">
                        <i class="bi bi-plus"></i> Add
                    </button>
                </div>
            `;
            container.appendChild(sectionCard);
        }
    } catch (error) {
        console.error('Erro ao carregar produtos por seção:', error);
        container.innerHTML = `
            <div class="alert alert-danger">
                <i class="bi bi-exclamation-triangle"></i>
                Erro ao carregar produtos. Recarregue a página.
            </div>
        `;
    }
    
    isLoading = false;
}

// Função para carregar relatório de categorias
function loadCategoryReport() {
    try {
        const stats = calculateProductStats();
        const container = document.getElementById('categoryReport');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (Object.keys(stats.categories).length === 0) {
            container.innerHTML = `
                <tr>
                    <td colspan="3" class="text-center text-muted py-3">
                        <i class="bi bi-info-circle"></i> Nenhuma categoria encontrada
                    </td>
                </tr>
            `;
            return;
        }
        
        const sortedCategories = Object.entries(stats.categories)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8);
        
        sortedCategories.forEach(([category, count]) => {
            const row = document.createElement('tr');
            const percentage = ((count / stats.totalProducts) * 100).toFixed(1);
            row.innerHTML = `
                <td class="text-capitalize">${category}</td>
                <td>${count}</td>
                <td><span class="badge bg-success">${percentage}%</span></td>
            `;
            container.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao carregar relatório de categorias:', error);
    }
}

// Função para obter categorias disponíveis por seção
function getCategoriesForSection(section) {
    const defaultCategories = {
        'padaria': ['Pães', 'Bolos', 'Salgados', 'Tortas', 'Doces'],
        'acougue': ['Bovina', 'Suína', 'Frango', 'Linguiças', 'Peixes'],
        'hortifruti': ['Frutas', 'Verduras', 'Legumes', 'Temperos'],
        'mercearia': ['Grãos', 'Massas', 'Conservas', 'Temperos'],
        'racoes': ['Cães', 'Gatos', 'Pássaros', 'Peixes'],
        'bebidas': ['Refrigerantes', 'Sucos', 'Águas', 'Cervejas'],
        'novidades': ['Orgânicos', 'Sem Lactose', 'Veganos', 'Sem Glúten']
    };
    
    return defaultCategories[section] || ['Geral'];
}

// Função para abrir modal de gerenciamento de seção
function openSectionManager(section) {
    const products = loadProductsData();
    const sectionProducts = products[section] || [];
    
    let modalElement = document.getElementById('sectionManagerModal');
    
    if (!modalElement) {
        modalElement = document.createElement('div');
        modalElement.id = 'sectionManagerModal';
        modalElement.className = 'modal fade';
        modalElement.tabIndex = '-1';
        document.body.appendChild(modalElement);
    }
    
    modalElement.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        <i class="bi bi-grid-3x3-gap"></i> 
                        Gerenciar ${section.charAt(0).toUpperCase() + section.slice(1)} 
                        <span class="badge bg-light text-primary ms-2">${sectionProducts.length} produtos</span>
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                        <button class="btn btn-success" onclick="openProductModal(null, '${section}')">
                            <i class="bi bi-plus-circle"></i> Adicionar Novo Produto
                        </button>
                        <div class="text-muted small">
                            <i class="bi bi-info-circle"></i> Gerencie os produtos da seção
                        </div>
                    </div>
                    
                    ${sectionProducts.length > 0 ? `
                        <div class="table-responsive">
                            <table class="table table-hover align-middle">
                                <thead class="table-light">
                                    <tr>
                                        <th width="60" class="text-center">Imagem</th>
                                        <th>Produto</th>
                                        <th>Categoria</th>
                                        <th width="120" class="text-end">Preço</th>
                                        <th width="200" class="text-center">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${sectionProducts.map(product => `
                                        <tr>
                                            <td class="text-center">
                                                <img src="${product.image}" 
                                                     alt="${product.name}" 
                                                     class="rounded border" 
                                                     style="width: 50px; height: 50px; object-fit: cover;"
                                                     onerror="this.src='../img/icon/rg.png'">
                                            </td>
                                            <td>
                                                <div class="fw-semibold">${product.name}</div>
                                                <small class="text-muted">ID: ${product.id}</small>
                                            </td>
                                            <td>
                                                <span class="badge bg-secondary">${product.category}</span>
                                            </td>
                                            <td class="text-end">
                                                <span class="fw-bold text-success">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                                            </td>
                                            <td class="text-center">
                                                <div class="btn-group btn-group-sm" role="group">
                                                    <button type="button" class="btn btn-outline-primary" 
                                                            onclick="openProductModal(${product.id}, '${section}')"
                                                            title="Editar produto">
                                                        <i class="bi bi-pencil"></i> Editar
                                                    </button>
                                                    <button type="button" class="btn btn-outline-danger" 
                                                            onclick="deleteProduct(${product.id})"
                                                            title="Excluir produto">
                                                        <i class="bi bi-trash"></i> Excluir
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                                <tfoot class="table-light">
                                    <tr>
                                        <td colspan="3" class="text-end fw-semibold">Total:</td>
                                        <td class="text-end fw-bold text-success">
                                            R$ ${sectionProducts.reduce((sum, product) => sum + product.price, 0).toFixed(2).replace('.', ',')}
                                        </td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    ` : `
                        <div class="text-center py-5">
                            <i class="bi bi-inbox display-1 text-muted"></i>
                            <h5 class="text-muted mt-3">Nenhum produto encontrado</h5>
                            <p class="text-muted">Clique no botão acima para adicionar seu primeiro produto</p>
                        </div>
                    `}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="bi bi-x-circle"></i> Fechar
                    </button>
                    <div class="text-muted small">
                        ${sectionProducts.length} produto(s) listado(s)
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Função para abrir modal de adicionar/editar produto
function openProductModal(productId = null, section = null) {
    const products = loadProductsData();
    let product = null;
    let productSection = section;
    
    if (productId) {
        for (const sec in products) {
            const found = products[sec].find(p => p.id === productId);
            if (found) {
                product = found;
                productSection = sec;
                break;
            }
        }
    }
    
    const categories = getCategoriesForSection(productSection || 'padaria');
    
    let modalElement = document.getElementById('productModal');
    
    if (!modalElement) {
        modalElement = document.createElement('div');
        modalElement.id = 'productModal';
        modalElement.className = 'modal fade';
        modalElement.tabIndex = '-1';
        document.body.appendChild(modalElement);
    }
    
    modalElement.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        <i class="bi bi-${productId ? 'pencil' : 'plus-circle'}"></i>
                        ${productId ? 'Editar' : 'Adicionar'} Produto
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="productForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Seção *</label>
                                    <select class="form-select" id="productSection" required onchange="updateCategories(this.value)">
                                        <option value="">Selecione a seção</option>
                                        ${Object.keys(products).map(sec => 
                                            `<option value="${sec}" ${sec === productSection ? 'selected' : ''}>
                                                ${sec.charAt(0).toUpperCase() + sec.slice(1)}
                                            </option>`
                                        ).join('')}
                                    </select>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Nome do Produto *</label>
                                    <input type="text" class="form-control" id="productName" 
                                           value="${product ? product.name : ''}" required
                                           placeholder="Ex: Pão Francês">
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Preço (R$) *</label>
                                    <input type="number" class="form-control" id="productPrice" 
                                           value="${product ? product.price : ''}" step="0.01" min="0" required
                                           placeholder="0.00">
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Categoria *</label>
                                    <select class="form-select" id="productCategory" required>
                                        <option value="">Selecione a categoria</option>
                                        ${categories.map(cat => 
                                            `<option value="${cat}" ${product && product.category === cat ? 'selected' : ''}>
                                                ${cat}
                                            </option>`
                                        ).join('')}
                                    </select>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">URL da Imagem</label>
                                    <input type="text" class="form-control" id="productImage" 
                                           value="${product ? product.image.replace('../', '') : ''}" 
                                           placeholder="img/produtos/secao/nome-da-imagem.jpg"
                                           onchange="updateImagePreview(this.value)">
                                    <small class="form-text text-muted">
                                        Ex: img/produtos/padaria/pao-frances.jpg
                                    </small>
                                </div>
                                
                                <div class="image-preview-container">
                                    <label class="form-label">Pré-visualização:</label>
                                    <div class="image-preview border rounded p-3 text-center">
                                        <img id="imagePreview" 
                                             src="${product ? product.image : '../img/icon/rg.png'}" 
                                             alt="Pré-visualização" 
                                             class="img-fluid rounded"
                                             style="max-height: 200px; object-fit: contain;"
                                             onerror="this.src='../img/icon/rg.png'">
                                        <div id="noImageText" class="text-muted mt-2 ${product && product.image ? 'd-none' : ''}">
                                            <i class="bi bi-image"></i><br>
                                            Imagem não disponível
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="bi bi-x-circle"></i> Cancelar
                    </button>
                    <button type="button" class="btn btn-primary" onclick="saveProduct(${productId})">
                        <i class="bi bi-check-circle"></i> 
                        ${productId ? 'Atualizar' : 'Adicionar'} Produto
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    
    if (productSection) {
        updateCategories(productSection);
    }
}

// Função para atualizar categorias quando a seção muda
function updateCategories(section) {
    const categories = getCategoriesForSection(section);
    const categorySelect = document.getElementById('productCategory');
    
    if (categorySelect) {
        categorySelect.innerHTML = '<option value="">Selecione a categoria</option>' +
            categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    }
}

// Função para atualizar pré-visualização da imagem
function updateImagePreview(imageUrl) {
    const preview = document.getElementById('imagePreview');
    const noImageText = document.getElementById('noImageText');
    
    if (preview) {
        // Corrige o caminho da imagem para preview
        const correctedPath = fixImagePath(imageUrl);
        preview.src = correctedPath;
    }
    
    if (noImageText) {
        noImageText.classList.toggle('d-none', !!imageUrl);
    }
}

// Função para salvar produto
function saveProduct(productId = null) {
    const form = document.getElementById('productForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const productData = {
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        category: document.getElementById('productCategory').value,
        image: fixImagePath(document.getElementById('productImage').value || 'img/icon/rg.png'),
        section: document.getElementById('productSection').value
    };
    
    // Simulação de salvamento - você deve integrar com seu sistema real
    if (typeof adminProducts !== 'undefined') {
        let success = false;
        
        if (productId) {
            success = adminProducts.editProduct(productId, productData);
        } else {
            const newProduct = adminProducts.addProduct(productData.section, productData);
            success = !!newProduct;
        }
        
        if (success) {
            showAlert(`Produto ${productId ? 'atualizado' : 'adicionado'} com sucesso!`, 'success');
            clearCache();
            
            const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
            if (modal) modal.hide();
            
            refreshDashboard();
        } else {
            showAlert('Erro ao salvar produto!', 'danger');
        }
    } else {
        // Fallback para demonstração
        showAlert(`Produto ${productId ? 'atualizado' : 'adicionado'} com sucesso! (Demo)`, 'success');
        clearCache();
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
        if (modal) modal.hide();
        
        refreshDashboard();
    }
}

// Função para excluir produto
function deleteProduct(productId) {
    if (!confirm('Tem certeza que deseja excluir este produto?\nEsta ação não pode ser desfeita.')) return;
    
    if (typeof adminProducts !== 'undefined' && adminProducts.removeProduct(productId)) {
        showAlert('Produto excluído com sucesso!', 'success');
        clearCache();
        
        const sectionModal = bootstrap.Modal.getInstance(document.getElementById('sectionManagerModal'));
        if (sectionModal) sectionModal.hide();
        
        refreshDashboard();
    } else {
        showAlert('Erro ao excluir produto!', 'danger');
    }
}

// Função para limpar cache
function clearCache() {
    productsCache = null;
    statsCache = null;
}

// Função para atualizar todo o dashboard
function refreshDashboard() {
    if (isLoading) return;
    
    updateProductStats();
    loadProductsBySection();
    loadCategoryReport();
    updateSectionCount();
}

// Função para atualizar contador de seções
function updateSectionCount() {
    const products = loadProductsData();
    const sectionCount = Object.keys(products).length;
    const sectionCountElement = document.getElementById('sectionCount');
    if (sectionCountElement) {
        sectionCountElement.textContent = `${sectionCount} seções`;
    }
}

// Função para carregar dados do dashboard
function loadDashboardData() {
    const userEmail = localStorage.getItem('adminEmail');
    if (userEmail) {
        document.getElementById('userEmail').textContent = userEmail;
    }
    
    // Aguarda um pouco para garantir que o DOM está totalmente carregado
    setTimeout(() => {
        refreshDashboard();
    }, 100);
}

// Inicialização do sistema
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (login(email, password)) {
                showAlert('Login realizado com sucesso!', 'success');
                setTimeout(() => window.location.href = 'dashboard.html', 1000);
            } else {
                showAlert('E-mail ou senha incorretos!', 'danger');
            }
        });
    }
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    if (window.location.pathname.includes('dashboard.html')) {
        loadDashboardData();
    }
});