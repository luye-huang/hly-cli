<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Menu</h2>
                <p>菜单.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Menu mode="horizontal" theme="light" active-name="1">
                        <MenuItem name="1">
                            公告管理
                        </MenuItem>
                        <MenuItem name="2">
                            意见反馈
                        </MenuItem>
                        <Submenu name="3">
                            <template slot="title">
                                报表类数据
                            </template>
                            <MenuItem name="3-1">用户统计数据</MenuItem>
                            <MenuItem name="3-2">流量统计数据</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </Submenu>
                        <MenuItem name="4">
                            综合设置
                        </MenuItem>
                    </Menu>
                </demo-card>
            </section>
            <section class="attrs">
                <h3>Attributes</h3>
                <table class="table">
                    <thead >
                    <tr>
                        <th v-for="th in attrs.ths">{{th}}</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="tr in attrs.tds">
                        <td v-for="td in tr">{{ td }}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</template>
<script>
    import DemoCard from './layout/demoCard';
    import SourceCode from './menu';
    export default {
        data() {
            return {
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['mode',
                            '菜单的展示水平或竖直的模式',
                            'string', '\<code\>horizontal\<\code>\<code\>vertical\<\code>'],
                        ['active-name',
                            '当前选中的菜单项',
                            'string/number', '-']
                    ]
                },
                sourceCode: SourceCode
            };
        },
        components: {
            'demo-card': DemoCard
        }
    }
</script>