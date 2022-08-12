const modal = document.querySelector(".modal-container");
const openmodal = document.getElementById("openbtn");
const closemodal = document.querySelector(".closebtn");


openmodal.addEventListener('click' , () => {

modal.style.display = 'block'

});


closemodal.addEventListener('click' , () => {

modal.style.display = 'none'

});


window.addEventListener('click', (e)=> {

if (e.target == modal) {
    modal.style.display = 'none'

}

});

