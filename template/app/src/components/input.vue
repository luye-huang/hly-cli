<template>
    <section>
        <!--<izy-input type="textarea" :with-tags="true" size="large"></izy-input>-->
        <izy-input size="default" style="width: 300px" v-model="test1" icon="ios-clock-outline">
            <span slot="prepend">http://</span>
        </izy-input>
        {{ test1 }}
        <div style="margin-top: 20px">
            <izy-input type="textarea" size="small" style="width: 300px" v-model="test1" icon="ios-clock-outline">
                <span slot="prepend">http://</span>
            </izy-input>
        </div>
    </section>
</template>
<script>
    export default{
        data() {
            return {
                test1: ''
            }
        },
        methods: {

        }
    }
</script>