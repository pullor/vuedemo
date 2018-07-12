<template>
    <div>
        <span>this is render page</span>
        <button @click="showmessage()">total</button>
        <button @click="gojssdk()">go to jssdk</button>
    </div>
</template>
<style>

</style>
<script>
    export default {
        name: 'renderfunction',
        data () {
            return {
                message: ''
            }
        },
        methods: {
            showmessage:function(){
                wx.showModal({
                    title: '提示',
                    content: '这是一个模态弹窗',
                    success: function(res) {
                        if (res.confirm) {
                        console.log('用户点击确定')
                        } else if (res.cancel) {
                        console.log('用户点击取消')
                        }
                    }
                })

            },
            gojssdk: function(){
                this.$router.push('/wxjssdk')
            }

        }
    }
</script>

