<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>dateTime</h2>
                <p>时间日期选择空间</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <section style="height:300px">
                        <div>内联日期选择器</div>
                        <Datepicker v-model="now" type="inline" style="float:left" />
                        <div style="margin-left:20px; float: left">
                            <label>日期选择器 ：</label>
                            <Datepicker v-model="now" format="YYYY-MM-DD HH:mm:ss" clearable placeholder="select date" /><br/>
                            <div style="height: 20px"></div>
                            <label>日期选择器（选择范围）：</label>
                            <Datepicker v-model="timeRange" format="YYYY-MM-DD HH:mm:ss" :local="local" range-separator="至" :disabled-date="disabledDate" />
                        </div>
                    </section>
                </demo-card>
            </section>
            <section class="attrs">
                <h3>Attributes</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th v-for="th in attrs.ths">{{th}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tr in attrs.tds">
                            <td v-for="td in tr" v-html="td"></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section class="attrs">
                <h3>Local Attributes</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th v-for="th in attrs1.ths">{{th}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tr in attrs1.tds">
                            <td v-for="td in tr" v-html="td"></td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </div>
    </div>
</template>

<script>
import DemoCard from "./layout/demoCard";
import SourceCode from './dateTime';

export default {
    data() {
        const min = new Date(2017, 5, 1, 0, 0, 0);
        const max = new Date(2017, 8, 30, 0, 0, 0);
        const now = new Date();
        return {
            sourceCode: SourceCode,
            time: min,
            now,
            min,
            max,
            timeRange: [min, max],
            local: {
                dow: 4, // Sunday is the first day of the week
                hourTip: "Select Hour", // tip of select hour
                minuteTip: "Select Minute", // tip of select minute
                secondTip: "Select Second", // tip of select second
                yearSuffix: "", // suffix of head
                monthsHead: "January_February_March_April_May_June_July_August_September_October_November_December".split(
                    "_"
                ), // months of head
                months: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
                    "_"
                ), // months of panel
                weeks: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), // weeks,
                cancelTip: "Cancel", // text for cancel button for daterange picker
                submitTip: "Submit" // text for submit button for daterange picker
            },
            attrs1: {
                ths: ['参数', '说明', '类型', '可选值'],
                tds: [
                    ['dow',
                        '',
                        'number', "1(默认) 星期一是一周的第一天"],
                    ['hourTip',
                        '',
                        'string', "选择小时(默认)"],
                    ['minuteTip',
                        '',
                        'string', "选择分钟(默认) "],
                    ['secondTip',
                        '',
                        'string', "选择秒数(默认) "],
                    ['yearSuffix',
                        '',
                        'string', "年(默认) "],
                    ['cancelTip',
                        '',
                        'string', "取消(默认) "],
                    ['submitTip',
                        '',
                        'string', "确定(默认) "],
                    ['monthsHead',
                        '',
                        'Array(string)', "[ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ](默认) "],
                    ['months',
                        '',
                        'Array(string)', " [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ](默认) "],
                    ['weeks',
                        '',
                        'Array(string)', " [ '一', '二', '三', '四', '五', '六', '日' ](默认) "],


                ]
            },
            attrs: {
                ths: ['参数', '说明', '类型', '可选值'],
                tds: [
                    ['type',
                        '显示模式',
                        'string', "['inline'|'normal'(默认)]"],
                    ['format',
                        '日期显示格式',
                        'string', 'YYYY-MM-DD HH:mm:ss, 默认YYYY-MM-DD'],
                    ['clearable',
                        '是否显示清除图标',
                        'boolean', '[true|false(默认)]'],
                    ['placeholder',
                        '文案',
                        'string', '-'],
                    ['range-separator',
                        '时间范围中间的分隔符',
                        'string', '~(默认) 或者 至'],
                    ['disabled-date',
                        '禁止用户选择的时间或日期',
                        'function', `默认(time) => {
                            return false
                        }`],
                    ['disabled',
                        '',
                        '', ''],
                    ['name',
                        'input name属性值',
                        'string', ''],
                    ['inputClass',
                        'input class',
                        'string', ''],
                    ['popupClass',
                        'popup弹出框 class',
                        'string', ''],
                    ['value',
                        'v-model绑定的值',
                        'Date|Array|String', ''],
                    ['audoAdjust',
                        'input是否随弹出框的宽自动改变自身宽度',
                        'boolean', '默认true'],
                    ['showButtons',
                        '',
                        'boolean', '默认false'],
                    ['dateRangeSelect',
                        '',
                        'function', '-'],
                    ['local',
                        '见下表',
                        'object', '-']
                ]
            }
        };
    },
    components: {
        "demo-card": DemoCard
    },
    methods: {
        disabledDate(time) {
            return time < this.min || time > this.max;
        }
    }
};
</script>
