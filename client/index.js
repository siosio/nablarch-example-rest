import Vue from 'vue';
import VueRouter from 'vue-router';
import appHeader from './app-header.vue';
import NewProject from './new-project.vue'

const Foo = {template: '<div>foo</div>'};

Vue.use(VueRouter);

const routes = [
  {path: '', component: Foo},
  {path: '/', component: Foo},
  {path: '/project/new', component: NewProject}
];

let router = new VueRouter({
  routes
});


const vm = new Vue({
  router,
  el        : '#app',
  components: {appHeader},
  computed  : {},
  methods   : {
    new_project: function () {
      this.$router.push('/project/new')
    }
  }
});
