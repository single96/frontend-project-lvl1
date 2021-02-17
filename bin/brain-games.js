const displayGreetings = () => {
let greetings = "Welcome to the Brain Games!";
document.write(greetings);
}

displayGreetings();

const loginInfo = () => {
let askUserName = prompt('What is your name?');
let askUserPassword = prompt('Enter your password');


do {
    if(askUserName == 'alex' || askUserPassword == '123') {
        alert('Welcome Home' + ' ' + askUserName);
    }

    else {
        alert('Something went wrong');
    }
    
   }

   while (askUserName == true || askUserPassword == true);
} 

loginInfo();