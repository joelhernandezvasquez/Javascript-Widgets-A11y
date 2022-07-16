
const parentCheckbox = document.querySelector("#parent");
const childCheckboxes = Array.from(document.querySelectorAll(".child"))


const setAriaChecked = (node,state) =>{
    node.setAttribute('aria-checked',state);
}

const toogleCheckboxes = (state) =>{
   if(state){
    setAriaChecked(parentCheckbox,true);
   
    childCheckboxes.forEach((child)=>{
        child.checked = true;
        setAriaChecked(child,true);
    })
}

    else{
        setAriaChecked(parentCheckbox,false);
        childCheckboxes.forEach((child)=>{
            child.checked = false;
            setAriaChecked(child,false);
        })
    }
   
}

const onHandleChange = ({target}) =>{
  toogleCheckboxes(target.checked)
}

const getCheckedCheckboxes = () =>{
   const checboxChecked = childCheckboxes.filter(child => child.checked === true )
   return checboxChecked.length;
}

const setIndeterminate = (state)=>{
    parentCheckbox.indeterminate = state;
}

const setParentCheckboxState = (amountToChecked) =>{
  
    if(amountToChecked < 1){
        setIndeterminate(false);
        parentCheckbox.checked = false;
        setAriaChecked(parentCheckbox,false);
    }
    
    if(amountToChecked > 0 && amountToChecked < 3){
       setIndeterminate(true);
       setAriaChecked(parentCheckbox,'mixed')
    }
  
    if(amountToChecked > 2){
     parentCheckbox.checked = true;
     setIndeterminate(false);
     setAriaChecked(parentCheckbox,true);
    return;
  }
}

parentCheckbox.addEventListener("change",onHandleChange);

childCheckboxes.forEach((checkbox)=>{
    checkbox.addEventListener("change",(event)=>{
      
        //setting the aria-checked attribute for individual checkbox
        event.target.checked? setAriaChecked(event.target,true):  setAriaChecked(event.target,false);
      const amountToChecked = getCheckedCheckboxes();
      setParentCheckboxState(amountToChecked);
    })
})