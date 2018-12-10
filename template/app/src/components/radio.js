const tpls =  `
    <template>
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
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
                singleCheckbox: false,

                social: [],
                fruit: [],

                singleRadio: false,
                animal: '',
                phone: '',
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}