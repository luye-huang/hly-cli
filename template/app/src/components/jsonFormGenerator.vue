<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>JSON Form Generator</h2>
                <p>根据JSON schema生成表单.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <JSONFormGen :schema="schema" :model="model"></JSONFormGen>
                    <br>
                    <Button type="primary">获取model (bugfix coming soon)</Button>
                    <p>{{model}}</p>
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
                    <tbody >
                    <tr v-for="tr in attrs.tds">
                        <td v-for="td in tr" v-html="td"></td>
                    </tr>
                    </tbody>
                </table>

                <h3>Schema 参数说明</h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th v-for="th in attrs1.ths">{{th}}</th>
                    </tr>
                    </thead>
                    <tbody >
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
    import DemoCard from './layout/demoCard';
    import SourceCode from './jsonFormGenerator';
    export default {
        data() {
            return {
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['schema',
                            '表单JSON Scheme。',
                            'object', '-'],
                        ['model',
                            '表单JSON数据',
                            'object', '-']
                    ]
                },
                attrs1: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['name',
                            '表单项名称',
                            'string', '-'],
                        ['type',
                            '表单项类型',
                            'string', '\<code \>text\<\/code\>、\<code \>number\<\/code\>、\<code \>select\<\/code\>、' +
                            ' \<code \>checkbox\<\/code\>、\<code \>checkboxgroup\<\/code\>、\<code \>datetime\<\/code\>'],
                        ['label',
                            '表单项label',
                            'string', '-'],
                        ['options',
                            '下拉框的选项、复选框组的选项',
                            'array', '-'],
                        ['required',
                            '表单项是否必填',
                            'boolean', '-'],
                        ['hint',
                            '表单项描述',
                            'string', '-'],
                        ['disable',
                            '表单项是否可以编辑',
                            'boolean', '-']
                    ]
                },
                sourceCode: SourceCode,

                schema: {
                    fields:[
                        {
                            name: 'city',
                            type: 'select',
                            label: '城市',
                            options: [
                                {value: 1, label: 'Beijing'},
                                {value: 2, label: 'Shanghai'},
                                {value: 3, label: 'Guangzhou'},
                                {value: 4, label: 'NewYork'},
                                {value: 5, label: 'Washington'},
                                {value: 6, label: 'Toronto'},
                                {value: 7, label: 'Vancouver'}
                            ],
                            hint: '选择旅游城市',
//                            required: true
                        },
                        {
                            name: 'drivingLicense',
                            type: 'checkbox',
                            label: '是否有驾照',
//                            required: true
                        },
                        {
                            name: 'basicInfo',
                            type: 'group',
                            label: '基本信息',
                            fields: [
                                {
                                    name: 'nickName',
                                    type: 'text',
                                    label: '昵称',
                                    disabled: true
                                },
                                {
                                    name: 'tel',
                                    type: 'text',
                                    label: '联系方式'
                                },
                                {
                                    name: 'basicInfo2',
                                    type: 'group',
                                    label: 'some information nested again',
                                    fields: [
                                        {
                                            name: 'aaaa',
                                            type: 'text',
                                            label: 'aaaa',
                                            disabled: true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                model: {
                    city: 7,
                    drivingLicense: true,
                    basicInfo: {
                        nickName: 'Jay',
                        tel: '123123123123'
                    }
                }
            }
        },
        components: {
            'demo-card': DemoCard
        }
    }
</script>
<style>
    .navCard {
        width: 350px;
        margin-right:2%;
    }

</style>