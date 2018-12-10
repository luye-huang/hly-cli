<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Tree</h2>
                <p>树🌲</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Tree></Tree>
                </demo-card>
            </section>
            <section class="attrs">
                <h3>Attributes(treeParams)</h3>
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
    import SourceCode from './tree.js';
    export default {
        data() {
            return {
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['data',
                            '数据源',
                            'object', '-']
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