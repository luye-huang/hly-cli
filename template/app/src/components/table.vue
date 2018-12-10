<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Table</h2>
                <p>表格</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Table :tableParams="tableParams"></Table>
                </demo-card>
            </section>
            <section class="attrs">
                <h3>Attributes(tableParams)</h3>
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
    import SourceCode from './table';
    export default {
        data() {
            return {
                select1: '',
                select2: '',
                select3: [],

                tableParams: {
                    columns: [{cname: '团队名称', cdata: 'tname', action: 'click'},
                        {cname: '代码行总数', cdata: 'code_count', style: 'hide'},
                        {cname: '提交文件总数', cdata: 'file_count'},
                        {cname: '团队总得分', cdata: 'tscore', action: 'click'},
                        {cname: '操作', type: 'management'}
                    ],
                    manageColumns: true
                },

                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['data',
                            '数据源',
                            'array', '-'],
                        ['columns',
                            '列信息',
                            'array', '-'],
                        ['manegeColumn',
                            '列增减',
                            'bool', 'true, false'],
                        ['export',
                            '导出数据',
                            'bool', 'true, false'],
                        ['pagination',
                            '分页',
                            'bool', 'true, false'],
                        ['managePageSize',
                            '每页条数切换',
                            'bool', 'true, false'],
                        ['globalSearch',
                            '全局搜索',
                            'bool', 'true, false']
                    ]
                },

                sourceCode: SourceCode,
            }
        },
        components: {
            'demo-card': DemoCard
        }
    }
</script>