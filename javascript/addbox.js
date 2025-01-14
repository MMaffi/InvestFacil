const btnadd = document.getElementById('btnadd')
const backmodals = document.getElementById('backmodals')
const modaladdcard = document.getElementById('modaladdcard')
const btncanel = document.getElementById('btncanel')

function openmodal() {  
    backmodals.style.display = 'block'
    modaladdcard.style.display = 'block'
}

function closemodal() {  
    backmodals.style.display = 'none'
    modaladdcard.style.display = 'none'
}

btnadd.addEventListener('click', openmodal)

btncanel.addEventListener('click', closemodal)