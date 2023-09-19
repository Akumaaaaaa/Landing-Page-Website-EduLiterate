function handleGetFormData(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return { name, email, city, zipCode, status };
}

function isNumber(str){
    return !isNaN(str);
}

function checkboxIsChecked(){
    return document.getElementById('status').checked;
}

function validateFormData(formData){
    return formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()
}

function submit(){
    
    const warningDiv = document.getElementById('warning');
    const formData = handleGetFormData();

    if(!validateFormData(formData)){
        warningDiv.innerText = 'Periksa form anda sekali lagi';
    }else{
        warningDiv.innerText = '';
    }
}

document.getElementById("submit-form").addEventListener("click", (event) => {
    event.preventDefault();
    submit();
})