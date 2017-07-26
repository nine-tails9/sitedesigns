import index from './components/packs.vue';
import checkout from './components/checkout.vue';
export default[
  {path: '/', component:index, props: true },
  {path: '/checkout', component: checkout, props: true},

]
