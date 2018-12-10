<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Pagination</h2>
                <p>分页</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Pagination :pageParams="pageParams"></Pagination>
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
    import SourceCode from './pagination';
    export default {
        data() {
            return {
                pageParams: {
                    pageTotal: 20,
                    pageCount: 25,
                    itemCount: 499
                },
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['pageTotal',
                            '总页数',
                            'int', '-'],
                        ['pageCount',
                            '每页条数',
                            'int', '-'],
                        ['itemCount',
                            '总条数',
                            'int', '-'],
                        ['callBack',
                            '点击回调函数',
                            'function', '-']
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