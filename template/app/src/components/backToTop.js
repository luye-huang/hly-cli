const tpls =  `
    <template>
        <div>
            <back-to-top :visibleoffset="visibleoffset" :text="text" :bottom="bottom" :right="right" />
        </div>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
                visibleoffset: 200,
                text: 'Back',
                bottom: '40px',
                right: '40px',
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}