<template>
 <div>    <!-- DIV UTAMA -->

    <div class="maincontent">
      <navbar @keluarDariAnak="logOut"></navbar>
      <br>

      <div class="columns is-multiline is-mobile">
        <div class="column is-one-quarter">
          <sampingkiri></sampingkiri>
        </div>

        <div class="column">
          <tengahcontact></tengahcontact>
        </div>
      </div>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <footernya></footernya>
    </div>

  </div> <!-- AKHIR DIV UTAMA -->
</template>

<script>
  // import { mapGetters } from 'vuex'
  import axios from 'axios';
  import navbar from '@/components/Navbar'
  import sampingkiri from '@/components/Sampingkiri'
  import tengahcontact from '@/components/TengahContact'
  import footernya from '@/components/Footer'

  export default {
    data(){
      return{
        test:''
      }
    },
    components:{
      navbar, sampingkiri, tengahcontact, footernya
    },
    methods:{
      logOut:function(){
        window.localStorage.removeItem('token')
        window.location.href = '/#/login'
      }
    },
    created:function(){
      let self = this
      if(localStorage.getItem('token') == null){
        window.location.href = '/#/login'
      } else {

      }
    }
  }
</script>

<style scoped>
.maincontent{
  width:80%;
  margin:0 auto;
}
</style>
