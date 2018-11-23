/**
 * Created by luye on 23/11/2018.
 */
export const config = {
    projectName: 'hh',
    init: {
        name: 'projectName',
        message: '请输入你的项目名称',
        validate: isEmpty
    },
    tool: {
        name: 'tool',
        type: 'list',
        message: '请选择一种自动生成新模板工具',
        choices: ['不需要', 'Angular', 'React', 'Vue'],
        default: 0,
    },
    component: {
        name: 'component',
        type: 'list',
        message: '请选择跨平台组件(可兼容任意框架,传参方式及功能介绍见生成组件顶部)',
        choices: ['不需要', 'table', 'tree'],
        default: 0,
    }
};

export function getPromptConfig(key){
    return config[key];
}

function isEmpty(input) {
    if (!input && input.trim() === '') {
        return '对不起, 输入不能为空';
    }
    return true;
}