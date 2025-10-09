<script setup>
import { ref } from "vue";
import teacherNav from "@/components/teacherNav.vue";

const contador = ref(0);
</script>
<template>
    <button @click="contador++" type="button">{{ contador }}</button>
</template>

<style scoped>
</style>