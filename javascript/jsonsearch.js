const dataUrl = 'json/data.json';

let jsonData = [];

// Função para carregar os dados do JSON
async function loadJson() {
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) throw new Error('Erro ao carregar o JSON');
        jsonData = await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Função de busca no JSON
function searchJson() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        const searchValue = searchInput.value.toLowerCase();
        
        // Verificar se o campo está vazio
        if (searchValue === '') {
            document.getElementById('results').innerHTML = '';
            return;
        }

        const resultsContainer = document.getElementById('results');

        resultsContainer.innerHTML = '';

        // Filtra os dados do JSON
        const filteredData = jsonData.filter(item => 
            item.name.toLowerCase().includes(searchValue)
        );

        // Adiciona os resultados na lista
        filteredData.forEach(item => {
            const li = document.createElement('li');
            li.id = 'searchli'
            li.textContent = item.name;
            resultsContainer.appendChild(li);
        });
    }
}

// Carrega o JSON ao abrir a página
window.onload = loadJson;