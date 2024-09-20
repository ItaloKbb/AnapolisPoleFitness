/* ANIMAÇAO NO SCROLL */
window.addEventListener('scroll', function() {
    // Verifica se a tela é de mobile (menor que 768px)
    if (window.innerWidth <= 767) {
        // Função para ativar/desativar a classe 'active' nos elementos
        function activateVisibleItems(selector) {
            var items = document.querySelectorAll(selector);
            var foundActive = false; // Verifica se um ativo já foi encontrado

            items.forEach(function(item) {
                var rect = item.getBoundingClientRect();
                
                // Se o item estiver visível e nenhum outro ativo foi encontrado, ativa este
                if (rect.top >= 0 && rect.bottom <= window.innerHeight && !foundActive) {
                    item.classList.add('active');
                    foundActive = true; // Marca que encontramos o item ativo
                } else {
                    item.classList.remove('active');
                }
            });
        }

        // Ativa os itens do portfolio
        activateVisibleItems('.container_vertente .card');

        // Ativa os cards das etapas
        activateVisibleItems('.preco-card');

        // Ativa os cards das etapas
        activateVisibleItems('.localizacao iframe');
    }
});