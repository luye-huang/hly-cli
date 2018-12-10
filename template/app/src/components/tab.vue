<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Tab</h2>
                <p>标签页</p>
            </section>
            <section class="demo" style="border: 0">
                <Tab :tabParams="[{name:'财经',content:123}, {name:'体育',content:2123}, {name:'政治',content:3123}]"></Tab>
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
    import Tab from '../../src/components/tab';
    import SourceCode from './select';
    export default {
        data() {
            return {
                select1: '',
                select2: '',
                select3: [],

                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['data',
                            '数据源: 由content和name两个字段组成的object的数组.name表示tab名字;content表示tab内容',
                            'array', '-']
                    ]
                },

                sourceCode: SourceCode
            }
        },
        components: {
            'Tab': Tab
        }
    }
</script>