/**
 * Created by luye on 23/11/2018.
 */
export const config = {
    confirmProject:{
        name: 'confirmProject',
        type: 'confirm',
        message: '是否需要初始化项目?'
    },
    confirmTool:{
        name: 'confirmTool',
        type: 'confirm',
        message: '是否需要模板工具?'
    },
    confirmCommon:{
        name: 'confirmCommon',
        type: 'confirm',
        message: '是否需要跨平台组件?'
    },
    projectName: {
        name: 'projectName',
        type: 'input',
        message: '请输入你的项目名称',
        validate: isEmpty
    },
    tool: {
        name: 'tool',
        type: 'list',
        message: '请选择一种自动生成新模板工具',
        choices: ['Angular', 'React', 'Vue'],
        default: 0,
    },
    common: {
        name: 'common',
        type: 'checkbox',
        message: '请选择跨平台组件(可兼容任意框架,传参方式及功能介绍见生成组件顶部)',
        choices: ['table', 'tree'],
        default: 0,
    }
};

export function getPromptConfig(key){
    return config[key];
}

export const seqPrompts = ['confirmProject', 'projectName', 'confirmTool', 'tool', 'confirmCommon', 'common'];

function isEmpty(input) {
    if (!input && input.trim() === '') {
        return '对不起, 输入不能为空';
    }
    return true;
}