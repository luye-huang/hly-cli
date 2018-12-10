const tpls =  `
    <template>
        <div>
            <Button type="primary" @click="modal1 = true">Display dialog box</Button>
            <Modal
                    v-model="modal1"
                    title="Common Modal dialog box title"
                    @on-ok="ok"
                    @on-cancel="cancel">
                <p>Content of dialog</p>
                <p>Content of dialog</p>
                <p>Content of dialog</p>
            </Modal>
        </div>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
                modal1: false,
            }
        },
        methods: {
            ok () {
                alert('Clicked ok');
            },
            cancel () {
                alert('Clicked cancel');
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}