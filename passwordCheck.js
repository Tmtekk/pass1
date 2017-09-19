'use strict';

function checkPassword() {
    let str = document.getElementById('form2').value;
    let passLength = str.length;
    let numberRegex = /[0-9]/;
    let specialCharacters = /^(?=.*[#?!@$%^&*])/;
    let repeat = /(.)\1/;
    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;

    //check for consecutive, repeating characters.
    if(repeat.test(str)){
      document.getElementById("text1").textContent = 'There should not be consecutive repeating characters in your password';
    }

    //check input length.
    if(str.length < 8){
      const lengthMessage = 'Your password should be eight characters or more. Yours was ' + passLength + ' characters long';
      document.getElementById("text2").textContent = lengthMessage;
    }

    //check input for numeric characters.
    if (!numberRegex.test(str)){
      document.getElementById("text3").textContent = "Your password should have at least one number";
    }

    //check input for special characters using a regular expression.
    if(!specialCharacters.test(str)){
        document.getElementById("text4").textContent = "Your password should have at least one special character from the set #?!@$%^&*";
    }

    //check input for both lower and upper case letters.
    if(!(lowerCase.test(str) && upperCase.test(str))){
        document.getElementById("text5").textContent = "Your password should have both lower case and upper case letters";
    }

    else {
      document.getElementById("text6").textContent = "Your password is good!!";
    }

     document.getElementById("form2").value = "";

}
