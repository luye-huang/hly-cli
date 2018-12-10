/**
 * Created by lizq on 2017/6/6.
 */
module.exports = {
    //  eslint找到这个标识后，不会再去父文件夹中找eslint的配置文件
    root          : true,
    //使用babel-eslint来作为eslint的解析器
    parser        : 'babel-eslint',
    // 设置解析器选项
    parserOptions : {
        // 表明自己的代码是ECMAScript模块
        sourceType : 'module'
    },
    extends       : 'eslint:recommended',
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    //extends       : 'standard',  // 继承eslint-config-standard里面提供的lint规则
    // required to lint *.vue files
    // 使用的插件eslint-plugin-html. 写配置文件的时候，可以省略eslint-plugin-
    plugins       : [
        'html'
    ],
    // 启用额外的规则或者覆盖基础配置中的规则的默认选项
    rules         : {
        // ===============================
        // =       Possible Errors       =
        // ===============================
        // http://eslint.cn/docs/rules/no-console
        // 禁用 console
        'no-console'           : [ 'off' ],
        // ==============================
        // =       Best Practices       =
        // ==============================
        // http://eslint.cn/docs/rules/curly
        // 要求遵循大括号约定
        'curly'                : [ 'error' ],
        // http://eslint.cn/docs/rules/no-floating-decimal
        // 禁止浮点小数
        'no-floating-decimal'  : [ 'error' ],
        // =========================
        // =       Variables       =
        // =========================
        // http://eslint.cn/docs/rules/no-undef
        // 禁用未声明的变量
        'no-undef'             : [ 'error' ],
        // http://eslint.cn/docs/rules/no-unused-vars
        // 禁止未使用过的变量
        'no-unused-vars'       : [ 'error', { vars : 'local', args : 'none' } ],
        // ================================
        // =       Stylistic Issues       =
        // ================================
        // http://eslint.cn/docs/rules/indent
        // 强制使用一致的缩进
        // 可以--fix
        'indent'               : [ 'error', 4, { SwitchCase : 1 } ],
        // http://eslint.cn/docs/rules/comma-dangle
        // 要求或禁止使用拖尾逗号
        // 可以--fix
        'comma-dangle'         : [ 'error', 'never' ],
        // http://eslint.cn/docs/rules/semi
        // 要求或禁止使用分号代替 ASI
        // 可以--fix
        'semi'                 : [ 'error', 'always' ],
        // http://eslint.cn/docs/rules/quotes
        // 强制使用一致的反勾号、双引号或单引号
        // 可以--fix
        'quotes'               : [ 'error', 'single' ],
        // ===================
        // =       ES6       =
        // ===================
        // http://eslint.cn/docs/rules/arrow-parens
        // 要求箭头函数的参数使用圆括号
        // 可以--fix
        'arrow-parens'         : [ 'error', 'always' ],
        // http://eslint.cn/docs/rules/arrow-spacing
        // 要求箭头函数的箭头之前或之后有空格
        // 可以--fix
        'arrow-spacing'        : [ 'error', { before : true, after : true } ],
        // http://eslint.cn/docs/rules/no-duplicate-imports
        // Disallow duplicate imports
        'no-duplicate-imports' : [ 'error', { includeExports : true } ]
    },
    globals       : {    // 声明在代码中自定义的全局变量
        'CONFIG'       : true,
        'Vue'          : true,
        'Vuex'         : true,
        '$'            : true,
        'jQuery'       : true,
        'requireLogin' : true,
        'QEditor'      : true,
        '__DIST__'     : true,
        '__BUILD__'    : true,
        '__TEST__'     : true,
        'expect'       : true,
        'chai'         : true,
        'sinon'        : true,
        'glue'         : true,
        'seajs'        : true
    },
    // 定义预定义的全局变量,比如browser: true，这样你在代码中可以放心使用宿主环境给你提供的全局变量。
    env           : {
        // browser global variables.
        browser       : true,
        // Node.js global variables and Node.js scoping.
        node          : true,
        // web workers global variables.
        worker        : true,
        // adds all of the Mocha testing global variables.
        mocha         : true,
        // PhantomJS global variables.
        phantomjs     : true,
        // Service Worker global variables.
        serviceworker : true
    }
};