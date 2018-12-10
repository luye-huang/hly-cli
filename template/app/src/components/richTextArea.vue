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
                    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
                    <section>
                        <div>
                            <Select v-model="select1" style="width:200px;">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span>Selected Value: [{{select1}}]</span>
                        </div>
                        <div>
                            <Select v-model="select2" filterable style="width: 200px;">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span>Selected Value: [{{select2}}]</span>
                        </div>
                        <div>
                            <Select v-model="select3" filterable multiple>
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span>Selected Value: [{{select3}}]</span>
                        </div>
                    </section>
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
    import SourceCode from './select';
    export default {
        data() {
            return {
                select1: '',
                select2: '',
                select3: [],

                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],

                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['header',
                            '设置 header，也可以通过 \<code \>slot#header\<\/code\> 传入 DOM',
                            'string', '-'],
                        ['body-style',
                            '设置 body 的样式, 默认：{ padding: \'20px\' }',
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