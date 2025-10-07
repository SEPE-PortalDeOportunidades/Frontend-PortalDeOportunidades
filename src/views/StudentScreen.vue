<script setup>
import studentNav from "@/components/studentNav.vue";
import Filtters from "@/components/Fillters.vue";
import EventCards from "@/components/EventCards.vue";
import { useFakeDataStore } from "@/stores/fakeDataStore.js";

// Usando o store para obter os dados
const fakeDataStore = useFakeDataStore();
const eventos = fakeDataStore.oportunidades;
</script>

<template>
  <div class="teacher-screen">
    <nav>
      <studentNav />
    </nav>

    <main class="main">
      <section class="titulo">
        <h1>Portal de Oportunidades</h1>
        <p>Encontre editais, estágios, monitorias e eventos acadêmicos</p>
      </section>

      <section class="content">
        <h2>Filtre por</h2>
        <Filtters />

        <div class="cards">
          <EventCards v-for="evento in eventos" :key="evento.id" :tipo="evento.tipo">
            <template #tipo>{{ evento.tipo }}</template>
            <template v-if="evento.novo" #novo>Novo</template>
            <template #titulo>{{ evento.titulo }}</template>
            <template #descricao>{{ evento.descricao }}</template>
            <template #descricaoCompleta>{{ evento.descricaoCompleta }}</template>
            <template #data>{{ evento.data }}</template>
            <template #professor>{{ evento.professor }}</template>
            <template #curso>Curso: {{ evento.curso }}</template>
            <template #local>{{ evento.local }}</template>
            <template #vagas>{{ evento.vagas }}</template>
            <template #requisitos>{{ evento.requisitos }}</template>
            <template #beneficios>{{ evento.beneficios }}</template>
            <template #status>{{ evento.status }}</template>
          </EventCards>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
}

/* NAVBAR */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* TÍTULO */
.titulo {
  width: 100%;
  text-align: left;
  background: rgb(0, 173, 0);
  color: #fff;
  padding: 140px 2rem 60px 40rem;
}

.titulo h1 {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
}
h2 {
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
}
.titulo p {
  font-size: 22px;
  opacity: 0.9;
  color: white;
}

/* MAIN CONTENT */
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
}

.content {
  width: 100%;
  max-width: 1300px;
  margin-top: 40px;
  padding: 0 2rem;
}

/* CARDS GRID */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-top: 50px;
  gap: 5rem;
}

/* EVENTCARDS SLOT STYLING */
:deep(.tipo) {
  padding: 6px 12px;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 8px;
}

:deep(.titulo) {
  font-size: 22px;
  font-weight: bold;
  color: #222;
  margin-top: 10px;
}

:deep(.descricao) {
  color: #555;
  margin-top: 6px;
  line-height: 1.4;
}

:deep(.data),
:deep(.professor),
:deep(.curso),
:deep(.requisitos) {
  color: #333;
  font-size: 14px;
  margin-top: 5px;
}
</style>
