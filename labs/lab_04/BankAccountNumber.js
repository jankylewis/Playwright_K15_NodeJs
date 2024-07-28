const readline = require('readline-sync');

let bankAccount = {
    accountNumber: "123",
    rountingNumber: "112",
    balance: 1000000
}

let anotherBankAccount = { ...bankAccount };
anotherBankAccount.accountNumber = "142";

let bankAccounts = [ bankAccount, anotherBankAccount ];

//It can be a while(true) at this if it is wanted to use the app consecutively
//If it is a while(true) here, we may adjust the below logics
console.log('=== Banking Application ===');

console.log('0. Exit the program');
console.log('1. Find your bank account');
console.log('2. Update your balance');
console.log('3. Withdraw your money');

const userSelection = readline.question('Enter your selection: ');

switch(userSelection) {

    case '1':
        const frUserBankAccount = readline.question('Enter your current Bank Account: ');
        getUserAccount(frUserBankAccount);
        break;

    case '2':
        const secUserBankAccount = readline.question('Enter your current Bank Account: ');
        const currentUserBalance = readline.question('Enter your expected Balance: ');
        adjustBalance(secUserBankAccount, currentUserBalance);
        break;

    case '3':
        const thUserBankAccount = readline.question('Enter your current Bank Account: ');
        const moneyWithdrew = readline.question('Enter the amount that you want to take out: ');
        withdraw(thUserBankAccount, moneyWithdrew);
        break;

    case '0': 
        break;

    default: 
        throw new TypeError('Your desired selection might invalid!');
}

function getUserAccount(userBankAccount) {

    let currentUserBankAccount = checkIfBankAccountValid(userBankAccount)

    console.log('Your current Account Number: ' + currentUserBankAccount.accountNumber);
    console.log('Your current Balance: ' + currentUserBankAccount.balance);
}

function adjustBalance(currentBankAccount, currentUserBalance) {

    let userBankAccount = checkIfBankAccountValid(currentBankAccount);
    userBankAccount.balance = currentUserBalance;

    console.log('Your current Balance successfully updated!');
    console.log('Your current Balance: ' + userBankAccount.balance);
}

function withdraw(currentBankAccount, expMoneyWithdrew) {

    let userBankAccount = checkIfBankAccountValid(currentBankAccount);
    
    if (expMoneyWithdrew > userBankAccount.balance)
        throw new Error('Your current Balance was insufficient!');

    console.log('Transaction being processed!');
    console.log('Please take out the money!');
    console.log('Your current balance: ' + (userBankAccount.balance - expMoneyWithdrew));
}

function checkIfBankAccountValid(userBankAccount) {

    for (idx = 0; idx < bankAccounts.length; idx++) {

        if (userBankAccount === bankAccounts[idx].accountNumber)
            return bankAccounts[idx]
    }

    throw new Error('Please enter a valid Account Number!');
}