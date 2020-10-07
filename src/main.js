import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyDJbqldzUF_XhR_ebAfKT7RVHy6_l27I2o",
  authDomain: "stady-vue.firebaseapp.com",
  databaseURL: "https://stady-vue.firebaseio.com",
  projectId: "stady-vue",
  storageBucket: "stady-vue.appspot.com",
  messagingSenderId: "196689103412",
  appId: "1:196689103412:web:2075060919266a25c0d861",
  measurementId: "G-C1912EEH5J"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
