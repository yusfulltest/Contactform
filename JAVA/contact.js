



    let Form = document.getElementById('form');
    let FirstName = document.getElementById('input1');
    let LastName = document.getElementById('input2');
    let Mail = document.getElementById('input3');
    let general = document.getElementById('radinp');
    let support = document.getElementById('radinp2');
    let Textarea = document.getElementById('textarea');
    let Errorquery = document.getElementById('errortextquery');
    let Errorconsent = document.getElementById('errortextconsent');
    let Consent = document.getElementById('check');
    let Confirmation = document.getElementById('successWrap');
    

    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let All= [FirstName,LastName,Mail,Textarea,general,support,Consent]

    let addBorder= (border)=>{
        border.classList.add('errorborder');
    }

    let removeBorder = (border)=>{
        border.classList.remove('errorborder');
    }



let ValidateInputs = () =>{
   
    FirstName.nextElementSibling.innerHTML='';
    removeBorder(FirstName);
    LastName.nextElementSibling.innerHTML='';
    removeBorder(LastName);
    Mail.nextElementSibling.innerHTML='';
    removeBorder(Mail);
    Errorquery.innerHTML=''

    Textarea.nextElementSibling.innerHTML='';
removeBorder(Textarea);
Errorconsent.innerHTML=''    

display=true
   
    
    
if(!FirstName.value){
    FirstName.nextElementSibling.innerHTML='This field is required'
  addBorder(FirstName)
    display=false
}


if(!LastName.value){
    LastName.nextElementSibling.innerHTML='This field is required'
    addBorder(LastName)
    display=false
}


if(!Mail.value || !Mail.value.match(pattern)){
Mail.nextElementSibling.innerHTML='Please enter a valid email address'
addBorder(Mail)
display=false
}


if(!general.checked && !support.checked){
    Errorquery.innerHTML='Please select a query type'
    display=false
}

if(!Textarea.value){
    Textarea.nextElementSibling.innerHTML='This field is required'
addBorder(Textarea)
display=false
}


if(!Consent.checked){
    Errorconsent.innerHTML='To submit this form, please consent to being contacted'
display=false

}




}

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    ValidateInputs();


    if(display){
        Confirmation.classList.remove('d-none')
        All.forEach((input)=>{
            input.value=''
            input.checked=''
            
        })
      
    }

    
   
})

// All.forEach((input)=>{
// input.addEventListener("input",()=>{
//     ValidateInputs();
// })

// })














