//getting el

const formEl=document.getElementById('form');
const nameEl=document.getElementById('username');
const emailEl=document.getElementById('email');
const passwordEl=document.getElementById('Password');
const password2El=document.getElementById('Password2');

//step-1
formEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    validateInputs();
});

//function 
//step-3
//error
const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errors=inputControl.querySelector(".error");

    errors.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove("success");

    
}

//step-4
//success
const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errors=inputControl.querySelector(".error")

    errors.innerText=null;
    inputControl.classList.add('success');
    inputControl.classList.remove("error");
}
//Email validation
//step-5
  const isEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };


//step-2
//validate

const validateInputs=()=>{
const username = nameEl.value.trim();
const email = emailEl.value.trim();
const password = passwordEl.value.trim();
const confirmPassword = password2El.value.trim();

//user Name
if(username===""){
    setError(nameEl,'EnterName')
}
else{
    setSuccess(nameEl);
}

//email
if (email === "") {
    setError(emailEl, "Enter Email");
  } else if (!isEmail(email)) {
    setError(emailEl, "Enter a valid email address");
  } else {
    setSuccess(emailEl);
  }
//password
  if (password === "") {
    setError(passwordEl, "Enter Password");
  } else if (password.length > 6) {
    setError(passwordEl, "Password must be at least 6 character.");
  } else {
    setSuccess(passwordEl);
  }

  //confirm password

  if (confirmPassword === "") {
    setError(password2El, "confirm your password");
  } else if (confirmPassword.length < 6) {
    setError(password2El, "Password must be at least 6 character.");
  } else if (confirmPassword !== password) {
    setError(password2El, "Check password");
  } else {
    setSuccess(password2El);
  }
}