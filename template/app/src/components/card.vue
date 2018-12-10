<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Card</h2>
                <p>卡片容器.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Card class="navCard" shadow="always">
                        <h4 slot="header">这是标题</h4>
                        <a href="#" slot="extra">
                            change
                        </a>
                        <p>这是body</p>
                        <p>这是body1</p>
                    </Card>
                    <Card class="navCard">
                        <h4 slot="header">这是标题</h4>
                        <p>这是body222222</p>
                        <p>这是body1</p>
                    </Card>
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
                        <td v-for="td in tr" v-html="td"></td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</template>
<script>
    import DemoCard from './layout/demoCard';
    import SourceCode from './card';
    export default {
        data() {
            return {
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['header',
                            '设置 header，也可以通过 \<code\>slot#header\<\/code\> 传入 DOM',
                            'string', '-'],
                        ['body-style',
                            '设置 body 的样式, 默认：{ padding: \'20px\' }',
                            'object', '-'],
                        ['shadow',
                            '设置阴影显示时机, 默认：never',
                            'string', 'always / hover / never']
                    ]
                },

                sourceCode: SourceCode
            }
        },
        components: {
            'demo-card': DemoCard
        }
    }
</script>
<style>
    .navCard {
        width: 350px;
        margin-right:2%;
    }
    code {
        background-color: #f9fafc;
        padding: 0 4px;
        border: 1px solid #eaeefb;
        border-radius: 4px;
    }

</style>