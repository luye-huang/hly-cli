/**
 * Created by luye on 06/11/2018.
 */
var program = require('commander');

import inquirer from 'inquirer';
import Rx from 'rx';
import {config, getPromptConfig} from './src/commands/init/configPrompt';
import Command from './src/commands/init/Command';

const prompts = new Rx.Subject();
inquirer.prompt(prompts)
    .then((answers) => {
        console.log('done', JSON.stringify(answers, null, '  '));
        new Command().process(answers);
    });
// 询问项目名
prompts.onNext(getPromptConfig('init'));
prompts.onNext(getPromptConfig('tool'));
// prompts.onNext(getPromptConfig('common'));
prompts.onCompleted();


// const prompts = new Rx.Subject();
//
// function makePrompt(msg) {
//     return {
//         type: 'input',
//         name: `userInput-${i}`,
//         message: `${msg || 'Say something to start chatting!'}\n\n`,
//     };
// }

// let i = 0;
// // '{answer}' only returns answer with name of previous prompt
// inquirer.prompt(prompts).ui.process.subscribe((answer) => {
//     console.log(answer);
//     prompts.onNext(getPromptConfig(`name䬨answer`));
//     // if (answer !== '') {
//     //     i += 1;
//     //     prompts.onNext(makePrompt(`This is prompt #${i}.`));
//     // } else {
//     //     console.log('suc');
//     //     prompts.onCompleted();
//     // }
// }, (err) => {
//     console.warn(err);
// }, () => {
//     console.log('Interactive session is complete. Good bye! 👋\n');
// });
//
// prompts.onNext(getPromptConfig('init'));

