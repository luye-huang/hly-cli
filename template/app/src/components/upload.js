const tpls =  `
    <template>
        <Upload :max-length="2" action="//secupload.iqiyi.com/common_upload" :before-upload="beforeUpload" :before-remove="beforeRemove" :on-exceed="handleExceed" :data="{}" :multiple="true" accept=".jpg,.png">
            <Button>点击上传</Button>
            <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </Upload>
    </template>`;

const scripts = `<script>
    export default{
        data() {
            return {};
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
                    if (confirm('确定删除' + file.name + '？')) {
                        resolve();
                    } else {
                        reject();
                    }
                });
                return p;
            },
            handleExceed(files, uploadList, maxLength) {
                alert('上传文件不能超过' + maxLength + '个');
            }
        },
        components: {
            Upload
        }
    }
</script>`;

export default {
    tpls,
    scripts
}