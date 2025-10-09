<script setup>
import { defineProps, defineEmits } from "vue"
defineProps ({
    modelValue: String,  //modelvalue is like the coach handing the ball to the player to train (initial value)
    label: String,  //label type, in this case, it will be a string
    type: {
        type: String,
        default: "text" //if the coach doesn't say anything, the player enters as a point guard, in this case text = point guard.
    }


})

const emit = defineEmits(["update:modelValue"])
</script>
<template>
  <!-- create a reusable input component -->
  <div>
    <label v-if="label" :for="label" class="block mb-1">{{ label }}</label>
    <input
      min = "0"
      v-bind="$attrs" 
      :type="type"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :class="$attrs.class"
/>
  </div>

</template>

<style>
/* input style */
input {
    border-radius: 10px;
    width: 370px;
    height: 40px;
    padding: 0 0 0 10px;
    font-size: 20px;
    background-color: rgb(236, 236, 236);
    border: none;
    margin-bottom: 15px;
    box-shadow: 0 6px 8px  rgba(0, 0, 0, 0.1);
}
</style>
