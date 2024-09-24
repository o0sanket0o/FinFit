const email = document.getElementById("email");
const password = document.getElementById("password");
const sign = document.getElementById("signin");

sign.addEventListener("click", ()=>{
    console.log("Button is pressed.");
    if(localStorage.getItem("email")){
        window.alert("You are already signed in.");
    }else{
        let mail = email.value;
        let passkey = password.value;
        console.log(mail);
        console.log(passkey);
        if(mail && passkey){
            localStorage.setItem("email", mail);
            localStorage.setItem("password", passkey);
        }
    }
})