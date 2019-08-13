<template>
<div>
  <div id="helloworld">
    <h1>{{Soapproduct}}</h1>
  </div>
  <ul>
      <li v-for="(product,index) in calculate" v-bind:key="index">{{product.name}}{{product.price}}</li>
  </ul>
  <button v-on:click="Reduce(5)">Reduce Price</button>
  <button v-on:click="jsalsh('Ajay')">Click me</button>
  <ul>
    <li v-for="(names, index) in gnames" v-bind:key="index">{{names.name}}</li>
  </ul>
</div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'HelloWorld',
  computed:
  {
      Soapproduct()
      {

        return this.$store.state.Soapproduct;
      },
      products()
      {
        return this.$store.state.products;
      },
      ...mapGetters([
        'calculate',
        'gnames'
        
        
      ])
      
  },
  methods:
  {
      ...mapActions([
        'Reduce',
      ]),
      ...mapMutations([
        'jsalsh'
      ])
      
  }
  
}
</script>

<style scoped>
#helloworld
{
    text-align: center;
    justify-content: center;
    align-items: center;
    color: blue;
}
</style>
