#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "entre first number", type: "number", name: "firstnumber" },
  { message: "entre second numbee", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition" , "subtraction" , "multiplication" , "division"],
  },
]);

//conditional statement
if (answer.operator === "addition") {
    console.log (answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
 console.log (answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log (answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division") {
  console.log (answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator")
}
