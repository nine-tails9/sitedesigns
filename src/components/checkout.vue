<template class="notification is-light">
  <div class="notification is-light">
    <h1 class="title is-4 notification is-danger">Confirm Your Order</h1>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4 ">
          <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Seleted Package
            </p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Go Back</a>
            <a class="card-footer-item">Change</a>
          </footer>
        </div>
      </div>

      <div class="tile is-parent notification is-white sec">
        <div class="tile is-child is-5">
          <p>
        <form method="post">
          <div class="field">
          <label class="label has-text-white">Name</label>
          <div class="control has-icons-left">
            <input class="input is-success" type="text" placeholder="Your Full Name" v-model=order.name><span class="icon is-small is-left">
            <i class="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input is-success" type="email" placeholder="Your Email" v-model=order.email>
            <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          </div>
          </div>
          <label class="label">Contact</label>
          <div class="field has-addons">
          <div class="control has-icons-left">
            <input class="input pin is-success" type="text" placeholder="+91" v-model=order.pin>
            <span class="icon is-left">
            <i class="fa fa-mobile-phone fa-lg"></i>
            </span>
          </div>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Contact No" v-model=order.phone>
          </div>
          </div>
          <div class="field">

          </div>
        </form>
        </p>


      </div>
      <div class="tile is-child">
        <label class="label">Description</label>
        <textarea class="textarea is-success" placeholder="Your Use!" v-model=order.desc></textarea>
        <br>
        <div class="content is-pulled-left">
          <div class="subtitle" v-if=err.email>
            Email field is missing!
          </div>
          <div class="subtitle" v-if=err.phone>
            Please enter phone Number
          </div>
          <div class="subtitle" v-if=err.desc>
            Description is Small
          </div>
          <div class="subtitle" v-if=err.pin>
            Country Code is empty!
          </div>

        </div>
        <button type="button" class="button submit is-pulled-right" v-on:click="post">Submit</button>
      </div>
      </div>

    </div>




  </div>
</template>

<script>
export default {

  data () {
    return {
      order: {email:"",phone:"",desc:"",name:"",pin:""},
      err: {email:false,phone:false,desc:false,name:false,pin:false}
    }
  },
  methods: {
    post: function(){
      if(this.order.email.length==0){
      this.err.email=true;
      return;
      }
      this.err.email=false;
      if(this.order.pin.length==0){
      this.err.pin=true;
      return;
      }
      this.err.pin=false;

      if(this.order.name.length==0){
      this.err.name=true;
      return;
      }
      this.err.name=false;
      if(this.order.phone.length==0){
      this.err.phone=true;
      return;
      }
      this.err.phone=false;
      if(this.order.desc.length<=10){
        this.err.desc=true;
        return;
      }
      this.err.desc=false;
      this.$http.post('https://sitedesigns-28a77.firebaseio.com/orders.json',this.order).then(function(data){
        console.log(data);
      });
    }
  }
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

</style>
