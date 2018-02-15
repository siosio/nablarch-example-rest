<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <a href="#" class="header item">
        サンプルクライアント
      </a>
      <a class="item">ホーム</a>
      <a class="item" @click="$emit('new-project')">プロジェクト登録</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-header"
  }
</script>

<style scoped>
</style>