const tpls =  `
    <template>
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
    </template>`;

const scripts = `<script>
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
                ]
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}