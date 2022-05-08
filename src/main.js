import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'
import {getAuth} from 'firebase/auth'
import App from './App.vue'
import {store} from './store/index'
import axios from 'axios'
import { initializeApp } from '@firebase/app'

axios.defaults.baseURL='https://vue--js-3-default-rtdb.firebaseio.com/'

const router = createRouter({
    routes,
    history:createWebHistory()
})
router.beforeEach ( (to,_, next)=> {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next()
    }else {
      alert('Debes iniciar Sesión')
      next('/')//redirection
    }
  } else {
    next()
  }
});
//FireBase
const firebaseConfig = {
  apiKey: "AIzaSyBew8e2hErz1N0QNl-DNj_S93qZB7Qv33c",
    authDomain: "vue--js-3.firebaseapp.com",
    databaseURL: "https://vue--js-3-default-rtdb.firebaseio.com",
    projectId: "vue--js-3",
    storageBucket: "vue--js-3.appspot.com",
    messagingSenderId: "646812679429",
    appId: "1:646812679429:web:c29a0b8e7e5fd61f520b6c"
};
//inicializacion Firebase 
initializeApp (firebaseConfig);

import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css' 
const app = createApp(App)
app.use(VuesticPlugin)
app.use(router)
app.use(store)

app.mount('#app')

