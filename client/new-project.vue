<!-- プロジェクト登録 -->
<template>
  <div>
    <h1>プロジェクト登録</h1>
    <form method="post" class="ui form">
      <div class="ui negative message" v-if="save_error_message !== '' && save_error_message !== null">
        <p>{{save_error_message}}</p>
      </div>
      <input-text v-bind:required="true" label_text="プロジェクト名" name="projectName" v-model="project.projectName" />
      <code-select v-bind:required="true" label_text="プロジェクトタイプ" name="projectType" code="projectType"
                   v-model="project.projectType" />
      <code-select v-bind:required="true" label_text="プロジェクト分類" name="projectClass" code="projectClass"
                   v-model="project.projectClass" />
      <input-number v-bind:required="true" label_text="顧客" name="clientId" v-model="project.clientId" />
      <input-text label_text="プロジェクトマネージャ" name="projectManager" v-model="project.projectManager"/>
      <button class="primary ui button" @click.prevent="createProject">登録</button>
    </form>
  </div>
</template>

<script>
  import InputText from './input/input-text.vue';
  import CodeSelect from './input/code-select.vue';
  import axios from 'axios';
  import InputNumber from "./input/input-number.vue";

  export default {
    data() {
      return {
        project           : {
          projectName   : '',
          projectType   : '',
          projectClass  : '',
          clientId      : null,
          projectManager: ''
        },
        save_error_message: ''
      }
    },
    components: {
      InputNumber,
      CodeSelect,
      InputText
    },
    name      : "new-project",
    methods   : {
      init         : function() {
        this.project = {};
      },
      createProject: function() {
        const vm = this;
        this.save_error_message = '';
        axios.post('http://localhost:9080/projects', this.project)
            .then(function(response) {
              vm.$router.push('/?info_message=登録しました。');
            })
            .catch(function(error) {
              if (!error.response) {
                vm.save_error_message = '登録処理に失敗しました。'
              } else {
              }
            });
      }
    },
    watch     : {
      '$route': 'init'
    }
  }

</script>

<style scoped>

</style>