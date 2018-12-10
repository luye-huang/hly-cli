<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Loading</h2>
                <p>加载中.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <div id="parent" style="height: 100px; width: 200px;" v-loading="loading" izy-loading-text="loading 1.2.3...">
                        <p>Test Loading Area.
                            Test Loading Area1.
                            Test Loading Area1.
                            Test Loading Area.
                            Test Loading Area.
                            Test Loading Area.
                            Test Loading Area.
                        </p>
                    </div>
                    <Button @click="loading=true">Start loading</Button>
                    <Button @click="loading=false">Stop loading</Button>
                </demo-card>
            </section>
            <!--<section class="attrs">-->
                <!--<h3>Options</h3>-->
                <!--<table class="table">-->
                    <!--<thead >-->
                    <!--<tr>-->
                        <!--<th v-for="th in attrs.ths">{{th}}</th>-->
                    <!--</tr>-->
                    <!--</thead>-->
                    <!--<tbody >-->
                    <!--<tr v-for="tr in attrs.tds">-->
                        <!--<td v-for="td in tr">{{ td }}</td>-->
                    <!--</tr>-->
                    <!--</tbody>-->
                <!--</table>-->
            <!--</section>-->
        </div>
    </div>
</template>
<script>
    import DemoCard from './layout/demoCard';
    import SourceCode from './loading';
    export default {
        data() {
            return {
                loading: false,

                attrs: {
                    ths: ['参数', '说明', '类型', '可选值'],
                    tds: [
                        ['target',
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