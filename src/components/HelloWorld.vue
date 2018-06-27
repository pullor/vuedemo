<template>
  <div id="container">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    this.addmap()
  },
  methods: {
    addmap: function () {
      console.log(111111111)
      var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 13
      })
      console.log(map)
      // 实时路况图层
      var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      })
      map.add(trafficLayer);// 添加图层到地图
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
