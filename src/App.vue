<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data ()
  {
    return{
      somedata : "This is some data to display..."
    }
  }
}
</script>

<style scoped>
#app
{
    text-align: center;
    justify-content: center;
    align-items: center;
    color: blue;
}
</style>
