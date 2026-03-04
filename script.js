
// form validation using JS

document.getElementById("btn").onclick = function (){

    const inputBox = document.getElementById("email").value;

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(! emailPattern.test (inputBox)){
    document.querySelector("#popUp").innerHTML = "Please provide right email";

    document.getElementById("popUp").style.color = "red";
    return;

   }

   const mobile = document.querySelector("#phone").value;

   const numberPattern = /^[0-9]{10}$/;

   if(! numberPattern.test (mobile)){

    document.querySelector("#popUp").innerHTML = "Please enter the right mobile number";

    document.querySelector("#popUp").style.color = "red";

    return;

   }

   const pass = document.querySelector("#password").value;

   const password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

   if(! password.test (pass)){

    document.querySelector("#popUp").innerHTML = "Please enter the right credential";

    document.querySelector("#popUp").style.color = "red";

    return;
   }


   if(emailPattern.test(inputBox) && numberPattern.test(mobile) && password.test(pass)){

    let newWindow = document.body.innerHTML = "<h1>Welcome 👋</h1><p>Hi there!</p>";

    return;

  }

}