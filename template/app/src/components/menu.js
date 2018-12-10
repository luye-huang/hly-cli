const tpls =  `
    <template>
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
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}