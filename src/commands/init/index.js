import inquirer from 'inquirer';
import Rx from 'rx';
import Command from './Command';
import {getPromptConfig} from './configPrompt';

/**
 * 问讯项目名
 */
function askInit() {
    const prompts = new Rx.Subject();
    inquirer.prompt(prompts)
        .then((answers) => {
            new Command().process(answers);
        });
    prompts.onNext(getPromptConfig('init'));
    prompts.onNext(getPromptConfig('tool'));
    prompts.onNext(getPromptConfig('common'));
    // When you're done
    prompts.onCompleted();
}

export default program => {
    program.command('init')
        .description('init project')
        .action(() => {
            askInit();
        })
}