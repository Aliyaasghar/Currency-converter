#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgMagenta.bold("\n \tWelcome to 'Code With Aliya'- Currency converter\n  "))

// List of currencies and their exchange rates
let exchangeRate: any ={
    "USD":1,        //Base Currency
    "EUR":0.9,      //European Currency(Euro)
    "JYP":113,      //Japenese Currency(yen)
    "CAD":1.3,      //Canadian currency 
    "AUD":1.65,     //Australian Dollar
    "PKR":289,      //Pakistan rupees
}
// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the currency to convert from :",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"
    }
]);
// perform currency conversion by using formula

let from_amount = exchangeRate[user_answer.from_currency];
let to_amount = exchangeRate[user_answer.to_currency];
let amount = user_answer.amount

// formula conversion
let base_amount = amount / from_amount
let converted_amount =  base_amount * to_amount

// Display the coverted amount

console.log( `converted amount = ${converted_amount.toFixed(3)}`);




