// Produtos de exemplo para cada seção
const products = {
    padaria: [
        { id: 1, name: "Pão Francês", price: 0.50, image: "img/produtos/padaria/Pao-frances.jpg", category: "padaria" },
        { id: 2, name: "Bolo de Chocolate", price: 12.90, image: "img/produtos/padaria/bolo.jpg", category: "padaria" },
        { id: 3, name: "Pão de Queijo", price: 8.50, image: "img/produtos/padaria/pao-quijo.jfif", category: "padaria" },
        { id: 4, name: "Croissant", price: 4.50, image: "img/produtos/padaria/croissant.jpg", category: "padaria" },
        { id: 5, name: "Baguete", price: 3.20, image: "img/produtos/padaria/baquete.jpeg", category: "padaria" }
    ],
    acougue: [
        { id: 6, name: "Picanha", price: 74.99, image: "img/produtos/açougue/bovina/picanha.jpg", category: "bovina" },
        { id: 7, name: "Alcatra", price: 41.99, image: "img/produtos/açougue/bovina/alcatra.jpg", category: "bovina" },
        { id: 8, name: "Costela", price: 16.99, image: "img/produtos/açougue/bovina/costela.jpeg", category: "bovina" },
        { id: 9, name: "Frango Inteiro", price: 15.90, image: "img/produtos/açougue/aves/frango.jpg", category: "frango" },
        { id: 10, name: "Linguiça", price: 19.99, image: "img/produtos/açougue/linguiça/linguiça.jpg", category: "linguiças" },
        { id: 11, name: "Filé Mignon", price: 42.99, image: "img/icon/rg.png", category: "bovina" },
        { id: 12, name: "Contra Filé", price: 42.99, image: "img/icon/rg.png", category: "bovina" },
        { id: 13, name: "Cabeça de Picanha", price: 49.99, image: "img/icon/rg.png", category: "bovina" },
        { id: 14, name: "Coxão Mole", price: 36.99, image: "img/icon/rg.png", category: "bovina" },
        { id: 15, name: "Patinho", price: 34.99, image: "img/icon/rg.png", category: "bovina" },
        { id: 16, name: "Chã de Fora", price: 31.99, image: "img/icon/rg.png", category: "bovina" },
        { id: 17, name: "Alcatrinha", price: 34.99, image: "img/icon/rg.png", category: "bovina" }
    ],
    hortifruti: [
        { id: 18, name: "Maçã", price: 6.90, image: "img/produtos/hortifruti/maca.jpg", category: "hortifruti" },
        { id: 19, name: "Banana", price: 4.50, image: "img/produtos/hortifruti/banana.jpg", category: "hortifruti" },
        { id: 20, name: "Alface", price: 2.90, image: "img/produtos/hortifruti/alface.jfif", category: "hortifruti" },
        { id: 21, name: "Tomate", price: 5.90, image: "img/produtos/hortifruti/tomate.jpg", category: "hortifruti" },
        { id: 22, name: "Cenoura", price: 3.50, image: "img/produtos/hortifruti/cenoura.jfif", category: "hortifruti" }
    ],
    mercearia: [
        { id: 23, name: "Arroz 5kg", price: 24.90, image: "img/produtos/mercearia/arroz.jpeg", category: "mercearia" },
        { id: 24, name: "Feijão 1kg", price: 8.90, image: "img/produtos/mercearia/feijao.jfif", category: "mercearia" },
        { id: 25, name: "Açúcar 2kg", price: 4.50, image: "img/produtos/mercearia/açucar.jpg", category: "mercearia" },
        { id: 26, name: "Óleo 900ml", price: 7.90, image: "img/produtos/mercearia/oleo.png", category: "mercearia" },
        { id: 27, name: "Macarrão 500g", price: 3.90, image: "img/produtos/mercearia/maca.png", category: "mercearia" }
    ],
    racoes: [
        { id: 28, name: "Ração Cães Adultos", price: 89.90, image: "img/icon/rg.png", category: "racoes" },
        { id: 29, name: "Ração Gatos", price: 65.90, image: "img/icon/rg.png", category: "racoes" },
        { id: 30, name: "Ração Filhotes", price: 72.50, image: "img/icon/rg.png", category: "racoes" },
        { id: 31, name: "Biscoito Cães", price: 12.90, image: "img/icon/rg.png", category: "racoes" },
        { id: 32, name: "Areia Gatos", price: 25.90, image: "img/icon/rg.png", category: "racoes" }
    ],
    bebidas: [
        { id: 33, name: "Refrigerante 2L", price: 8.90, image: "img/icon/rg.png", category: "bebidas" },
        { id: 34, name: "Suco 1L", price: 6.50, image: "img/icon/rg.png", category: "bebidas" },
        { id: 35, name: "Cerveja Lata", price: 3.90, image: "img/icon/rg.png", category: "bebidas" },
        { id: 36, name: "Água 500ml", price: 2.50, image: "img/icon/rg.png", category: "bebidas" },
        { id: 37, name: "Energético", price: 9.90, image: "img/icon/rg.png", category: "bebidas" }
    ],
    novidades: [
        { id: 38, name: "Produto Orgânico", price: 12.90, image: "img/icon/rg.png", category: "novidades" },
        { id: 39, name: "Produto Sem Lactose", price: 15.90, image: "img/icon/rg.png", category: "novidades" },
        { id: 40, name: "Produto Vegano", price: 18.50, image: "img/icon/rg.png", category: "novidades" },
        { id: 41, name: "Produto Sem Glúten", price: 14.90, image: "img/icon/rg.png", category: "novidades" },
        { id: 42, name: "Produto Natural", price: 10.90, image: "img/icon/rg.png", category: "novidades" }
    ]
};

// Carrinho de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para formatar preço com vírgula (para exibição)
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// =============================================
// SISTEMA DE GERENCIAMENTO DE PRODUTOS
// =============================================

// Sistema de gerenciamento de produtos
const adminProducts = {
    // Carrega todos os produtos
    loadProducts: function() {
        const savedProducts = localStorage.getItem('rigonatoProducts');
        if (savedProducts) {
            return JSON.parse(savedProducts);
        }
        
        // Se não existir no localStorage, usa os produtos padrão e salva
        this.saveProducts(products);
        return products;
    },
    
    // Salva todos os produtos
    saveProducts: function(productsData) {
        localStorage.setItem('rigonatoProducts', JSON.stringify(productsData));
        // Atualiza a variável global products
        Object.keys(productsData).forEach(section => {
            products[section] = productsData[section];
        });
        return true;
    },
    
    // Adiciona um novo produto
    addProduct: function(section, productData) {
        const allProducts = this.loadProducts();
        
        // Gera um ID único
        const newId = this.generateProductId(allProducts);
        
        const newProduct = {
            id: newId,
            name: productData.name,
            price: parseFloat(productData.price),
            image: productData.image,
            category: productData.category
        };
        
        if (!allProducts[section]) {
            allProducts[section] = [];
        }
        
        allProducts[section].push(newProduct);
        this.saveProducts(allProducts);
        return newProduct;
    },
    
    // Edita um produto existente
    editProduct: function(productId, productData) {
        const allProducts = this.loadProducts();
        let productFound = false;
        
        for (const section in allProducts) {
            const productIndex = allProducts[section].findIndex(p => p.id === productId);
            if (productIndex !== -1) {
                const oldProduct = allProducts[section][productIndex];
                
                // Se mudou de seção, remove da seção antiga e adiciona na nova
                if (section !== productData.section) {
                    allProducts[section].splice(productIndex, 1);
                    
                    // Adiciona na nova seção
                    if (!allProducts[productData.section]) {
                        allProducts[productData.section] = [];
                    }
                    allProducts[productData.section].push({
                        ...oldProduct,
                        name: productData.name,
                        price: parseFloat(productData.price),
                        image: productData.image,
                        category: productData.category
                    });
                } else {
                    // Atualiza na mesma seção
                    allProducts[section][productIndex] = {
                        ...oldProduct,
                        name: productData.name,
                        price: parseFloat(productData.price),
                        image: productData.image,
                        category: productData.category
                    };
                }
                
                productFound = true;
                break;
            }
        }
        
        if (productFound) {
            this.saveProducts(allProducts);
            return true;
        }
        
        return false;
    },
    
    // Remove um produto
    removeProduct: function(productId) {
        const allProducts = this.loadProducts();
        let productFound = false;
        
        for (const section in allProducts) {
            const productIndex = allProducts[section].findIndex(p => p.id === productId);
            if (productIndex !== -1) {
                allProducts[section].splice(productIndex, 1);
                productFound = true;
                break;
            }
        }
        
        if (productFound) {
            this.saveProducts(allProducts);
            return true;
        }
        
        return false;
    },
    
    // Busca um produto pelo ID
    getProduct: function(productId) {
        const allProducts = this.loadProducts();
        
        for (const section in allProducts) {
            const product = allProducts[section].find(p => p.id === productId);
            if (product) {
                return { ...product, section };
            }
        }
        
        return null;
    },
    
    // Gera um ID único para novo produto
    generateProductId: function(allProducts) {
        let maxId = 0;
        
        for (const section in allProducts) {
            allProducts[section].forEach(product => {
                if (product.id > maxId) {
                    maxId = product.id;
                }
            });
        }
        
        return maxId + 1;
    },
    
    // Atualiza todas as exibições de produtos na página
    refreshProductDisplays: function() {
        // Força o recarregamento dos produtos do localStorage
        const currentProducts = this.loadProducts();
        
        // Recarrega produtos na homepage se estiver nela
        if (document.querySelector('.product-carousel')) {
            const carousels = document.querySelectorAll('.product-carousel');
            carousels.forEach(carousel => carousel.innerHTML = '');
            loadProducts();
        }
        
        // Recarrega produtos em páginas de seção
        if (document.getElementById('products-grid')) {
            loadSectionProducts();
        }
        
        // Dispara um evento customizado para forçar atualização
        window.dispatchEvent(new CustomEvent('productsUpdated'));
    }
};

// Função para inicializar produtos no localStorage
function initializeProducts() {
    if (!localStorage.getItem('rigonatoProducts')) {
        localStorage.setItem('rigonatoProducts', JSON.stringify(products));
    }
}

// =============================================
// FUNÇÕES PRINCIPAIS DO SITE
// =============================================

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    
    // Carrega os produtos nas seções da homepage
    if (document.querySelector('.product-carousel')) {
        loadProducts();
    }
    
    // Carrega produtos em páginas de seção específica
    if (document.getElementById('products-grid')) {
        loadSectionProducts();
    }
    
    // Inicializa o carousel de seções
    initSectionsCarousel();
    
    // Atualiza o badge do carrinho
    updateCartBadge();
    
    // Configura os eventos
    setupEventListeners();
    
    // Inicializa o sistema de sincronização
    initializeSyncSystem();
});

// Carrega os produtos nas seções da homepage
function loadProducts() {
    // SEMPRE carrega os produtos mais recentes do localStorage
    const currentProducts = adminProducts.loadProducts();
    
    for (const section in currentProducts) {
        const carousel = document.getElementById(`${section}-carousel`);
        if (carousel) {
            // Limpa o carousel antes de adicionar
            carousel.innerHTML = '';
            const limitedProducts = currentProducts[section].slice(0, 5);
            limitedProducts.forEach(product => {
                const productCard = createProductCard(product);
                carousel.appendChild(productCard);
            });
        }
    }
}

// Carrega produtos em páginas de seção específica
function loadSectionProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    
    // SEMPRE carrega os produtos mais recentes do localStorage
    const currentProducts = adminProducts.loadProducts();
    
    if (currentProducts[pageName]) {
        // Limpa o grid antes de adicionar produtos
        productsGrid.innerHTML = '';
        
        currentProducts[pageName].forEach(product => {
            const productCard = createSectionProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Configura os filtros se existirem
        setupFilterButtons();
    }
}

// =============================================
// SISTEMA DE SINCRONIZAÇÃO EM TEMPO REAL
// =============================================

function initializeSyncSystem() {
    // Ouvinte para detectar mudanças no localStorage (entre abas)
    window.addEventListener('storage', function(e) {
        if (e.key === 'rigonatoProducts' || e.key === 'productsLastUpdate') {
            console.log('Mudanças detectadas nos produtos, atualizando...');
            setTimeout(() => {
                adminProducts.refreshProductDisplays();
            }, 100);
        }
    });

    // Ouvinte para eventos customizados de atualização
    window.addEventListener('productsUpdated', function() {
        console.log('Produtos atualizados via evento, recarregando exibição...');
        // Força a atualização das exibições
        if (document.querySelector('.product-carousel')) {
            loadProducts();
        }
        if (document.getElementById('products-grid')) {
            loadSectionProducts();
        }
    });

    // Verifica por atualizações a cada segundo
    setInterval(function() {
        const lastUpdate = localStorage.getItem('productsLastUpdate');
        const currentTime = Date.now();
        
        // Se detectar que houve uma atualização recente (últimos 3 segundos)
        if (lastUpdate && (currentTime - parseInt(lastUpdate)) < 3000) {
            console.log('Atualização recente detectada, recarregando produtos...');
            adminProducts.refreshProductDisplays();
            
            // Limpa o timestamp para evitar recarregamentos desnecessários
            localStorage.removeItem('productsLastUpdate');
        }
    }, 1000);

    // Inicializa o último estado conhecido
    const initialProducts = JSON.stringify(adminProducts.loadProducts());
    localStorage.setItem('lastKnownProducts', initialProducts);
}

// =============================================
// FUNÇÕES EXISTENTES (MANTIDAS)
// =============================================

// Inicializa o carousel de seções
function initSectionsCarousel() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.section-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!track || !cards.length) return;
    
    function getVisibleCardsCount() {
        const containerWidth = document.querySelector('.carousel-container').offsetWidth;
        const cardWidth = cards[0].offsetWidth + 15;
        return Math.floor(containerWidth / cardWidth);
    }
    
    let currentPosition = 0;
    let visibleCards = getVisibleCardsCount();
    const totalCards = cards.length;
    let autoPlayInterval;
    
    // No desktop, força 4 cards visíveis
    if (window.innerWidth >= 992) {
        visibleCards = 4;
    }
    
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        
        autoPlayInterval = setInterval(() => {
            if (currentPosition >= totalCards - visibleCards) {
                currentPosition = 0;
            } else {
                currentPosition++;
            }
            updateCarousel();
        }, 3000);
    }
    
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 15;
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        
        const totalSlides = Math.ceil(totalCards / visibleCards);
        const currentSlide = Math.floor(currentPosition / visibleCards);
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        
        if (prevBtn) prevBtn.style.display = currentPosition === 0 ? 'none' : 'flex';
        if (nextBtn) nextBtn.style.display = currentPosition >= totalCards - visibleCards ? 'none' : 'flex';
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPosition > 0) {
                currentPosition--;
                updateCarousel();
                resetAutoPlay();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentPosition < totalCards - visibleCards) {
                currentPosition++;
                updateCarousel();
                resetAutoPlay();
            }
        });
    }
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            currentPosition = slideIndex * visibleCards;
            updateCarousel();
            resetAutoPlay();
        });
    });
    
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }
    
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        container.addEventListener('mouseleave', startAutoPlay);
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            visibleCards = 4;
        } else {
            visibleCards = getVisibleCardsCount();
        }
        
        if (currentPosition > totalCards - visibleCards) {
            currentPosition = Math.max(0, totalCards - visibleCards);
        }
        updateCarousel();
        resetAutoPlay();
    });
    
    updateCarousel();
    startAutoPlay();
}

// Cria card de produto para homepage
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="p-3">
            <h6 class="mb-2 text-center">${product.name}</h6>
            <div class="product-price mb-2 text-center">R$ ${formatPrice(product.price)}</div>
            <button class="btn btn-add-cart" data-id="${product.id}">
                Adicionar ao Carrinho
            </button>
        </div>
    `;
    return card;
}

// Cria card de produto para páginas de seção (com categorias)
function createSectionProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category || 'all');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="p-3">
            <h6 class="mb-2">${product.name}</h6>
            <div class="product-price mb-2">R$ ${formatPrice(product.price)}</div>
            <div class="product-category mb-2">
                <small class="text-muted">${getCategoryName(product.category)}</small>
            </div>
            <button class="btn btn-add-cart" data-id="${product.id}">
                Adicionar ao Carrinho
            </button>
        </div>
    `;
    return card;
}

// Configura os botões de filtro para páginas de seção
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona active no botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
}

// Filtra os produtos nas páginas de seção
function filterProducts(filter) {
    const products = document.querySelectorAll('#products-grid .product-card');
    if (!products.length) return;
    
    products.forEach(product => {
        const category = product.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Retorna o nome da categoria para exibição
function getCategoryName(category) {
    const categories = {
        'bovina': 'Bovina',
        'suina': 'Suína', 
        'frango': 'Frango',
        'linguiças': 'Linguiças',
        'padaria': 'Padaria',
        'acougue': 'Açougue',
        'hortifruti': 'Hortifrúti',
        'mercearia': 'Mercearia',
        'racoes': 'Rações',
        'bebidas': 'Bebidas',
        'novidades': 'Novidades'
    };
    return categories[category] || 'Geral';
}

// Configura os eventos
function setupEventListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    document.querySelectorAll('input[name="deliveryOption"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const addressFields = document.getElementById('address-fields');
            if (this.value === 'store') {
                addressFields.classList.add('hidden');
                document.getElementById('customer-address').required = false;
                document.getElementById('customer-number').required = false;
                document.getElementById('customer-neighborhood').required = false;
            } else {
                addressFields.classList.remove('hidden');
                document.getElementById('customer-address').required = true;
                document.getElementById('customer-number').required = true;
                document.getElementById('customer-neighborhood').required = true;
            }
        });
    });

    const sendWhatsAppBtn = document.getElementById('send-whatsapp');
    if (sendWhatsAppBtn) {
        sendWhatsAppBtn.addEventListener('click', sendOrderViaWhatsApp);
    }

    const deliveryDate = document.getElementById('delivery-date');
    if (deliveryDate) {
        const today = new Date().toISOString().split('T')[0];
        deliveryDate.min = today;
    }
}

// Adiciona produto ao carrinho
function addToCart(productId) {
    // Busca o produto nos dados atualizados
    const currentProducts = adminProducts.loadProducts();
    let productToAdd = null;
    
    for (const section in currentProducts) {
        const product = currentProducts[section].find(p => p.id === productId);
        if (product) {
            productToAdd = product;
            break;
        }
    }

    if (!productToAdd) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showNotification(`${productToAdd.name} adicionado ao carrinho!`);
}

// Mostra notificação
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.zIndex = '1060';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Atualiza o badge do carrinho
function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        badge.textContent = totalItems;
    }
}

// Carrega os itens do carrinho no modal de checkout
function loadCartForCheckout() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-muted text-center">Seu carrinho está vazio</p>';
        if (cartTotalElement) {
            cartTotalElement.textContent = 'R$ 0,00';
        }
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-details">
                <div class="fw-bold">${item.name}</div>
                <div class="cart-item-price">R$ ${formatPrice(itemTotal)}</div>
            </div>
            <div class="cart-item-quantity">
                <div class="quantity-btn" data-id="${item.id}" data-action="decrease">-</div>
                <span>${item.quantity}</span>
                <div class="quantity-btn" data-id="${item.id}" data-action="increase">+</div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    if (cartTotalElement) {
        cartTotalElement.textContent = `R$ ${formatPrice(total)}`;
    }
    
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const action = this.getAttribute('data-action');
            updateCartQuantity(productId, action);
        });
    });
}

// Atualiza a quantidade de um item no carrinho
function updateCartQuantity(productId, action) {
    const item = cart.find(item => item.id === productId);
    
    if (!item) return;
    
    if (action === 'increase') {
        item.quantity += 1;
    } else if (action === 'decrease') {
        item.quantity -= 1;
        
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    loadCartForCheckout();
}

// Envia o pedido via WhatsApp
function sendOrderViaWhatsApp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const deliveryOption = document.querySelector('input[name="deliveryOption"]:checked').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    const deliveryTime = document.getElementById('delivery-time').value;
    
    let addressInfo = '';
    if (deliveryOption === 'home') {
        const customerAddress = document.getElementById('customer-address').value;
        const customerNumber = document.getElementById('customer-number').value;
        const customerNeighborhood = document.getElementById('customer-neighborhood').value;
        const customerReference = document.getElementById('customer-reference').value;
        
        addressInfo = `
*Endereço de Entrega:*
${customerAddress}, ${customerNumber}
${customerNeighborhood}
${customerReference ? `Referência: ${customerReference}` : ''}
        `;
    } else {
        addressInfo = '*Retirada na Loja*';
    }
    
    const formattedDate = new Date(deliveryDate).toLocaleDateString('pt-BR');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let message = `*PEDIDO - SUPERMERCADO RIGONATO*

*Dados do Cliente:*
Nome: ${customerName}
Telefone: ${customerPhone}

${addressInfo}

*Data/Horário:*
${formattedDate} às ${deliveryTime}

*Itens do Pedido:*
${cart.map(item => `- ${item.quantity}x ${item.name} - R$ ${formatPrice(item.price * item.quantity)}`).join('\n')}

*Total: R$ ${formatPrice(total)}*

Obrigado pela preferência!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '5569993959196';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    if (modal) {
        modal.hide();
    }
    
    form.reset();
}

// Carrega o carrinho quando o modal é aberto
document.addEventListener('DOMContentLoaded', function() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.addEventListener('show.bs.modal', loadCartForCheckout);
    }
});