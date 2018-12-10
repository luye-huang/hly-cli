const tpls =  `
    <template>
        <Table :tableParams="tableParams"></Table>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
                tableParams: {
                    columns: [{cname: '团队名称', cdata: 'tname', action: 'click'},
                        {cname: '代码行总数', cdata: 'code_count', style: 'hide'},
                        {cname: '提交文件总数', cdata: 'file_count'},
                        {cname: '团队总得分', cdata: 'tscore', action: 'click'},
                        {cname: '操作', type: 'management'}
                    ],
                    manageColumns: true
                }
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}