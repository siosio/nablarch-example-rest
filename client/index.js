import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHeader from './app-header.vue';
import NewProject from './new-project.vue'
import List from './list.vue';
import '../semantic/dist/semantic.js'

const Foo = {template: '<div>foo</div>'};

Vue.use(VueRouter);

const routes = [
  {path: '/', component: List, props: (route) => ({info_message: route.query.info_message})},
  {path: '/project/new', component: NewProject},
];

let router = new VueRouter({
  routes
});


const vm = new Vue({
  router,
  el        : '#app',
  data      : {
    info_message: ''
  },
  components: {AppHeader},
  computed  : {},
  methods   : {
    new_project: function() {
      this.$router.push('/project/new');
    },
    home       : function() {
      this.$router.push('/');
    }
  },
  template  :
      `<div>
        <app-header v-on:new-project="new_project" v-on:home="home"/>
        <div class="ui main text container">
          <router-view></router-view>
        </div>
      </div>
      `
});
