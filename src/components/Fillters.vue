<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";
import { computed } from "vue";
const selectedFilter = ref("");
const options = [
  { value: "Info", label: "Informática" },
  { value: "Agro", label: "Agropecuária" },
  { value: "Quimi", label: "Química" },
  { value: "Facul", label: "BSI" },

];

defineProps({
  label: {
    type: String,
    default: "Filtro"
  },
  option: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["update:modelValue"]);

//pra exibir so os selecionados pelo usuario
const filteredOptions = computed(() => {
  if (!selectedFilter.value) return options;
  return options.filter(opt => opt.category === selectedFilter.value);
});
</script>


<template>
  <div class="container">
    <label for="select">Curso/Área <br></label>
    <select class="slct" :value="modelValue" @change="updateValue($event.target.value)">
      <option class="opt" disabled value="">Selecione</option>
      <option class="opts" v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>


<style scoped>
label {
  font-weight: bold;
}
.container {
  border: solid 1px rgb(189, 189, 189);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 50px;
  padding: 22px;
  border-radius: 18px;
}

.slct {
  background-color: rgb(231, 231, 231);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  padding: 3px 60px 3px 5px;
  border-radius: 3px;
  margin-top: 5px;
}

.opt{
background: white;
border: none;
padding: 200px;
}
</style>
