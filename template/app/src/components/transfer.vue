<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Transfer</h2>
                <p></p>
            </section>
            <section class="demo" style="border: 0">
                <demo-transfer :params="attrs"></demo-transfer>
            </section>
            <!--<section class="attrs">-->
            <!--<h3>Attributes</h3>-->
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
    import Transfer from '../../src/components/transfer';
    import SourceCode from './select';
    export default {
        data() {
            return {
                select1: '',
                select2: '',
                select3: [],

                attrs: {
                    list1: [{name: '参数'}, {name: '说明'}],
                    list2: [{name: '类型'}, {name: '可选值'}],
                    title1: 'left',
                    title2: 'right'
                },

                sourceCode: SourceCode
            }
        },
        components: {
            'demo-transfer': Transfer
        }
    }
</script>