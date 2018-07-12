<template>
  <div id="container">
    <button @click="getback()">go to the mine page</button>
    <button @click="postmessage1()">post message</button>
    <p>this is 10.12.0.40</p>
    <router-link to="/render">Go to Foo</router-link>
    
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
    this.getenvironment();
    console.log(this.$myName);
  },
  methods: {
    getback(){
      // wx.miniProgram.navigateTo({url: '/pages/cawx/index?value=13213231'})
      wx.miniProgram.navigateBack(1)
    },
    postmessage1(){
      wx.miniProgram.postMessage({ data:{ msg: 'second'} });
      console.log('send data success');
      this.getenvironment();
    },
    getenvironment(){
      wx.miniProgram.getEnv(function(res) { 
        console.log(res.miniprogram) // true 
        })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
