import Vue from 'vue'
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