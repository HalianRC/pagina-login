/* Desenvolva seu código aqui... */
function myModal(){
  const openModal = document.querySelector(".btn-cadastrar")
  const modal_container = document.querySelector(".modal__container")
openModal.addEventListener("click", function(){
 modal_container.showModal()

})



}
myModal()

