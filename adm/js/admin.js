// =============================================
// SISTEMA ADMINISTRATIVO - SUPERMERCADO RIGONATO
// =============================================

// Credenciais de acesso padrão do sistema
const DEFAULT_CREDENTIALS = {
    email: 'rigonato@com.br',
    password: 'rigonato321'
};

// Variável para controlar o modal atual
let currentModal = null;

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
        // Salva o estado de login no localStorage
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminEmail', email);
        return true;
    }
    return false;
}

// Função de logout do sistema
function logout() {
    // Remove dados de autenticação
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    window.location.href = 'index.html';
}

// Função para exibir alertas no sistema
function showAlert(message, type = 'danger') {
    // Remove alertas existentes para evitar duplicação
    const existingAlerts = document.querySelectorAll('.alert-dismissible');
    existingAlerts.forEach(alert => alert.remove());
    
    // Cria novo alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Remove alerta automaticamente após 5 segundos
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Função para carregar dados dos produtos
function loadProductsData() {
    // Tenta carregar do sistema admin, depois do sistema principal
    if (typeof adminProducts !== 'undefined') {
        return adminProducts.loadProducts();
    }
    return typeof products !== 'undefined' ? products : {};
}

// Função para calcular estatísticas dos produtos
function calculateProductStats() {
    const products = loadProductsData();
    let totalProducts = 0;
    let totalValue = 0;
    const categories = {};
    
    // Percorre todas as seções e produtos
    for (const section in products) {
        totalProducts += products[section].length;
        products[section].forEach(product => {
            totalValue += product.price;
            // Conta produtos por categoria
            categories[product.category] = (categories[product.category] || 0) + 1;
        });
    }
    
    return { 
        totalProducts, 
        totalValue, 
        categories, 
        totalSections: Object.keys(products).length 
    };
}

// Função para atualizar as estatísticas no dashboard
function updateProductStats() {
    const stats = calculateProductStats();
    
    // Atualiza os elementos HTML com os dados calculados
    document.getElementById('totalProducts').textContent = stats.totalProducts;
    document.getElementById('totalValue').textContent = `R$ ${stats.totalValue.toFixed(2).replace('.', ',')}`;
    document.getElementById('totalSections').textContent = stats.totalSections;
    document.getElementById('totalCategories').textContent = Object.keys(stats.categories).length;
}

// Função para carregar produtos por seção
function loadProductsBySection() {
    const products = loadProductsData();
    const container = document.getElementById('productsBySection');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Cria cards para cada seção de produtos
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
}

// Função para carregar relatório de categorias
function loadCategoryReport() {
    const stats = calculateProductStats();
    const container = document.getElementById('categoryReport');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Ordena categorias por quantidade e pega as top 8
    const sortedCategories = Object.entries(stats.categories)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
    
    // Cria linhas da tabela para cada categoria
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
}

// Função para obter categorias disponíveis por seção
function getCategoriesForSection(section) {
    // Tenta carregar categorias do sistema principal
    if (typeof getAvailableCategories !== 'undefined') {
        return getAvailableCategories(section);
    }
    
    // Categorias padrão como fallback
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
    
    // Cria ou atualiza o modal existente
    let modalElement = document.getElementById('sectionManagerModal');
    
    if (!modalElement) {
        modalElement = document.createElement('div');
        modalElement.id = 'sectionManagerModal';
        modalElement.className = 'modal fade';
        modalElement.tabIndex = '-1';
        document.body.appendChild(modalElement);
    }
    
    // HTML do modal de gerenciamento
    modalElement.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        <i class="bi bi-grid-3x3-gap"></i> 
                        Gerenciar ${section.charAt(0).toUpperCase() + section.slice(1)} 
                        <span class="badge bg-light text-primary">${sectionProducts.length} produtos</span>
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <button class="btn btn-success" onclick="openProductModal(null, '${section}')">
                            <i class="bi bi-plus-circle"></i> Adicionar Novo Produto
                        </button>
                        <div class="text-muted">
                            <i class="bi bi-info-circle"></i> Clique em um produto para editar
                        </div>
                    </div>
                    
                    <div class="row g-3" id="productsGrid">
                        ${sectionProducts.map(product => `
                            <div class="col-md-6 col-lg-4">
                                <div class="card product-card h-100" onclick="openProductModal(${product.id}, '${section}')" style="cursor: pointer;">
                                    <div class="card-body text-center">
                                        <div class="product-image-container mb-3">
                                            <img src="${product.image}" alt="${product.name}" 
                                                 class="product-image" 
                                                 onerror="this.src='img/icon/rg.png'">
                                        </div>
                                        <h6 class="card-title">${product.name}</h6>
                                        <div class="card-text">
                                            <div class="fw-bold text-success">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                                            <small class="text-muted">${product.category}</small>
                                        </div>
                                    </div>
                                    <div class="card-footer bg-transparent">
                                        <button class="btn btn-sm btn-outline-danger w-100" 
                                                onclick="event.stopPropagation(); deleteProduct(${product.id})">
                                            <i class="bi bi-trash"></i> Excluir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                        
                        ${sectionProducts.length === 0 ? `
                            <div class="col-12 text-center py-5">
                                <i class="bi bi-inbox display-1 text-muted"></i>
                                <h5 class="text-muted mt-3">Nenhum produto encontrado</h5>
                                <p class="text-muted">Clique no botão acima para adicionar seu primeiro produto</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Exibe o modal
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Função para abrir modal de adicionar/editar produto
function openProductModal(productId = null, section = null) {
    const products = loadProductsData();
    let product = null;
    let productSection = section;
    
    // Busca produto para edição se ID for fornecido
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
    
    // Cria ou atualiza o modal
    let modalElement = document.getElementById('productModal');
    
    if (!modalElement) {
        modalElement = document.createElement('div');
        modalElement.id = 'productModal';
        modalElement.className = 'modal fade';
        modalElement.tabIndex = '-1';
        document.body.appendChild(modalElement);
    }
    
    // HTML do modal de produto
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
                                           value="${product ? product.image : ''}" 
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
                                             src="${product ? product.image : 'img/icon/rg.png'}" 
                                             alt="Pré-visualização" 
                                             class="img-fluid rounded"
                                             style="max-height: 200px; object-fit: contain;"
                                             onerror="this.src='img/icon/rg.png'">
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
    
    // Atualiza categorias se seção for fornecida
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
        preview.src = imageUrl || 'img/icon/rg.png';
    }
    
    if (noImageText) {
        noImageText.classList.toggle('d-none', !!imageUrl);
    }
}

// Função para salvar produto (adicionar ou editar)
function saveProduct(productId = null) {
    const form = document.getElementById('productForm');
    
    // Valida formulário
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Coleta dados do formulário
    const productData = {
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        category: document.getElementById('productCategory').value,
        image: document.getElementById('productImage').value || 'img/icon/rg.png',
        section: document.getElementById('productSection').value
    };
    
    // Verifica se sistema de produtos está disponível
    if (typeof adminProducts !== 'undefined') {
        let success = false;
        
        if (productId) {
            // Edita produto existente
            success = adminProducts.editProduct(productId, productData);
        } else {
            // Adiciona novo produto
            const newProduct = adminProducts.addProduct(productData.section, productData);
            success = !!newProduct;
        }
        
        if (success) {
            showAlert(`Produto ${productId ? 'atualizado' : 'adicionado'} com sucesso!`, 'success');
            
            // Fecha o modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
            if (modal) modal.hide();
            
            refreshDashboard();
        } else {
            showAlert('Erro ao salvar produto!', 'danger');
        }
    } else {
        showAlert('Sistema de produtos não disponível!', 'danger');
    }
}

// Função para excluir produto
function deleteProduct(productId) {
    if (!confirm('Tem certeza que deseja excluir este produto?\nEsta ação não pode ser desfeita.')) return;
    
    if (typeof adminProducts !== 'undefined' && adminProducts.removeProduct(productId)) {
        showAlert('Produto excluído com sucesso!', 'success');
        
        // Fecha o modal de gerenciamento
        const sectionModal = bootstrap.Modal.getInstance(document.getElementById('sectionManagerModal'));
        if (sectionModal) sectionModal.hide();
        
        refreshDashboard();
    } else {
        showAlert('Erro ao excluir produto!', 'danger');
    }
}

// Função para atualizar todo o dashboard
function refreshDashboard() {
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
    
    refreshDashboard();
}

// Inicialização do sistema quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    // Configura formulário de login
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
    
    // Configura botão de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // Carrega dados do dashboard se na página correta
    if (window.location.pathname.includes('dashboard.html')) {
        loadDashboardData();
    }
});