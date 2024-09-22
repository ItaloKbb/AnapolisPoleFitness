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

        activateVisibleItems('.container_vertente .card');

        activateVisibleItems('.preco-card');

        activateVisibleItems('.localizacao iframe');
    }
});

// Função para carregar o JSON e inserir o texto no H1
function carregarHeroText() {
    fetch('dados.json')
        .then(response => response.json()) // Lê o arquivo JSON
        .then(data => {
            let frasesHero = ''; // String para armazenar todas as frases
            const keys = Object.keys(data.hero); // Pega as chaves do objeto "hero"
            
            // Percorre todas as chaves do objeto "hero"
            for (let i = 0; i < keys.length; i++) {
                frasesHero += data.hero[keys[i]];
                
                // Adiciona <br> apenas se não for o último item
                if (i < keys.length - 1) {
                    frasesHero += "<br>";
                }
            }

            // Insere o conteúdo do JSON no H1
            document.getElementById('herotext').innerHTML = frasesHero;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Função para carregar o JSON e inserir o texto no H1
function carregarSobreMimText() {
    fetch('dados.json')
        .then(response => response.json()) // Lê o arquivo JSON
        .then(data => {
            let frasessobremim = ''; // String para armazenar todas as frases
            const keys = Object.keys(data.sobremim); // Pega as chaves do objeto "sobremim"
            
            // Percorre todas as chaves do objeto "sobremim"
            for (let i = 0; i < keys.length; i++) {
                frasessobremim += '<p class="section__description">';
                frasessobremim += data.sobremim[keys[i]];
            }
            // Insere o conteúdo do JSON no H1
            document.getElementById('section__description').innerHTML = frasessobremim;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Chama a função para carregar o conteúdo
carregarHeroText();
carregarSobreMimText();