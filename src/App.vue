<template>
  <div id="app">
    <router-view></router-view>
    <div class="modal is-active" v-if="submitted">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <div class="has-text-right">
            <a class="button delete is-dark" @click="submitted=!submitted"></a>
          </div>

          <div class="subtitle is-5 has-text-grey-dark has-icons-left">
            <p><span class="icon"><i class="fa fa-check-square"></i></span>&nbsp;Your Response has been recorded.
            We'll Contact You Shortly!</p>
          </div>
        </section>
        <footer class="modal-card-foot"></footer>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <div class="tile is-ancestor">
          <div class="tile is-parent notification is-danger is-medium">
            <div class="tile is-child has-text-left">
              <p ><h1 class="title is-4 left"><strong>We are Always Looking for Next Challenge!</strong></h1></p>
            </div>
            <div class="tile is-child has-text-right">
              <div class="marg ryt button is-light is-medium" @click="modal=!modal" id="Contact-Us">
                Get in Touch!
              </div>
              <div class="modal is-active" v-if="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head has-text-left is-primary">
                    <p class="modal-card-title has-text-grey"><strong>Type Your Query Or Feedback</strong> </p>
                    <button class="delete" @click="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <form>
                      <div class="field has-icon">
                        <div class="control">
                          <label class="label has-text-grey">Your Name</label>
                          <label class="label has-text-danger has-text-right" v-if="err.name"><span class="icon"><i class="fa fa-exclamation-circle"></i></span>&nbsp;This Field Is Empty!</label>
                          <input type="text" class="input"  placeholder="Full Name" v-model="order.name">

                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                          <label class="label has-text-grey">Email Id</label>
                          <label class="label has-text-right has-text-danger" v-if="err.email"><span class="icon"><i class="fa fa-exclamation-circle"></i></span>&nbsp;
                            Email Address Not Provided!</label>
                          <input type="email" class="input" placeholder="Email Address" v-model="order.email">
                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                          <label class="label has-text-grey">Contact Number</label>
                          <label class="label has-text-right has-text-danger" v-if="err.phone"><span class="icon"><i class="fa fa-exclamation-circle"></i></span>&nbsp;
                            Please Enter Your Contact Number!</label>
                          <input type="phone" class="input" v-model="order.phone" placeholder="Your Mobile Number">
                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                        <label class="label has-text-grey">Comment</label>
                        <label class="label has-text-right has-text-danger" v-if="err.comment"><span class="icon"><i class="fa fa-exclamation-circle"></i></span>&nbsp;
                          Enter Your Comment!</label>
                        <textarea class="textarea" v-model="order.comment" placeholder="Type In Your Comment!">
                        </textarea>

                        </div>
                      </div>

                    </form>
                  </section>
                  <footer class="modal-card-foot">
                    <a class="button is-info" @click="post">Submit</a>
                    <a class="button" v-on:click="close">Cancel</a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="title is-4 marg"><strong>There's Always a Solution</strong>
        </p>
        <hr class="is-info sep">
      </div>
      <div class="columns">
        <div class="column is-1">

        </div>
        <div class="column">
          <div class="content">
            <span class="icon"><i class="fa fa-chevron-right"></i></span><strong>&nbsp; License</strong><br>&nbsp;
            <p>Created by <a href="#">Deepanshu Gandhi </a> and <a href="#">Deepanshu Hardaha</a></p>
            <p><img src="/src/assets/by.large.png" alt="CC" class="ic"><img class="ic" src="/src/assets/cc.large.png" alt="CC"><br />
            This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></p>
        </div>
        </div>
        <div class="column has-text-centered is-5">
          <strong class="dis "><span class="icon"><i class="fa fa-chevron-right is-2x"></i></span>Social</strong><br><br>
          <p><span class="icon"><a href="#"><i class="fa fa-facebook-square is-info"></i></a></span>
            <span class="icon"><a href="#"><i class="fa fa-twitter is-info"></i></a></span>
            <span class="icon"><a href="#"><i class="fa fa-instagram is-info"></i></a></span>
            <span class="icon"><a href="#"><i class="fa fa-google-plus is-info"></i></a></span>
          </p>

          <p class="title rights is-6">All <a href="#">Rights</a> Reserved.</p>
          <p class="title is-6"><small>Sitedesigns.XYZ Beta v0.5</small></p>
        </div>
        <div class="column">
          <p ><a href="#Top"><i class="fa fa-arrow-up fa-3x"></i></a><br></p><br>
        </div>


      </div>
      <hr>

    </footer>
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
      modal:false,
      order: {email:"",phone:"",name:"",comment:""},
      err: {email:false,phone:false,comment:false,name:false},
      submitted: false

    }
  },
  methods: {
    close: function(){
      this.modal = ! this.modal;
      this.order= {email:"",phone:"",name:"",comment:""};
      this.err= {email:false,phone:false,comment:false,name:false};
    },
    post: function(){
      if(this.order.name.length==0){
      this.err.name=true;
      return;
      }
      this.err.name=false;
      if(this.order.email.length==0){
      this.err.email=true;
      return;
      }
      this.err.email=false;
      if(this.order.comment.length==0){
      this.err.comment=true;
      return;
      }
      this.err.comment=false;


      if(this.order.phone.length==0){this.loading= false;
      this.err.phone=true;
      return;
      }
      this.err.phone=false;
      this.$http.post('https://sitedesigns-28a77.firebaseio.com/comments.json',this.order).then(function(data){
        console.log(data);
        this.submitted = true;
        this.modal = false;
        this.order={email:"",phone:"",name:"",comment:""};
      });
    }
  }
}
</script>

<style>
hr{
  color: #8498ba;
}
.sep{
  width: 15%;
  margin-left: 43%;
  border-top: 5px solid #4aa9d3;

}
.icon{
  margin-left: 8px;
}
.ic{
  margin: 2px 2px 2px 2px;
  height: 30px;
}
.rights{
  margin-top: 15%;
}
.marg{
  margin-top: 2%;

}
.left{
  margin-left: 7%;
}
.ryt{
  margin-right: 10%;
}
</style>
