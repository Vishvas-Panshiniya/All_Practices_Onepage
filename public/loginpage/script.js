let char = /^[a-zA-Z\s]*$/;
let no = /^\d{10}$/;
let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// register page validation
const validation = () =>{
    let form = document.getElementsByTagName("input");
    let isvalid = true;

    for (let i = 0; i < form.length; i++) {
        // firstname
        if (form[i].name === "fname") {
            if (!char.test(form[i].value) || form[i].value === "") {
                document.getElementById("s1").innerHTML = "Not Valid Firstname! or filed is blank!";
                isvalid = false;
            }
            else{
                document.getElementById("s1").innerHTML = "";
                isvalid = true;
            }
        }

        // lastname
        if (form[i].name === "lname") {
            if (!char.test(form[i].value) || form[i].value === "") {
                document.getElementById("s2").innerHTML = "Not Valid Lastname! or Filed is required!";
                isvalid = false;
            }
            else{
                document.getElementById("s2").innerHTML = "";
                isvalid = true;
            }
        }

         // email
         if (form[i].name === "email") {
            if (!email.test(form[i].value)) {
                document.getElementById("s3").innerHTML = "Not Valid Email! or Required";
                isvalid = false;
            }
            else{
                document.getElementById("s3").innerHTML = "";
                isvalid = true;
            }
        }
    }

    return isvalid;
}

// password validation check 
const passvalidation = async () =>{
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("rpassword").value;
    let isvalid = true;
    if(password1 === ""){
        document.getElementById("a1").innerText = "Enter Your Password!"
        isvalid = false;
    }
    if(password2 === ""){
        document.getElementById("a1").innerText = "Enter Your Password!"
        isvalid = false;
    }
    if(password1 != password2){
        document.getElementById("a1").innerText = "does not match re-enter password!"
        isvalid = false;
    }
    else{
        document.getElementById("a1").innerText = ""
        isvalid = true;
    }
    if(isvalid === true){
    let formdata = document.getElementById("form");
    let details = new FormData(formdata);
    const params = new URLSearchParams(details);
    const jobdata = await new Response(params).text();
    
    let data = await fetch("http://localhost:7095/activation", {
        method: "POST",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: jobdata
        })
        let result = await data.json();
        if(result.status === 200){
            document.getElementById("s11").innerHTML = `<p>${result.msg}</p><strong><a href="/signin">Login Page</a></strong>`
        }
    }
        return isvalid;
}
    
    // login Page submit fetch data then after login
    async function logindata() {
        let isvalid = true
        if(!email.test(document.getElementById("email").value) || document.getElementById("email").value == ""){
            document.getElementById("s5").innerText = "email is not valid !"
            isvalid = false;
        }
        if(document.getElementById("password").value == ""){
            document.getElementById("s5").innerText = "password is Required!"
            isvalid = false;
        }else{
            document.getElementById("s5").innerText = "password is Required!"
            isvalid = true;
        }
        if(isvalid === true){
        let formdata = document.getElementById("form");
        let details = new FormData(formdata);
        const params = new URLSearchParams(details);
        const jobdata = await new Response(params).text();

        let data = await fetch("http://localhost:7095/profile", {
            method: "POST",
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: jobdata
        })
        let result = await data.json();
        if(result.status === 400){
            document.getElementById("s5").innerText = result.message;
            isvalid = false;
        }
        if(result.status === 200){
            document.getElementById("s5").innerText = result.message;
            document.getElementById("s6").innerHTML = result.message2;
        }
    }
}

// forget password check email and fetch data
async function forget(){
    let isvalid = true;
    if(!email.test(document.getElementById("email").value) || document.getElementById("email").value == ""){
        document.getElementById("s7").innerText = "email is not valid !"
        isvalid = false;
    }
    if(isvalid === true){
        let formdata = document.getElementById("form");
        let details = new FormData(formdata);
        const params = new URLSearchParams(details);
        const jobdata = await new Response(params).text();

        let data = await fetch("http://localhost:7095/forgetpassword", {
            method: "POST",
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: jobdata
        })
        let result = await data.json();
        if(result.status === 400){
            document.getElementById("s7").innerText = result.message;
        }
        if(result.status === 200){
            document.getElementById("s8").innerHTML = `Click Here:- <a href='/password?id=${result.id}&key=${result.key}'>http://localhost:7095/resetpassword?id=${result.id}&key=${result.key}</a>`;
        }
    }
}

const passwordField = document.getElementById("password");
const rpasswordField = document.getElementById("rpassword");
const togglePassword = document.querySelector(".password-toggle-icon i");
const rtogglePassword = document.querySelector(".rpassword-toggle-icon i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});

rtogglePassword.addEventListener("click", function () {
    if (rpasswordField.type === "password") {
      rpasswordField.type = "text";
      rtogglePassword.classList.remove("fa-eye");
      rtogglePassword.classList.add("fa-eye-slash");
    } else {
      rpasswordField.type = "password";
      rtogglePassword.classList.remove("fa-eye-slash");
      rtogglePassword.classList.add("fa-eye");
    }
  });