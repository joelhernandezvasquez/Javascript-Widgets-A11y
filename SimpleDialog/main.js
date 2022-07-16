
const KEYCODE = {
  ESC:27
};

const btnOpenDialog = document.querySelector(".btn_open_dialog");
const modal = document.querySelector(".modal");
const btnClose =  document.querySelector(".btn_close");
let previousActiveElement = null; // to maintain the reference of the last element activated to manipulate the focus state


const handleModal = () =>{
  previousActiveElement = document.activeElement;  // returns the Element within the DOM that currently has focus.
  modal.classList.toggle('open');
 
}

const closeModal = (event) =>{
  if(event.target.classList.contains("modal")) {
    modal.classList.remove("open");
    btnOpenDialog.focus();
  }
}

const checkCloseDialog = (event) =>{
  if(event.keyCode === KEYCODE.ESC){
    modal.classList.toggle("open")
  }
}

btnOpenDialog.addEventListener("click",handleModal)
btnClose.addEventListener("click",handleModal);
modal.addEventListener("click",closeModal);
document.addEventListener("keydown",checkCloseDialog) ;


// moving the focus to the close button inside the dialog

