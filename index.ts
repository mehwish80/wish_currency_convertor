#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

  console.log(chalk.magenta(`\t<======================================================================>`));
  console.log(chalk.redBright.bold("\t\t\t******Welcome to 'Wish'- Currency Convertor******"));
  console.log(chalk.magenta("\t<======================================================================>"));
 
const exchange_currency: any ={
    "USD":1, // Base currency
   "EUR": 0.9, //European currency(Euro)
   "JYP":113, //Japenese currency "Yen"
    "CAD": 1.3, //Canadian Doller
    "AUD": 1.65, //Australian Doller
    "PKR": 280, // Pakistan Rupees

}
   let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow.italic("Select the currency to convert from:"),
        choices: ["USD","EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow.italic("Select the currency to convert into:"),
        choices: ["USD","EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellow.italic("Enter the amount to convert:"),
    },

   ]);
   let from_amount = exchange_currency[user_answer.from_currency];
   let to_amount = exchange_currency[user_answer.to_currency];
    let amount = user_answer.amount
    //formula of conversion
    let base_amount = amount/ from_amount
    let converted_amount = base_amount * to_amount
    //display the converted amount
    console.log(chalk.blue(`converted amount = ${chalk.red(converted_amount.toFixed(2))}`)); 