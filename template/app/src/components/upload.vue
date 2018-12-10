<template>
    <div>
        <div class="tl">
            <section class="title">
                <h2>Upload</h2>
                <p>上传组件.</p>
            </section>
            <section class="demo">
                <demo-card :source-code="sourceCode">
                    <template slot="title">Demo</template>
                    <Upload :max-length="2" action="//secupload.iqiyi.com/common_upload" :before-upload="beforeUpload" :before-remove="beforeRemove" :on-exceed="handleExceed" :data="{}" :multiple="true" accept=".jpg,.png">
                        <Button>点击上传</Button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </Upload>
                </demo-card>
            </section>
            <section class="attrs">
                <h3>Attributes</h3>
                <table class="table">
                    <thead >
                    <tr>
                        <th v-for="th in attrs.ths">{{th}}</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="tr in attrs.tds">
                        <td v-for="td in tr" v-html="td"></td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</template>
<script>
    import DemoCard from './layout/demoCard';
    import SourceCode from './upload';
    import Upload from '../../src/components/upload';
    export default{
        data() {
            return {
                attrs: {
                    ths: ['参数', '类型', '说明', '默认值'],
                    tds: [
                        ['action', 'String', '必选参数，上传的地址', '-'],
                        ['name', 'String', '上传的文件字段名', 'file'],
                        ['multiple', 'Boolean', '是否支持多选文件', '-'],
                        ['accept', 'String', '接受上传的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept" target="_blank">文件类型</a>', '-'],
                        ['data', 'Object', '上传时附带的额外参数	', '-'],
                        ['max-length', 'Number', '最大允许上传个数', '-'],
                        ['with-credentials', 'Boolean', '支持发送 cookie 到接口', 'false'],
                        ['auto-upload', 'Boolean', '是否在选取文件后立即进行上传', 'true'],
                        ['before-upload', 'Function', '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。', '-'],
                        ['on-change', 'Function', '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用', '-'],
                        ['on-remove', 'Function', '文件列表移除文件时的钩子', '-'],
                        ['before-remove', 'Function', '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。', '-'],
                        ['on-progress', 'Function', '文件上传时的钩子', '-'],
                        ['on-uploaded', 'Function', '文件上传成功时的钩子', '-'],
                        ['on-error', 'Function', '文件上传失败时的钩子', '-'],
                        ['on-exceed', 'Function', '文件超出个数限制时的钩子', '-']
                    ]
                },

                sourceCode: SourceCode
            }
        },
        methods: {
            beforeUpload(file) {
                let data = {
                    file_type: 'png',
                    auth_token:
                        'fdRuKjm22UCVJda6hnOG0cHHm2OL2ZnwbVm32m3dC5xOeg6lAATRWZCJ6uJsxWV8EZm1oi590',
                    share_type: 'external',
                    business_type: 'image',
                    share_expire: 0
                };
                return Promise.resolve({ file, data });
            },
            beforeRemove(file) {
                let p = new Promise((resolve, reject) => {
                    if (confirm(`确定删除${file.name}？`)) {
                        resolve();
                    } else {
                        reject();
                    }
                });
                return p;
            },
            handleExceed(files, uploadList, maxLength) {
                alert(`上传文件不能超过${maxLength}个`);
            },
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
        components: {
            'demo-card': DemoCard,
            Upload
        }
    }
</script>