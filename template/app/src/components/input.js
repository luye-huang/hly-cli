const tpls =  `
    <template>
        <div>
            <Card class="navCard">
                <h4 slot="title">这是标题</h4>
                <a href="#" slot="extra">
                    change
                </a>
                <p>这是body</p>
                <p>这是body1</p>
            </Card>
            <Card class="navCard">
                <h4 slot="title">这是标题</h4>
                <p>这是body222222</p>
                <p>这是body1</p>
            </Card>
        </div>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}