<template>
  <field :required="required" :label_text="label_text" :error_message="error_message">
    <input type="text" :placeholder="label_text" :name="name" :id="name" :value="value" @input="$emit('input', $event.target.value)"/>
  </field>
</template>

<script>
  import Field from "./field.vue";

  export default {
    components: {Field},
    name      : "input-text",
    props     : {
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
    }
  }
</script>

<style scoped>

</style>