const tpls =  `
    <template>
        <Pagination :pageParams="pageParams"></Pagination>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
                pageParams: {
                    pageTotal: 20,
                    pageCount: 25,
                    itemCount: 499
                }
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}