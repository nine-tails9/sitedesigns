<template class="notification is-light">
  <div class="notification is-light">
    <h1 class="title is-4 notification is-danger">Confirm Your Order</h1>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-3">
          <div class="card">
          <header class="card-header">

            <p class="card-header-title has-text-grey" v-if="$store.state.id===1">
              Basic
            </p>
            <p class="card-header-title has-text-grey" v-if="$store.state.id===2">
              Premium
            </p>
            <p class="card-header-title has-text-grey" v-if="$store.state.id===3">
              Platinum
            </p>

            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <section>

            <div class="content" v-if="$store.state.id===1">
              <ul>
                <li>Basic Hosting</li>
                <li>All necessary features</li>
                <li>.XYZ Domains</li>
              </ul>
            </div>
            <div class="content" v-if="$store.state.id===2">
              <ul>
                <li>Paid Hosting</li>
                <li>.COM Domain</li>
                <li>Paid Hosting</li>
              </ul>
            </div>
            <div class="content" v-if="$store.state.id===3">
              <ul>
                <li>Full Pack</li>
                <li>Royal Features</li>
                <li>.COM Domains</li>
                <li>5 Year After Sales Support</li>
              </ul>
            </div>

          </section>
          </div>
          <div class="card-footer">
            <div class="card-footer-item notification is-primary">
              <p class="has-shadow has-text-white"><router-link to="/"><strong>Change Plan</strong></router-link></p>
            </div>
          </div>
        </div>
      </div>

      <div class="tile is-parent notification is-white sec">
        <div class="tile is-child is-5">
          <p>
        <form method="post">
          <div class="field">
          <label class="label has-text-grey">Name</label>
          <div class="control has-icons-left">
            <input class="input is-info" type="text" placeholder="Your Full Name" v-model=order.name><span class="icon is-small is-left">
            <i class="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label has-text-grey">Email</label>
          <div class="control has-icons-left">
            <input class="input is-info" type="email" placeholder="Your Email" v-model=order.email>
            <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          </div>
          </div>
          <label class="label has-text-grey">Contact</label>
          <div class="field has-addons">
          <div class="control has-icons-left">
            <input class="input pin is-info" type="text" placeholder="+91" v-model=order.pin>
            <span class="icon is-left">
            <i class="fa fa-mobile-phone fa-lg"></i>
            </span>
          </div>
          <div class="control">
            <input class="input is-info" type="text" placeholder="Contact No" v-model=order.phone>
          </div>
          </div>
          <div class="field">

          </div>
        </form>
        </p>


      </div>
      <div class="tile is-child">
        <label class="label has-text-grey">Description</label>
        <textarea class="textarea is-info" placeholder="Your Use!" v-model=order.desc></textarea>
        <br>
        <div class="content is-pulled-left has-text-danger">
          <div class="subtitle" v-if=err.email>
            <span class="icon is-left">
            <i class="fa fa-exclamation-triangle"></i>
          </span>&nbsp;Email field is missing!
          </div>
          <div class="subtitle" v-if=err.phone>
            <span class="icon is-left">
            <i class="fa fa-exclamation-triangle"></i>
          </span>&nbsp;Please enter phone Number
          </div>
          <div class="subtitle" v-if=err.desc>
            <span class="icon is-left">
            <i class="fa fa-exclamation-triangle"></i>
          </span>&nbsp;Description is Small
          </div>
          <div class="subtitle" v-if=err.pin>
            <span class="icon is-left">
            <i class="fa fa-exclamation-triangle"></i>
          </span>&nbsp;Country Code is empty!
          </div>
        </div>
        <div class="subtitle has-text-primary is-pulled-left" v-if="loading">
          Placing Your Order&nbsp;<i v-show="loading" class="fa fa-spinner fa-spin"></i>
        </div>
        <div class="subtitle has-text-info is-pulled-left" v-if="placed">
        <span class="icon"><i v-show="placed" class="fa fa-check-circle"></i></span>&nbsp;  Order Placed
        </div>

        <button type="button" class="button submit is-pulled-right is-outlined is-info" v-on:click="post">Submit</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      loading: false,
      order: {email:"",phone:"",desc:"",name:"",pin:""},
      err: {email:false,phone:false,desc:false,name:false,pin:false},
      placed: false
    }
  },
  methods: {
    post: function(){
      this.loading= true;
      if(this.order.email.length==0){
      this.loading= false;
      this.err.email=true;
      return;
      }
      this.err.email=false;
      if(this.order.pin.length==0){
      this.loading= false;
      this.err.pin=true;
      return;
      }
      this.err.pin=false;

      if(this.order.name.length==0){this.loading= false;
      this.err.name=true;
      return;
      }
      this.err.name=false;
      if(this.order.phone.length==0){this.loading= false;
      this.err.phone=true;
      return;
      }
      this.err.phone=false;
      if(this.order.desc.length<=10){this.loading= false;
        this.err.desc=true;
        return;
      }
      this.err.desc=false;
      this.$http.post('https://sitedesigns-28a77.firebaseio.com/orders.json',this.order).then(function(data){
        console.log(data);
        this.loading= false;
        this.placed = true;
      });
    }
  },



}
</script>

<style scoped>
.tile{
  margin-left: 1%;
  margin-top: 3%;

}
.tile .sec{
  margin-right: 3%;
}
a{
  text-decoration: none;
}
a:link {
    text-decoration: none;
}
form{
  width: 90%;
}
textarea{
  margin-top: 6%;
}
.pin{
  width: 75px;
}
.tile .is-parent .sec{
  border: 1px solid black;
}
input:active{
  color: black;
}
.card-footer{
  height: 40px;
}

</style>
