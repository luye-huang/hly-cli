<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Card</h2>
                <p>卡片容器.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
                    <section>
                        <div>
                            <h5>Single radio</h5>
                            <label>{{singleRadio}}</label>
                            <Radio v-model="singleRadio">Radio</Radio>
                        </div>
                        <div>
                            <RadioGroup v-model="phone">
                                <Radio label="apple">
                                    <span>Apple</span>
                                </Radio>
                                <Radio label="android">
                                    <span>Android</span>
                                </Radio>
                                <Radio label="windows">
                                    <span>Windows</span>
                                </Radio>
                            </RadioGroup>
                            <label>{{phone}}</label>
                        </div>
                        <div>
                            <RadioGroup v-model="animal">
                                <Radio label="金斑蝶"></Radio>
                                <Radio label="爪哇犀牛"></Radio>
                                <Radio label="印度黑羚"></Radio>
                            </RadioGroup>
                            <label>{{animal}}</label>
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
    import SourceCode from './radio';
    export default {
        data() {
            return {
                singleCheckbox: false,

                social: [],
                fruit: [],

                singleRadio: false,
                animal: '',
                phone: '',

                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['value',
                            'radio是否选中，双向绑定使用v-model',
                            'boolean', '-'
                        ],
                        ['disabled',
                            '是否禁用radio',
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