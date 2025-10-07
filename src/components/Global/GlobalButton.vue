<script setup>
import { defineProps, defineEmits } from "vue"

// props for the button component: props are the primary way pass data from a parent component down to a child component
defineProps({
  label: { type: String, required: true },
  type: { type: String, default: "button" },
  disabled: { type: Boolean, default: false }
})
// defined emit: its how the Child component notifies the Parent that something has happened.
const emit = defineEmits(["click"])

</script>
<!-- create a button with the label passed as a prop -->
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
/* global button style */
.globalbutton {
  padding: 0.5rem 1rem; 
  background-color: #107207; 
  color: white; 
  border-radius: 12px; 
  transition: background-color 0.3s ease;
  cursor: pointer;
  width: 200px;
  height: 40px;
  font-size: 18px;
  border: none;
}

.globalbutton:hover {
  background-color: #118307; 
}


</style>
