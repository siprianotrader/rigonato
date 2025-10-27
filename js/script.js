// Produtos de exemplo para cada seção
const products = {
    padaria: [
        { id: 1, name: "Pão Francês", price: 0.50, image: "img/produtos/Pao-frances.jpg", category: "padaria" },
        { id: 2, name: "Bolo de Chocolate", price: 12.90, image: "img/produtos/bolo.jpg", category: "padaria" },
        { id: 3, name: "Pão de Queijo", price: 8.50, image: "img/produtos/pao-quijo.jfif", category: "padaria" },
        { id: 4, name: "Croissant", price: 4.50, image: "img/produtos/croissant.jpg", category: "padaria" },
        { id: 5, name: "Baguete", price: 3.20, image: "img/produtos/baquete.jpeg", category: "padaria" }
    ],
    acougue: [
        { id: 6, name: "Picanha", price: 49.90, image: "img/produtos/picanha.jpg", category: "bovina" },
        { id: 7, name: "Alcatra", price: 32.90, image: "img/produtos/alcatra.jpg", category: "bovina" },
        { id: 8, name: "Costela", price: 28.50, image: "img/produtos/costela.jpeg", category: "bovina" },
        { id: 9, name: "Frango Inteiro", price: 15.90, image: "img/produtos/frango.jpg", category: "frango" },
        { id: 10, name: "Linguiça", price: 18.90, image: "img/produtos/linguiça.jpg", category: "linguiças" }
    ],
    hortifruti: [
        { id: 11, name: "Maçã", price: 6.90, image: "img/produtos/maca.jpg", category: "hortifruti" },
        { id: 12, name: "Banana", price: 4.50, image: "img/produtos/banana.jfif", category: "hortifruti" },
        { id: 13, name: "Alface", price: 2.90, image: "img/produtos/alface.jfif", category: "hortifruti" },
        { id: 14, name: "Tomate", price: 5.90, image: "img/produtos/tomate.jpg", category: "hortifruti" },
        { id: 15, name: "Cenoura", price: 3.50, image: "img/produtos/cenoura.jfif", category: "hortifruti" }
    ],
    mercearia: [
        { id: 16, name: "Arroz 5kg", price: 24.90, image: "img/produtos/mercearia/arroz.jpeg", category: "mercearia" },
        { id: 17, name: "Feijão 1kg", price: 8.90, image: "img/produtos/mercearia/feijao.jfif", category: "mercearia" },
        { id: 18, name: "Açúcar 2kg", price: 4.50, image: "img/produtos/mercearia/açucar.jpg", category: "mercearia" },
        { id: 19, name: "Óleo 900ml", price: 7.90, image: "img/produtos/mercearia/oleo.png", category: "mercearia" },
        { id: 20, name: "Macarrão 500g", price: 3.90, image: "img/produtos/mercearia/maca.png", category: "mercearia" }
    ],
    racoes: [
        { id: 21, name: "Ração Cães Adultos", price: 89.90, image: "img/logo.png", category: "racoes" },
        { id: 22, name: "Ração Gatos", price: 65.90, image: "img/logo.png", category: "racoes" },
        { id: 23, name: "Ração Filhotes", price: 72.50, image: "img/logo.png", category: "racoes" },
        { id: 24, name: "Biscoito Cães", price: 12.90, image: "img/logo.png", category: "racoes" },
        { id: 25, name: "Areia Gatos", price: 25.90, image: "img/logo.png", category: "racoes" }
    ],
    bebidas: [
        { id: 26, name: "Refrigerante 2L", price: 8.90, image: "img/logo.png", category: "bebidas" },
        { id: 27, name: "Suco 1L", price: 6.50, image: "img/logo.png", category: "bebidas" },
        { id: 28, name: "Cerveja Lata", price: 3.90, image: "img/logo.png", category: "bebidas" },
        { id: 29, name: "Água 500ml", price: 2.50, image: "img/logo.png", category: "bebidas" },
        { id: 30, name: "Energético", price: 9.90, image: "img/logo.png", category: "bebidas" }
    ],
    novidades: [
        { id: 31, name: "Produto Orgânico", price: 12.90, image: "img/logo.png", category: "novidades" },
        { id: 32, name: "Produto Sem Lactose", price: 15.90, image: "img/logo.png", category: "novidades" },
        { id: 33, name: "Produto Vegano", price: 18.50, image: "img/logo.png", category: "novidades" },
        { id: 34, name: "Produto Sem Glúten", price: 14.90, image: "img/logo.png", category: "novidades" },
        { id: 35, name: "Produto Natural", price: 10.90, image: "img/logo.png", category: "novidades" }
    ]
};

// Carrinho de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para formatar preço com vírgula (para exibição)
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
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
});

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

// Carrega os produtos nas seções da homepage
function loadProducts() {
    for (const section in products) {
        const carousel = document.getElementById(`${section}-carousel`);
        if (carousel) {
            const limitedProducts = products[section].slice(0, 5);
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
    
    if (products[pageName]) {
        // Limpa o grid antes de adicionar produtos
        productsGrid.innerHTML = '';
        
        products[pageName].forEach(product => {
            const productCard = createSectionProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Configura os filtros se existirem
        setupFilterButtons();
    }
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
    let productToAdd = null;
    for (const section in products) {
        const product = products[section].find(p => p.id === productId);
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