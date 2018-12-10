<template>
    <div>
        <div class="header">
            <slot name="title"></slot>
            <i class="izy-icon izy-icon-code"
               style="font-size: 18px; color: #999; float: right;"
                @click="toggleCodeExpand"></i>
            <div v-if="showCode">
                <pre v-highlightjs="sourceCode.tpls"><code class="html"></code></pre>
                <pre v-highlightjs="sourceCode.scripts"><code class="html"></code></pre>
                <pre v-highlightjs="sourceCode.styles" v-if="sourceCode.styles"><code class="css"></code></pre>
            </div>
        </div>
        <div class="body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['sourceCode', 'expandSrc'],
        data() {
            return {
                showCode: this.expandSrc || false
            }
        },
        methods: {
            toggleCodeExpand() {
                this.showCode = !this.showCode;
            }
        }
    }
</script>