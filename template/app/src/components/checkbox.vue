<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Checkbox</h2>
                <p>复选框.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <h5>Checkbox Group</h5>
                    <label>{{social}}</label>
                    <CheckboxGroup v-model="social">
                        <Checkbox label="twitter">
                            <span>Twitter</span>
                        </Checkbox>
                        <Checkbox label="facebook">
                            <span>Facebook</span>
                        </Checkbox>
                        <Checkbox label="github">
                            <span>Github</span>
                        </Checkbox>
                        <Checkbox label="snapchat">
                            <span>Snapchat</span>
                        </Checkbox>
                    </CheckboxGroup>
                    <label>{{fruit}}</label>
                    <CheckboxGroup v-model="fruit">
                        <Checkbox label="香蕉"></Checkbox>
                        <Checkbox label="苹果"></Checkbox>
                        <Checkbox label="西瓜"></Checkbox>
                    </CheckboxGroup>
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
    import SourceCode from './checkbox';
    export default {
        data() {
            return {
                singleCheckbox: false,

                social: [],
                fruit: [],

                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['value',
                            'checkbox是否选中，双向绑定使用v-model',
                            'boolean', '-'
                        ],
                        ['disabled',
                            '是否禁用checkbox',
                            'boolean', '-']
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