<script setup>
import { defineProps, defineEmits } from "vue"

// Props do botão
defineProps({
  label: { type: String, required: true },
  type: { type: String, default: "button" },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(["click"])
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="emit('click')"
    class="globalbutton"

  >
    {{ label }}
    
  </button>
</template>

<style scoped>
.globalbutton {
  padding: 0.5rem 1rem; 
  background-color: #000000; 
  color: white; 
  border-radius: 0.375rem; 
  transition: background-color 0.3s ease;
  cursor: pointer;
  width: 200px;
  height: 40px;
  font-size: 18px;
}

.globalbutton:hover {
  background-color: #3d3d3d; 
}


</style>
