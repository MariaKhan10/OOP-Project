#! /usr/bin/env node
import { Student } from "./student.js";
import inquirer from 'inquirer';
import chalk from "chalk";
console.log(chalk.bold.yellow("  -------- Welcome --------\n"));
const { num } = await inquirer.prompt([
    {
        type: 'number',
        name: 'num',
        message: chalk.magenta('Type 1 If You Like To Talk To Others And Type 2 If You Would Rather Keep It To Yourself: ')
    }
]);
const MyStudent = new Student();
MyStudent.AskQuestion(num);
console.log(`You are: ${MyStudent.GetPersonality()}`);
const { name } = await inquirer.prompt([
    {
        name: 'name',
        message: 'Enter Your Name: '
    }
]);
MyStudent.Name = name;
console.log(`Your Name is: ${MyStudent.Name} and your personality is: ${MyStudent.GetPersonality()} `);
