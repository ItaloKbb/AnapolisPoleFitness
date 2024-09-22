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
            
            frasesHero += '<p class="hero__subtitle">'
            // Percorre todas as chaves do objeto "hero"
            for (let i = 0; i < keys.length; i++) {
                frasesHero += data.hero[keys[i]];
                
                // Adiciona <br> apenas se não for o último item
                if (i < keys.length - 1) {
                    frasesHero += "<br>";
                }
            }

            // Insere o conteúdo do JSON no H1
            document.getElementById('hero-text').innerHTML = frasesHero;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Função para carregar o JSON e inserir o texto no H1
function carregarSobreText() {
    fetch('dados.json')
        .then(response => response.json()) // Lê o arquivo JSON
        .then(data => {
            let frasessobre = ''; // String para armazenar todas as frases
            const keys = Object.keys(data.sobre); // Pega as chaves do objeto "sobremim"
            
            // Percorre todas as chaves do objeto "sobremim"
            for (let i = 0; i < keys.length; i++) {
                frasessobre += '<p class="section__description">';
                frasessobre += data.sobre[keys[i]];
            }
            // Insere o conteúdo do JSON no H1
            document.getElementById('section__description').innerHTML = frasessobre;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

function carregarCardImagemLateral() { 
    fetch('dados.json')
        .then(response => response.json()) // Lê o arquivo JSON
        .then(data => {
            let cards = ''; // String para armazenar todas as frases
            const keys = Object.keys(data['card-imagem-lateral']); // Pega as chaves do objeto "card-imagem-lateral"
            
            // Percorre todas as chaves do objeto "card-imagem-lateral"
            for (let i = 0; i < keys.length; i++) {
                cards += '<div class="card mb-3"><div class="row g-0">';
                let cardsImage = '<div class="col-md-4 colaboradores__image">' +
                    '<img src="' + data['card-imagem-lateral'][keys[i]]['link-image'] + '" class="img-fluid rounded-start" alt="Imagem colaborador"></div>';
                cards += cardsImage;
                cards += '<div class="col-md-8"><div class="card-body">';
                cards += '<h5 class="card-title">' + data['card-imagem-lateral'][keys[i]]['card-title'] + '</h5>';

                // Pega o objeto card-text e percorre suas chaves
                let cardTexts = data['card-imagem-lateral'][keys[i]]['card-text'];
                let cardTextContent = '';

                // Percorre os textos dentro de "card-text"
                for (let textKey in cardTexts) {
                    if (cardTexts.hasOwnProperty(textKey)) {
                        cardTextContent += '<p class="card-text">' + cardTexts[textKey] + '</p>';
                    }
                }

                // Adiciona o conteúdo ao card
                cards += cardTextContent;
                cards += '</div></div></div></div>';
            }

            // Insere o conteúdo no elemento com ID "colaboradores-list"
            document.getElementById('colaboradores-list').innerHTML = cards;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

function carregarCardGenerico() { 
    fetch('dados.json')
        .then(response => response.json()) // Lê o arquivo JSON
        .then(data => {
            let cards = ''; // String para armazenar todas as frases
            const keys = Object.keys(data['card-generico']); // Pega as chaves do objeto "card-generico"
            
            // Percorre todas as chaves do objeto "card-imagem-lateral"
            for (let i = 0; i < keys.length; i++) {
                cards += '<div class="card text-center mb-3"><div class="card-body">';
                cards += '<h5 class="card-title">' + data['card-generico'][keys[i]]['card-title'] + '</h5>';

                // Pega o objeto card-text e percorre suas chaves
                let cardTexts = data['card-generico'][keys[i]]['card-text'];
                let cardTextContent = '';

                // Percorre os textos dentro de "card-text"
                for (let textKey in cardTexts) {
                    if (cardTexts.hasOwnProperty(textKey)) {
                        cardTextContent += '<p class="card-text">' + cardTexts[textKey] + '</p>';
                    }
                }

                // Adiciona o conteúdo ao card
                cards += cardTextContent;
                cards += '</div></div>';
            }

            // Insere o conteúdo no elemento com ID "colaboradores-list"
            document.getElementById('vertentes-list').innerHTML = cards;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Chama a função para carregar o conteúdo
carregarHeroText();
carregarSobreText();
carregarCardImagemLateral();