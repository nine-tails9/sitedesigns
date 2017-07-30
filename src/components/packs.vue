<template>
<div>
  <div class="tile is-ancestor is-fullwidth">
  <div class="tile is-vertical is-fullwidth">
    <div class="tile">
      <div class="tile is-parent is-vertical is-fullwidth">
        <div class="tile is-child notification ">
          <p class="title"><i class="fa fa-reorder fa-lg"></i> Basic</p>
          <div class="columns">
            <div class="column is-4 is-dark">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    Plan Details
                  </div>
                </div>
                <div class="card-content">
                  <section>
                    <ul>
                      <li>.xyz domain</li>
                      <li>Free Hosting</li>
                      <li>Single Email</li>
                    </ul>
                  </section>
                </div>
                <div class="card-footer">
                  <div class="card-footer-item button is-primary" @click="listen(prop[0].id)">
                    <p v-if="!prop[0].show">Select</p>
                    <p v-if="prop[0].show"><router-link to="/checkout">Proceed to Checkout</router-link></p>
                </div>
              </div>
            </div>
          </div>
            <div class="column is-half">
              <div class="content">
              <article class="message">
                <div class="message-body notification is-danger">
                  Specially for People with long term plans
                  <br>
                  Take you bussines to other level
                </div>
            </article>
            </div>
          </div>
          </div>
        </div>
        <div class="tile is-child">
          <p class="title sp"><i class="fa fa-bolt fa-lg"></i> Premium</p>
          <div class="columns sp">
            <div class="column is-half">
              <div class="content">
              <article class="message">
                <div class="message-body notification is-danger">
                  Specially for People with long term plans
                  <br>
                  Take you bussines to other level

                </div>
            </article>
            </div>
          </div>
            <div class="column is-4">
              <div class="card ">
                <div class="card-header ">
                  <div class="card-header-title notification is-light">
                    Plan Details
                  </div>
                </div>
                <div class="card-content">
                  <section>
                    <ul>
                      <li>.com domain</li>
                      <li>Premium Hosting</li>
                      <li></li>
                    </ul>
                  </section>
                </div>
                <div class="card-footer">
                  <div class="card-footer-item button is-primary" v-on:click="select(prop[1].id)">
                  <p v-if="!prop[1].show">Select</p>
                  <p v-if="prop[1].show" ><router-link to="/checkout">Proceed to Checkout</router-link></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

        <div class="tile is-child notification">
          <p class="title"><p class="title"><i class="fa fa-universal-access fa-lg"></i> Platinum</p>
          <div class="columns">
            <div class="column is-4 is-dark">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title ">
                    Plan Details
                  </div>
                </div>
                <div class="card-content">
                  <section>
                    <ul>
                      <li>.com domain</li>
                      <li>Unlimited Disk Space</li>
                      <li>Unlimited Bandwidth</li>
                      <li>Email Service</li>
                      <li>5 Years After SAles Support</li>
                    </ul>
                  </section>
                </div>
                <div class="card-footer">
                  <div class="card-footer-item button is-primary" v-on:click="listen(prop[2].id)">
                    <p v-if="!prop[2].show">Select</p>
                    <p v-if="prop[2].show"><router-link to="/checkout">Proceed to Checkout</router-link></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="content">
              <article class="message">
                <div class="message-body notification is-danger">
                  Specially for People with long term plans
                  <br>
                  Take you bussines to other level
                </div>
            </article>
            </div>
          </div>

        </div>
        </div>
      </div>
      </div>
      </div>
  </div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      prop: [{id:1,show:false,mod:false},{id:2,show:false,mod:false},{id:3,show:false,mod:false}],

    }
  },


  methods:{
    listen: function(id){
      this.$store.commit('select', id);
      for(let i=0;i<=2;i++)if(i!=id-1)this.prop[i].show=false;
      this.prop[id-1].show=!this.prop[id-1].show;
    },
  }

}
</script>

<style scoped>
a{
  text-decoration: none;
}
a:link {
    color: white;
    text-decoration: none;
}

a:visited {
    color: white;
}
a:hover {
    color: rgb(224, 242, 244);
}


.sp{
  margin-left:18px;
}
</style>
