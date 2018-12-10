<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>BackToTop</h2>
                <p>返回顶部.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode" :expand-src="true">
                    <template slot="title">Demo</template>
                    <back-to-top :visibleoffset="visibleoffset" :text="text" :bottom="bottom" :right="right" />
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
    import SourceCode from './backToTop';
    export default {
        data() {
            return {
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['text',
                            '返回顶部的文字显示,默认: <code>Back</code>',
                            'string', '-'],
                        ['visibleoffset',
                            'offset设定值时显示回到顶部UI, 默认：200',
                            'string / number', '-'],
                        ['right',
                            'fixed定位右端的距离, 默认：30px',
                            'string', '-'],
                        ['left',
                            'fixed定位左端的距离, 默认：40px',
                            'string', '-']
                    ]
                },

                sourceCode: SourceCode,

                visibleoffset: 200,
                text: 'Back',
                bottom: '40px',
                right: '40px',
            }
        },
        components: {
            BackToTop,
            'demo-card': DemoCard
        }
    }
</script>
<style>
    .navCard {
        width: 350px;
        margin-right:2%;
    }

</style>