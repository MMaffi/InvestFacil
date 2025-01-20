const dataUrl = 'json/data.json';

let jsonData = [];

// Function to load JSON data
async function loadJson() {
    try {
        const response = await fetch(dataUrl);

        if (!response.ok) throw new Error('Erro ao carregar o JSON');
        jsonData = await response.json();
    } catch (error) {
        console.error(error);
    }
}

// JSON search function
function searchJson() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        const searchValue = searchInput.value.toLowerCase();

        // Check if the field is empty
        if (searchValue === '') {
            document.getElementById('results').innerHTML = '';
            return;
        }

        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        // Filter JSON data
        const filteredData = jsonData.filter(item =>
            item.name.toLowerCase().includes(searchValue)
        );

        // Add results to the list
        filteredData.forEach(item => {
            const li = document.createElement('li');

            li.id = 'searchli';
            li.textContent = item.name;
            li.style.userSelect = 'none';
            li.style.position = 'relative';
            li.style.padding = '10px';
            li.style.border = '1px solid #ddd';
            li.style.borderRadius = '5px';
            li.style.cursor = 'pointer';

            // Add click event to item
            li.addEventListener('click', () => {
                const existingCheckbox = li.querySelector('.custom-checkbox');

                if (existingCheckbox) {
                    // Remove checkbox and the style applied
                    existingCheckbox.remove();
                    li.style.backgroundColor = '';
                    li.style.boxShadow = '';
                } else {
                    // Creat style checkbox
                    const checkbox = document.createElement('span');
                    checkbox.className = 'custom-checkbox';
                    checkbox.style.position = 'absolute';
                    checkbox.style.top = '5px';
                    checkbox.style.right = '5px';
                    checkbox.style.width = '13px';
                    checkbox.style.height = '13px';
                    checkbox.style.borderRadius = '50%';
                    checkbox.style.border = '2px solid #9b7ab9';
                    checkbox.style.backgroundColor = '#9b7ab9';
                    checkbox.style.cursor = 'pointer';

                    li.appendChild(checkbox);

                    // Applies styles to <li> when checkbox is present
                    li.style.backgroundColor = '#b39ddb';
                    li.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                }
            });
            
            resultsContainer.appendChild(li);
        });
    }
}

// Load JSON when opening the page
window.onload = loadJson;