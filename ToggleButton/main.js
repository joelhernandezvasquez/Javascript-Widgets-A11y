

const toogleButtonContainer = document.querySelector(".toogle_button_container");


function toggleButton (node){
   node.setAttribute("aria-pressed","true");

  
}
function handleToggle(event)
{
    const activeBtn = document.querySelector(".active_button");
    const pressedButton = event.target;
    
    pressedButton.setAttribute("aria-pressed",true);
    activeBtn.setAttribute("aria-pressed",false);
    
    pressedButton.classList.add("active_button");
    activeBtn.classList.remove("active_button");

    
}

toogleButtonContainer.addEventListener("click", handleToggle);
