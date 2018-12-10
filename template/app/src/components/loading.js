const tpls =  `
    <template>
        <div>
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
            <button @click="loading=true">Start loading</button>
            <button @click="loading=false">Stop loading</button>
        </div>
    </template>`;

const scripts = `<script>
    export default {
        data() {
            return {
                loading: false
            }
        }
    }
</script>`;

export default {
    tpls,
    scripts
}