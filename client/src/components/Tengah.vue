<template>
  <div>
    <div class="box" v-for="berita in news">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="berita.picture" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{berita.title}}</strong>
              <br>
              {{berita.description}}
              </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAvBoNWyYD6zubYXbY8zS1AOzsF9hW3W8Y",
  authDomain: "try-something-cool.firebaseapp.com",
  databaseURL: "https://try-something-cool.firebaseio.com",
  projectId: "try-something-cool",
  storageBucket: "try-something-cool.appspot.com",
  messagingSenderId: "107310151228"
  };

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
let newsRef = db.ref('news')

export default{
  data(){
    return{

    }
  },
  firebase:{
    news:newsRef
  }

}
</script>

<style scoped>
</style>
