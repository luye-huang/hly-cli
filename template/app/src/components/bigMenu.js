const tpls =  `
    <template>
        <bigMenu mode="horizontal" @on-select="test">
             <bigMenuItem>公共管理</bigMenuItem>
             <bigMenuGroup :key="index0" :title="item.label" v-for="(item, index0) in navList">
                 <subBigMenu :key="index1" :title="each.label" v-for="(each, index1) in item.children">
                     <subBigMenuItem  :key="index2" :name="one.path" v-for="(one, index2) in each.children">{{one.label}}</subBigMenuItem>
                 </subBigMenu>
             </bigMenuGroup>
        </bigMenu>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
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
                }]
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}