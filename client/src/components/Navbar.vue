<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item is-tab is-hidden-mobile is-active"><router-link to="/">Home</router-link></a>
        <a class="nav-item is-tab is-hidden-mobile">Gallery</a>
        <a class="nav-item is-tab is-hidden-mobile">List Game</a>
        <a class="nav-item is-tab is-hidden-mobile"><router-link to="/contactus">Contact Us</router-link></a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img src="http://bulma.io/images/jgthms.png">
          </figure>
          Neo Game Center
        </a>
        <a class="nav-item is-tab" @click="emitLogout">Log out</a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data(){
      return{
        params:''
      }
    },
    methods: {
      emitLogout () {
        this.$emit('keluarDariAnak')
      }
    },
    created:function(){
      console.log('hasil',this.$router.currentRoute.name);
    }
  }
</script>

<style scoped>
</style>
