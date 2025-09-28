<script setup>
import { defineProps, defineEmits } from "vue"
defineProps ({
    modelValue: String,  //modelvalue é tipo o treinador entregando a bola pro jogador treinar(inital value)
    label: String,  //tipo da label, no caso, vai ser uma string
    type: {
        type: String, 
        default: "text" //se o tecnico nao fala nada, o jogador entra como armador, no caso text = armador.
    }

    
})

const emit = defineEmits(["update:modelValue"]) 
</script>
<template>
  <div>
    <label v-if="label" :for="label" class="block mb-1">{{ label }}</label>
    <input
      v-bind="$attrs"
      :type="type"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"

    />
  </div>

</template>

<style>
input {
    border-radius: 15px;
    width: 375px;
    height: 40px;
    background-color: rgb(247, 247, 247);
    border: none;
    margin-bottom: 15px;
}
</style>