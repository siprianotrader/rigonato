// Produtos de exemplo para cada seção
const products = {
    padaria: [
        { id: 1, name: "Pão Francês", price: 0.50, image: "img/produtos/Pao-frances.jpg", category: "padaria" },
        { id: 2, name: "Bolo de Chocolate", price: 12.90, image: "img/produtos/bolo.jpg", category: "padaria" },
        { id: 3, name: "Pão de Queijo", price: 8.50, image: "img/produtos/pao-quijo.jfif", category: "padaria" },
        { id: 4, name: "Croissant", price: 4.50, image: "img/produtos/croissant.jpg", category: "padaria" },
        { id: 5, name: "Baguete", price: 3.20, image: "img/produtos/baquete.jpeg", category: "padaria" },
        { id: 36, name: "Pão Integral", price: 6.90, image: "img/produtos/integral.jfif", category: "padaria" },
        { id: 37, name: "Rosca Doce", price: 7.50, image: "img/produtos/rosca-doce.jpg", category: "padaria" },
        { id: 38, name: "Biscoito Amanteigado", price: 5.90, image: "img/produtos/biscoito-amanteigado.jpg", category: "padaria" }
    ],
    acougue: [
        { id: 6, name: "Picanha", price: 49.90, image: "img/produtos/picanha.jpg", category: "acougue" },
        { id: 7, name: "Alcatra", price: 32.90, image: "img/produtos/alcatra.jpg", category: "acougue" },
        { id: 8, name: "Costela", price: 28.50, image: "img/produtos/costela.jpeg", category: "acougue" },
        { id: 9, name: "Frango Inteiro", price: 15.90, image: "img/produtos/frango.jpg", category: "acougue" },
        { id: 10, name: "Linguiça", price: 18.90, image: "img/produtos/linguiça.jpg", category: "acougue" },
        { id: 39, name: "Contrafilé", price: 38.90, image: "img/produtos/contra-file.jpg", category: "acougue" },
        { id: 40, name: "Cupim", price: 34.90, image: "img/produtos/cupim.jpeg", category: "acougue" },
        { id: 41, name: "Carne Moída", price: 26.90, image: "img/produtos/moida.jpg", category: "acougue" }
    ],
    hortifruti: [
        { id: 11, name: "Maçã", price: 6.90, image: "img/produtos/maca.jpg", category: "hortifruti" },
        { id: 12, name: "Banana", price: 4.50, image: "img/produtos/banana.jfif", category: "hortifruti" },
        { id: 13, name: "Alface", price: 2.90, image: "img/produtos/alface.jfif", category: "hortifruti" },
        { id: 14, name: "Tomate", price: 5.90, image: "img/produtos/tomate.jpg", category: "hortifruti" },
        { id: 15, name: "Cenoura", price: 3.50, image: "img/produtos/cenoura.jfif", category: "hortifruti" },
        { id: 42, name: "Laranja", price: 5.50, image: "img/produtos/laranja.jpg", category: "hortifruti" },
        { id: 43, name: "Batata", price: 4.90, image: "img/produtos/batata.jpg", category: "hortifruti" },
        { id: 44, name: "Cebola", price: 3.90, image: "img/produtos/cebola.jpg", category: "hortifruti" }
    ],
    mercearia: [
        { id: 16, name: "Arroz 5kg", price: 24.90, image: "img/produtos/mercearia/arroz.jpeg", category: "mercearia" },
        { id: 17, name: "Feijão 1kg", price: 8.90, image: "img/produtos/mercearia/feijao.jfif", category: "mercearia" },
        { id: 18, name: "Açúcar 2kg", price: 4.50, image: "img/produtos/mercearia/açucar.jpg", category: "mercearia" },
        { id: 19, name: "Óleo 900ml", price: 7.90, image: "img/produtos/mercearia/oleo.png", category: "mercearia" },
        { id: 20, name: "Macarrão 500g", price: 3.90, image: "img/produtos/mercearia/maca.png", category: "mercearia" },
        { id: 45, name: "Farinha de Trigo", price: 5.90, image: "img/produtos/mercearia/trigo.jpg", category: "mercearia" },
        { id: 46, name: "Café 500g", price: 12.90, image: "img/produtos/mercearia/cafe.jpeg", category: "mercearia" },
        { id: 47, name: "Leite 1L", price: 4.90, image: "img/produtos/mercearia/leite.jpg", category: "mercearia" }
    ],
    racoes: [
        { id: 21, name: "Ração Cães Adultos", price: 89.90, image: "img/logo.png", category: "racoes" },
        { id: 22, name: "Ração Gatos", price: 65.90, image: "img/logo.png", category: "racoes" },
        { id: 23, name: "Ração Filhotes", price: 72.50, image: "img/logo.png", category: "racoes" },
        { id: 24, name: "Biscoito Cães", price: 12.90, image: "img/logo.png", category: "racoes" },
        { id: 25, name: "Areia Gatos", price: 25.90, image: "img/logo.png", category: "racoes" },
        { id: 48, name: "Ração Pequenos Portes", price: 95.90, image: "img/logo.png", category: "racoes" },
        { id: 49, name: "Petisco Gatos", price: 15.90, image: "img/logo.png", category: "racoes" },
        { id: 50, name: "Ração Premium", price: 120.90, image: "img/logo.png", category: "racoes" }
    ],
    bebidas: [
        { id: 26, name: "Refrigerante 2L", price: 8.90, image: "img/logo.png", category: "bebidas" },
        { id: 27, name: "Suco 1L", price: 6.50, image: "img/logo.png", category: "bebidas" },
        { id: 28, name: "Cerveja Lata", price: 3.90, image: "img/logo.png", category: "bebidas" },
        { id: 29, name: "Água 500ml", price: 2.50, image: "img/logo.png", category: "bebidas" },
        { id: 30, name: "Energético", price: 9.90, image: "img/logo.png", category: "bebidas" },
        { id: 51, name: "Vinho Tinto", price: 29.90, image: "img/logo.png", category: "bebidas" },
        { id: 52, name: "Whisky", price: 89.90, image: "img/logo.png", category: "bebidas" },
        { id: 53, name: "Água com Gás", price: 3.50, image: "img/logo.png", category: "bebidas" }
    ],
    novidades: [
        { id: 31, name: "Produto Orgânico", price: 12.90, image: "img/logo.png", category: "novidades" },
        { id: 32, name: "Produto Sem Lactose", price: 15.90, image: "img/logo.png", category: "novidades" },
        { id: 33, name: "Produto Vegano", price: 18.50, image: "img/logo.png", category: "novidades" },
        { id: 34, name: "Produto Sem Glúten", price: 14.90, image: "img/logo.png", category: "novidades" },
        { id: 35, name: "Produto Natural", price: 10.90, image: "img/logo.png", category: "novidades" },
        { id: 54, name: "Produto Importado", price: 45.90, image: "img/logo.png", category: "novidades" },
        { id: 55, name: "Produto Gourmet", price: 32.90, image: "img/logo.png", category: "novidades" },
        { id: 56, name: "Produto Artesanal", price: 22.90, image: "img/logo.png", category: "novidades" }
    ]
};

// Carrinho de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
    
    // Atualiza o badge do carrinho
    updateCartBadge();
    
    // Configura os eventos
    setupEventListeners();
});

// Carrega os produtos nas seções da homepage
function loadProducts() {
    for (const section in products) {
        const carousel = document.getElementById(`${section}-carousel`);
        if (carousel) {
            // Limita a 5 produtos por carrossel na homepage
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
    
    // Obtém a categoria da URL
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    
    if (products[pageName]) {
        products[pageName].forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
}

// Cria o card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="p-3">
            <h6 class="mb-2">${product.name}</h6>
            <div class="product-price mb-2">R$ ${product.price.toFixed(2)}</div>
            <button class="btn btn-add-cart" data-id="${product.id}">
                Adicionar ao Carrinho
            </button>
        </div>
    `;
    return card;
}

// Configura os eventos
function setupEventListeners() {
    // Evento para adicionar produtos ao carrinho
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Evento para alternar entre entrega e retirada
    document.querySelectorAll('input[name="deliveryOption"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const addressFields = document.getElementById('address-fields');
            if (this.value === 'store') {
                addressFields.classList.add('hidden');
                // Torna os campos de endereço não obrigatórios
                document.getElementById('customer-address').required = false;
                document.getElementById('customer-number').required = false;
                document.getElementById('customer-neighborhood').required = false;
            } else {
                addressFields.classList.remove('hidden');
                // Torna os campos de endereço obrigatórios
                document.getElementById('customer-address').required = true;
                document.getElementById('customer-number').required = true;
                document.getElementById('customer-neighborhood').required = true;
            }
        });
    });

    // Evento para enviar pedido via WhatsApp
    const sendWhatsAppBtn = document.getElementById('send-whatsapp');
    if (sendWhatsAppBtn) {
        sendWhatsAppBtn.addEventListener('click', sendOrderViaWhatsApp);
    }

    // Configura a data mínima para hoje no campo de data
    const deliveryDate = document.getElementById('delivery-date');
    if (deliveryDate) {
        const today = new Date().toISOString().split('T')[0];
        deliveryDate.min = today;
    }
}

// Adiciona produto ao carrinho
function addToCart(productId) {
    // Encontra o produto em todas as categorias
    let productToAdd = null;
    for (const section in products) {
        const product = products[section].find(p => p.id === productId);
        if (product) {
            productToAdd = product;
            break;
        }
    }

    if (!productToAdd) return;

    // Verifica se o produto já está no carrinho
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

    // Atualiza o localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Atualiza o badge
    updateCartBadge();
    
    // Feedback visual
    showNotification(`${productToAdd.name} adicionado ao carrinho!`);
}

// Mostra notificação
function showNotification(message) {
    // Cria elemento de notificação
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.zIndex = '1060';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove a notificação após 3 segundos
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
        cartItemsContainer.innerHTML = '<p class="text-muted">Seu carrinho está vazio</p>';
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
                <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
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
        cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
    }
    
    // Adiciona eventos para os botões de quantidade
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
        
        // Remove o item se a quantidade for zero
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    
    // Atualiza o localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Atualiza o badge
    updateCartBadge();
    
    // Recarrega o carrinho no modal
    loadCartForCheckout();
}

// Envia o pedido via WhatsApp
function sendOrderViaWhatsApp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Valida o formulário
    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Coleta os dados do formulário
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
    
    // Formata a data
    const formattedDate = new Date(deliveryDate).toLocaleDateString('pt-BR');
    
    // Calcula o total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Monta a mensagem
    let message = `*PEDIDO - SUPERMERCADO RIGONATO*

*Dados do Cliente:*
Nome: ${customerName}
Telefone: ${customerPhone}

${addressInfo}

*Data/Horário:*
${formattedDate} às ${deliveryTime}

*Itens do Pedido:*
${cart.map(item => `- ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`).join('\n')}

*Total: R$ ${total.toFixed(2)}*

Obrigado pela preferência!`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número do WhatsApp (substitua pelo número real)
    const whatsappNumber = '5569993959196';
    
    // Abre o WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Limpa o carrinho após o envio
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    // Fecha o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    if (modal) {
        modal.hide();
    }
    
    // Limpa o formulário
    form.reset();
}

// Carrega o carrinho quando o modal é aberto
document.addEventListener('DOMContentLoaded', function() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.addEventListener('show.bs.modal', loadCartForCheckout);
    }
});

