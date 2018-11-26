/**
 * Created by luye on 06/11/2018.
 */
var program = require('commander');
import inquirer from 'inquirer';
import Rx from 'rx';
import {getPromptConfig, seqPrompts} from './src/commands/init/configPrompt';
const MAX_STEP = 4;
import Command from './src/commands/init/Command';

const prompts = new Rx.Subject();
let step = 0, project = {};
inquirer.prompt(prompts).ui.process.subscribe((answers) => {
    console.log('raw', JSON.stringify(answers, null, '  '));
    step++;
    if (answers.answer === false) {
        step++;
    } else if (answers.answer !== true) {
        project[answers.name] = answers.answer;
    }
    if (step <= MAX_STEP) {
        prompts.onNext(getPromptConfig(seqPrompts[step]));
    } else {
        console.log('finished', project);
        new Command().process(project);
        prompts.onCompleted();
    }
});
prompts.onNext(getPromptConfig(seqPrompts[step]));



// 询问项目名
// prompts.onNext(getPromptConfig('init'));
// prompts.onNext(getPromptConfig('tool'));
// prompts.onNext(getPromptConfig('common'));
// prompts.onCompleted();
// new Command().process({projectName: 111, tool: 'Vue', common: ['table', 'button']});
// 无限cli 弹窗
// const prompts = new Rx.Subject();
// //
// function makePrompt(msg) {
//     return {
//         type: 'input',
//         name: `userInput-${i}`,
//         message: `${msg || 'Say something to start chatting!'}\n\n`,
//     };
// }
//
// let i = 0;
// // '{answer}' only returns answer with name of previous prompt
// inquirer.prompt(prompts).ui.process.subscribe((answer) => {
//     console.log(answer);
//     prompts.onNext(getPromptConfig(`name䬨answer`));
//     if (answer !== '') {
//         i += 1;
//         prompts.onNext(makePrompt(`This is prompt #${i}.`));
//     } else {
//         console.log('suc');
//         prompts.onCompleted();
//     }
// }, (err) => {
//     console.warn(err);
// }, () => {
//     console.log('Interactive session is complete. Good bye! 👋\n');
// });
//
// prompts.onNext(makePrompt());

