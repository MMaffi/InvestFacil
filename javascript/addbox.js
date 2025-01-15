// Declaration of variables
const btnadd = document.getElementById('btnadd')
const backmodals = document.getElementById('backmodals')
const modaladdcard = document.getElementById('modaladdcard')
const btncanel = document.getElementById('btncanel')


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


// Used to open modal
btnadd.addEventListener('click', openmodal)

// Used to close modal
btncanel.addEventListener('click', closemodal)

// Used to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === backmodals) {
        backmodals.style.display = 'none';
    }
  });