// npm install readline-sync

const readlineSync = require('readline-sync'); // importing readline-sync module

function hasUpperCase(password) {
    return /[A-Z]/.test(password); // Using regex to check if password has at least one uppercase
}

function hasNumbers(password) {
    return /[0-9]/.test(password); // Using regex to check if password has at least one number
}

while (true){
    const password = readlineSync.question('Enter your password: '); // user input
    if (password.length <= 8){
        console.log('Password is too short, must be at least 8 characters!'); // password length must be 8
        continue;
    }
    
    if (!hasUpperCase(password)){ // calling hasUpperCase function to test if password has at least one uppercase
        console.log('Password must have at least one upper-case!');
        continue;
    }
    
    if (!hasNumbers(password)){ // calling hasNumbers function to test if password has at least one number
        console.log('Password must have at least one number!');
        continue;
    }
    
    console.log('Password is valid!');
    
    break; // break out of loop
    
}