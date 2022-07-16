

const alertBtnContainer = document.querySelector('.alert_btn_container');

const icons = [
{
    id:'success',
    background:'#F2FDF2'
    },
    {
        id:'info',
        background:'#FAFDFF'
        },
        {
            id:'error',
            background:'#FFFAD2'
            }

]

const success = {background:'#F2FDF2'}
const info = {background:'#FAFDFF'}
const error = {background:'#FFFAD2'}

function getBackground(iconData)
{
   const {background} = icons.find(icon=> icon.id === iconData)
   return background;
}

function clearAlert () {
    document.querySelector("body").removeChild(document.querySelector(".alert_box"));
}

function isThereAnyOldAlert (){
    return document.querySelector(".alert_box");
}

function addAlert(event){

    if(isThereAnyOldAlert()){
        clearAlert();
    }

    if(event.target.classList.contains(".btn_clear")){
        
        clearAlert();
        return;
    }
   
    
    const alertBox = document.createElement("div");
   const textDescription = document.createElement("p");
   textDescription.textContent =  event.target.dataset.msg;
   alertBox.appendChild(textDescription);
   alertBox.setAttribute('role','alert');
   alertBox.classList.add("alert_box");
   alertBox.style.background = `${getBackground(event.target.dataset.icon)}`;
   document.querySelector("body").insertBefore(alertBox,alertBtnContainer);
}

alertBtnContainer.addEventListener("click",addAlert);

