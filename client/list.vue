<template>
  <div>
    <h1>プロジェクト一覧</h1>
    <div class="ui info message" v-if="info_message !== '' && info_message != null">
      <p>{{info_message}}</p>
    </div>

    <table class="ui striped table">
      <thead>
      <tr>
        <th>ID</th>
        <th>プロジェクト名</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="project in projects">
        <td>{{project.projectId}}</td>
        <td>{{project.projectName}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name   : "list",
    props  : {
      info_message: String
    },
    data() {
      return {
        projects: []
      }
    },
    methods: {
      find: function() {
        const vm = this;
        axios.get('http://localhost:9080/projects')
            .then(function(response) {
              vm.projects = response.data;
              console.log(vm.projects);
            })
            .catch(function(error) {
              console.log(error);
            });
      }
    },
    created() {
      this.find();
    },
    watch  : {
      '$route': 'find'
    }
  };
</script>

<style scoped>

</style>