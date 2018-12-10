<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Tip</h2>
                <p>消息提示.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Button @click.native="info">显示普通提示</Button>
                </demo-card>
            </section>
            <section class="attrs">
                <h3>API</h3>
                <code>this.$Message.success(config)</code>
                <h3>Config Attributes</h3>
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
    import SourceCode from './tip';
    export default{
        data() {
            return {
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['content',
                            '提示内容',
                            'string', '-'],
                        ['duration',
                            '设置提示消失的时间，默认：1.5',
                            'number', '-'],
                        ['onClose',
                            '关闭提示的回调',
                            'function', '-'],
                        ['closable',
                            '是否显示关闭',
                            'boolean', '-']
                    ]
                },

                sourceCode: SourceCode
            }
        },
        methods: {
            info () {
                this.$Message.success({
                    content: '这是一条普通提示2',
                    duration: 500,
                    onClose () {
                        console.log('on close');
                    },
                    closable: true
                })
            }
        },
        components: {
            'demo-card': DemoCard
        }
    }
</script>