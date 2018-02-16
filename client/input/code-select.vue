<template>
  <field :label_text="label_text" :required="required" :error_message="error_message">
    <select class="ui dropdown" :name="name" :value="value"
            @change="$emit('input', $event.target.selectedOptions.length ? $event.target.selectedOptions[0]._value : null)">
      <option value="">{{label_text}}</option>
      <option v-for="item in getList(code)" v-bind:value="item.name">
        {{item.label}}
      </option>
    </select>
  </field>
</template>

<script>
  import Field from "./field.vue";
  import '../../semantic/dist/semantic.js'

  const projectType = [
    {name: 'development', label: '新規開発PJ'},
    {name: 'maintenance', label: '保守PJ'}
  ];

  const projectClass = [
    {name: 's', label: 'S'},
    {name: 'a', label: 'A'},
    {name: 'b', label: 'B'},
    {name: 'c', label: 'C'},
    {name: 'd', label: 'D'},
  ];

  export default {
    components: {Field},
    name      : "code-select",
    data() {
      return {
        projectType : projectType,
        projectClass: projectClass
      }
    },
    props     : {
      name         : {
        type    : String,
        required: true
      },
      value        : {},
      code         : {
        type    : String,
        required: true
      },
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
    methods : {
      getList: function(name) {
        if (this.code === 'projectType') {
          return this.projectType;
        } else {
          return this.projectClass;
        }
      }
    }
  }

  // dropdown
  $('.ui.dropdown').dropdown();

</script>

<style scoped>

</style>