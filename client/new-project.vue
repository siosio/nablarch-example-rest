<!-- プロジェクト登録 -->
<template>
  <div>
    <h1>プロジェクト登録</h1>

    <form method="post" class="ui form">
      <input-text v-bind:required="true" label_text="プロジェクト名" name="projectName" v-model="project.projectName" />
      <code-select v-bind:required="true" label_text="プロジェクトタイプ" name="projectType" code="projectType" v-model="project.projectType" />
      <code-select v-bind:required="true" label_text="プロジェクト分類" name="projectClass" code="projectClass" v-model="project.projectClass" />
      <input-text label_text="プロジェクトマネージャ" name="projectManager" />
      <button class="primary ui button" @click.prevent="createProject">登録</button>
    </form>
  </div>
</template>

<script>
  import InputText from './input/input-text.vue';
  import CodeSelect from './input/code-select.vue';
  import axios from 'axios';

  export default {
    data() {
      return {
        project: {
          projectName: '',
          projectType: '',
          projectClass: ''
        }
      }
    },
    components: {
      CodeSelect,
      InputText
    },
    name      : "new-project",
    methods   : {
      createProject: function() {
        console.log(this.project);
        axios.post('http://localhost:9080/projects', this.project)
            .then(function(response) {
                  console.log(response);
                  console.log(response.data);
                }
            )

      }
    }
  }
</script>

<style scoped>

</style>