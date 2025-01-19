// Declaration of variables
const btnopen = document.getElementById('btnopen')
const backmodals = document.getElementById('backmodals')
const modaladdcard = document.getElementById('modaladdcard')
const btncanel = document.getElementById('btncanel')
const search = document.getElementById('search')

let clickedOutside = false;

// Function open modal
function openmodal() {  
    backmodals.style.display = 'block'
    modaladdcard.style.display = 'block'
}

// Function close modal
function closemodal() {  
    backmodals.style.display = 'none'
    modaladdcard.style.display = 'none'
}

// Function clear input search
function clearsearch() {
    search.value = ''
}

// Function clear li
function clearli() {
    const ulresults = document.getElementById('results')

    ulresults.innerHTML = ''
}

// Used to open modal
btnopen.addEventListener('click', openmodal)

// Used to close modal
btncanel.addEventListener('click', () => {
    closemodal()
    clearsearch()
    clearli()
})

// Used to close the modal when clicking outside of it

// Check if the click starts outside the modal
backmodals.addEventListener('mousedown', (event) => {
    if (event.target === backmodals) {
        clickedOutside = true;
    } else {
        clickedOutside = false;
    }
});

// Close the modal only if the mouseup also happens outside the modal
backmodals.addEventListener('mouseup', (event) => {
    if (clickedOutside && event.target === backmodals) {
        closemodal();
        clearsearch();
        clearli();
    }
});