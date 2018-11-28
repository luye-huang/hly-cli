自动构建工具
1 初始化由izy组件组成简单项目
2 动态添加模板文件
3 提供跨框架组件

使用
npm install hly-cli -g -d
hly-cli init

根据弹窗提示依次选择 是否需要项目 是否需要快速开发模板 是否需要跨框架原生组件

快速开发模板:
进入项目后, 增加一个页面模块, 执行 gulp component 命令。
gulp component --name signup --parent auth
--name：确定没有重名的模块，会覆盖已有同名模块，大小写不敏感
--parent：可以通过该参数来改变生成的目录