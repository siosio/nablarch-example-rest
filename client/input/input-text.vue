<template>
  <div class="field" v-bind:class="requiredText">
    <label>{{label_text}}</label>
    <input type="text" :placeholder="label_text" :name="name" :id="name" :value="value" @input="$emit('input', $event.target.value)"/>
    <div class="ui pointing red basic label" v-if="error_message != null">
      {{error_message}}
    </div>
  </div>
</template>

<script>
  export default {
    name    : "input-text",
    props   : {
      name         : {
        type    : String,
        required: true
      },
      value        : {},
      required     : {
        type   : Boolean,
        default: false
      },
      label_text   : {
        type    : String,
        required: true
      },
      error_message: {
        type: String
      }
    },
    computed: {
      requiredText: function() {
        return this.required ? 'required' : '';
      }
    }
  }
</script>

<style scoped>

</style>