<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>bigMenu</h2>
                <p>大菜单.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <bigMenu mode="horizontal">
                        <bigMenuItem>公共管理</bigMenuItem>
                        <bigMenuGroup :key="index0" :title="item.label" v-for="(item, index0) in navList">
                            <subBigMenu :key="index1" :title="each.label" v-for="(each, index1) in item.children">
                                <subBigMenuItem  :key="index2" :name="one.path" v-for="(one, index2) in each.children">{{one.label}}</subBigMenuItem>
                            </subBigMenu>
                        </bigMenuGroup>
                    </bigMenu>
                </demo-card>
            </section>
            <!--<section class="attrs">
                <h3>Attributes</h3>
                <table class="table">
                    <thead >
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
            </section>-->
        </div>
    </div>
</template>

<script>
    import DemoCard from './layout/demoCard';
    import SourceCode from './bigMenu';
    export default {
        data() {
            return {
                sourceCode: SourceCode,
                navList: [{
                    label: '业务运营1',
                    path: '/mp/bizOperation',
                    children: [{
                        label: '视频',
                        children: [{
                            path: '/mp/appeal/audit',
                            label: '视频申诉管理'
                        }, {
                            path: '/mp/complaint/audit',
                            label: '视频举报管理'
                        }]
                    }, {
                        label: '榜单',
                        children: [{
                            path: '/mp/episodeRank',
                            label: '视频榜单'
                        }, {

                        }]
                    }, {
                        label: '其他',
                        children: [{
                            path: '/mp/episodeRank',
                            label: '视频榜单'
                        }]
                    }]
                }, {
                    label: '业务运营2',
                    path: '/mp/bizOperation',
                    children: [{
                        label: '视频',
                        children: [{
                            path: '/mp/episodeRank',
                            label: '视频榜单'
                        }, {
                            path: '/mp/videoRecommend',
                            label: '视频推荐库管理'
                        }]
                    }, {
                        label: '榜单',
                        children: [{
                            path: '/mp/episodeRank',
                            label: '视频榜单'
                        }, {

                        }]
                    }, {
                        label: '其他',
                        children: [{
                            path: '/mp/episodeRank',
                            label: '视频榜单'
                        }, {
                            path: '/mp/episodeRank',
                            label: '视频榜单'
                        }, {
                            path: '/mp/rewards',
                            label: '平台奖励设置'
                        }]
                    }]
                }],
                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['mode',
                            '菜单的展示水平或竖直的模式',
                            'string', '\<code\>horizontal\<\code>\<code\>vertical\<\code>'],
                        ['active-name',
                            '当前选中的菜单项',
                            'string/number', '-']
                    ]
                }
            }
        },
        components: {
            'demo-card': DemoCard
        }
    }
</script>

<style scoped>

</style>