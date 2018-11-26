import inquirer from 'inquirer';
import Rx from 'rx';
import Command from './Command';
import {getPromptConfig, seqPrompts} from './configPrompt';
const MAX_STEP = seqPrompts.length - 1;

/**
 * 问讯项目名
 */
function askInit() {
    const prompts = new Rx.Subject();
    let step = 0, project = {};
    inquirer.prompt(prompts).ui.process.subscribe((answers) => {
        // console.log('raw', JSON.stringify(answers, null, '  '));
        step++;
        if (answers.answer === false) {
            step++;
        } else if (answers.answer !== true) {
            project[answers.name] = answers.answer;
        }
        if (step <= MAX_STEP) {
            prompts.onNext(getPromptConfig(seqPrompts[step]));
        } else {
            // console.log('finished', project);
            new Command().process(project);
            prompts.onCompleted();
        }
    });
    prompts.onNext(getPromptConfig(seqPrompts[step]));
}

export default program => {
    program.command('init')
        .description('init project')
        .action(() => {
            askInit();
        })
}