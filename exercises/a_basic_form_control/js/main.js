console.log('connection')

document.getElementById('submission').onclick = function(){

   let passwordCheck = document.querySelector('#password').value;
   let passwordConfirmationCheck = document.querySelector('#confirmPassword').value;
   if(passwordCheck === ""){
      document.getElementsByTagName('p')[0].innerHTML = "please enter password";
   } else {
      if(passwordCheck === passwordConfirmationCheck){
         console.log(passwordCheck);
         console.log(passwordConfirmationCheck);
         document.getElementsByTagName('p')[0].innerHTML = "thank you for fill out the form";

      } else{
         console.log(passwordCheck);
         console.log(passwordConfirmationCheck);
         document.getElementsByTagName('p')[0].innerHTML = "your passwords are not matching each other!";
      }

   }
}