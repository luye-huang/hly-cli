const tpls =  `
    <template>
        <div>
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
        </div>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
                singleCheckbox: false,

                social: [],
                fruit: []
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}