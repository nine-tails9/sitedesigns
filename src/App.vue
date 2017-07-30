<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
import Pack from './components/packs.vue';
import Checkout from './components/checkout.vue';

export default {
  components: {
    'tm-plans' : Pack,
    'tm-check': Checkout,

  },
  name: 'app',
  data () {
    return {
      id: 1,

    }
  }
}
</script>

<style>

</style>
