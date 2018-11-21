/**
 * Created by luye on 06/11/2018.
 */
var program = require('commander');

function range(val) {
    return val.split('..').map(Number);
}

function list(val) {
    return val.split(',');
}

// program
//     .version('0.0.1')
//     .usage('test')
//     .option('-m, --max ', '最大连接数', parseInt)
//     .option('-s, --seed ', '出始种子', parseFloat)
//     .option('-r,--range <a>..<b>', '阈值区间', range)
//     .option('-l, --list ', 'IP列表', list)
//
// program
//     .command('deploy ')
//     .description('部署一个服务节点')
//     .action(function(name, nnn){
//         console.log('Deploying "%s" "%s"', name, nnn);
//     });
function trans(val) {
    return val + 1;
}
program.option('-k, --kb <n>', 'hb', trans).parse(process.argv);
console.log(' int: %i', program.kb);

program.parse(process.argv);
// console.log(' max: %j', program.max);
// console.log(' seed: %j', program.seed);
// program.range = program.range || [];
// console.log(' range: %j..%j', program.range[0], program.range[1]);
// console.log(' list: %j', program.list);