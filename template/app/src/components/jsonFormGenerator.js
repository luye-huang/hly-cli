const tpls =  `
    <template>
        <div>
            <JSONFormGen :schema="schema" :model="model"></JSONFormGen>
            <br>
            <Button type="primary">获取model (bugfix coming soon)</Button>
            <p>{{model}}</p>
        </div>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
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
                            hint: '选择旅游城市'
                        },
                        {
                            name: 'drivingLicense',
                            type: 'checkbox',
                            label: '是否有驾照'
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
        }
    }
</script>`;

export default {
    tpls,
    scripts
}