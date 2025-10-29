if ("0"){
    alert("it will show")
}

let officialName = prompt("What is the “official” name of JavaScript?","");
// if (officialName == "ECMAScript"){
//     alert("Right");
// }
// else{
//     alert("You don’t know? ECMAScript!");
// }
officialName == "ECMAScript" ? alert("Right") : alert("You don’t know? ECMAScript!");

// show the sign
let number = prompt("guess the number",0);
if (number > 0){
    alert(1)
}
else if(number < 0){
    alert(-1)
}
else{
    alert(0)
}

// if to ?
let a = 4
let b = 2
let result = (a + b < 4) ? 'Below' : 'Over';

//rewrite this to ?
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
//ans
let message = (login == 'Employee') ? 'Hello':
              (login == 'Director') ? 'Greetings':
              (login == '') ? 'No login':
              '';

