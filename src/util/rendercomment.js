// import Vue from 'vue'
export default
Vue.component('morediv', {
    render: function (createElement) {
        return createElement('div',
        Array.apply(null, { length: 20 }).map(function () {
            return createElement('p', 'hi')
        })
        )
    }
})

Vue.component('anchored-heading', {
    render: function (createElement) {
    return createElement(
            'h' + this.level,   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )},
    props: {
        level: {
            type: Number,
            required: true
        }
        }
    })