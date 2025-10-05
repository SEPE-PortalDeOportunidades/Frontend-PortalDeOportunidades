<script setup>
import { ref } from "vue";
import EventCards from "@/components/EventCards.vue";
</script>
<template>
    <EventCards>
        <template #tipo>Estágio</template>
        <template #titulo>Estágio em Desenvolvimento de Software</template>
        <template #descricao>Oportunidade de estágio em empresa parceira para estudantes de Informática.</template>
        <template #data>Prazo: 17/09/2025</template>
        <template #professor>Por:Prof. Fabio Longo de Moura</template>
        <template #curso> Informatica</template>
        <template #requisitos>cursando a partir do 3º período, conhecimentos em programação</template>
    </EventCards>
</template>
<style scoped>
</style>