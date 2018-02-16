<template>
  <div>
    <h1>プロジェクト一覧</h1>
    <div class="ui info message" v-if="info_message !== '' && info_message != null">
      <p>{{info_message}}</p>
    </div>

  </div>

</template>

<script>
  export default {
    name: "list",
    props: {
      info_message: String
    }
  }
</script>

<style scoped>

</style>