// Simulando um arquivo JSON (pode ser substituído por uma URL real)
const dataUrl = 'json/data.json'; // Caminho do arquivo JSON

let jsonData = []; // Variável para armazenar os dados carregados

// Função para carregar os dados do JSON
async function loadJson() {
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) throw new Error('Erro ao carregar o JSON');
        jsonData = await response.json(); // Armazena os dados no array jsonData
    } catch (error) {
        console.error(error);
    }
}

// Função de busca no JSON
function searchJson() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        const searchValue = searchInput.value.toLowerCase();  // Valor atualizado da busca
        
        // Verificar se o campo está vazio
        if (searchValue === '') {
            document.getElementById('results').innerHTML = '';  // Limpar lista se estiver vazio
            return;
        }

        const resultsContainer = document.getElementById('results');

        // Limpa os resultados anteriores, apenas se o campo não estiver vazio
        resultsContainer.innerHTML = '';

        // Filtra os dados do JSON
        const filteredData = jsonData.filter(item => 
            item.name.toLowerCase().includes(searchValue)
        );

        // Adiciona os resultados na lista
        filteredData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;  // Exibe o nome do item
            resultsContainer.appendChild(li);
        });
    }
}

// Carrega o JSON ao abrir a página
window.onload = loadJson;