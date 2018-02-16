<template>
  <div class="field" v-bind:class="requiredField">
    <label>{{label_text}}</label>
    <slot></slot>
    <div class="ui pointing red basic label" v-if="error_message != null">
      {{error_message}}
    </div>
  </div>
</template>

<script>
  export default {
    name    : "field",
    props   : {
      required    : {
        type   : Boolean,
        default: false
      },
      label_text  : {
        type    : String,
        required: true
      },
      error_message: {
        type: String
      }
    },
    computed: {
      requiredField: function() {
        return this.required ? 'required' : '';
      }
    }
  }
</script>

<style scoped>

</style>