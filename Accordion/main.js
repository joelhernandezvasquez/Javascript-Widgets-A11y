
const panelHeader = document.querySelector(".panel_header");
const panelBody = document.querySelector('.panel_body');

panelHeader.addEventListener("click",()=>{
  
  if(!panelBody.classList.contains("open")){
    panelHeader.setAttribute('aria-expanded',true);
    panelBody.setAttribute('aria-hidden',false)
  }
  else{
    panelHeader.setAttribute('aria-expanded',false)
    panelBody.setAttribute('aria-hidden',true)
  }

  panelBody.classList.toggle("open");
   
  
 
 //panelHeader.setAttribute('aria-expanded',is);

 
})