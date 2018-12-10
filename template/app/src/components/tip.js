const tpls =  `
    <template>
        <Button @click.native="info">显示普通提示</Button>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            info () {
                this.$Message.success({
                    content: '这是一条普通提示2',
                    duration: 500,
                    onClose () {
                        console.log('on close');
                    },
                    closable: true
                })
            }
        },
    }
</script>`;

export default {
    tpls,
    scripts
}