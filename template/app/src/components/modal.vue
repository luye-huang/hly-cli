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
                    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
                    <Modal
                            v-model="modal1"
                            title="Common Modal dialog box title"
                            @on-ok="ok"
                            @on-cancel="cancel">
                        <p>Content of dialog</p>
                        <p>Content of dialog</p>
                        <p>Content of dialog</p>
                    </Modal>
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
    import SourceCode from './modal';
    export default {
        data() {
            return {
                modal1: false,

                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['value',
                            '是否显示modal，v-model双向绑定，默认：false',
                            'boolean', '-'],
                        ['title',
                            'modal的标题',
                            'string', '-'],
                        ['closable',
                            '是否显示右上角关闭',
                            'boolean', '-'],
                    ]
                },

                sourceCode: SourceCode
            }
        },
        methods: {
            ok () {
                alert('Clicked ok');
            },
            cancel () {
                alert('Clicked cancel');
            }
        },
        components: {
            'demo-card': DemoCard
        }
    }
</script>