const tpls =  `
    <template>
        <!-- 内联样式 -->
        <Datepicker v-model="date" type="inline"/>

        <!-- 单列样式 -->
        <Datepicker v-model="time" format="YYYY-MM-DD HH:mm:ss" clearable placeholder="请选择时间" /><br/>

        <!-- 双列样式 -->
        <Datepicker v-model="timeRange" format="YYYY-MM-DD HH:mm:ss" :local="local" range-separator="至" :disabled-date="disabledDate" />
    </template>`;

const scripts = `<script>
    export default {
        const min = new Date(2018, 5, 1, 0, 0, 0);
        const max = new Date(2018, 8, 30, 0, 0, 0);
        data() {
            return {
                date: new Date(),
                time: new Date(),
                timeRange: [min, max],
            }
        },
        methods: {
            disabledDate(time) {
                return time < this.min || time > this.max;
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}