<script setup>
import teacherNav from '@/components/teacherNav.vue'
import Filtters from '@/components/Fillters.vue'
import EventCards from '@/components/EventCards.vue'

// Dados de exemplo para v-for
const eventos = [
  {
    tipo: "Estágio",
    titulo: "Estágio em Desenvolvimento Web",
    descricao: "Oportunidade de estágio em empresa parceira para estudantes de Informática.",
    data: "Prazo: 17/09/2025",
    professor: "Prof. João Silva",
    curso: "Informática, Sistemas de Informação",
    requisitos: "Estar cursando a partir do 3º semestre."
  },
  {
    tipo: "Edital",
    titulo: "Edital de Monitoria 2025",
    descricao: "Monitoria remunerada para o curso de Sistemas de Informação.",
    data: "Prazo: 25/09/2025",
    professor: "Prof. Ana Souza",
    curso: "Informática",
    requisitos: "Ter concluído o 2º semestre."
  },
  {
    tipo: "Evento",
    titulo: "Semana Acadêmica IFC",
    descricao: "Participe de palestras e workshops sobre tecnologia e inovação.",
    data: "De 05 a 09/10/2025",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Suporte Técnico",
    descricao: "Vaga de estágio para alunos de informática, suporte ao setor de TI.",
    data: "Prazo: 10/10/2025",
    professor: "Prof. Ricardo Lima",
    curso: "Informática",
    requisitos: "Estar cursando a partir do 3º semestre."
  },
    {
    tipo: "Estágio",
    titulo: "Estágio em Suporte Técnico",
    descricao: "Vaga de estágio para alunos de informática, suporte ao setor de TI.",
    data: "Prazo: 10/10/2025",
    professor: "Prof. Ricardo Lima",
    curso: "Informática",
    requisitos: "Estar cursando a partir do 3º semestre."
  },
    {
    tipo: "Estágio",
    titulo: "Estágio em Suporte Técnico",
    descricao: "Vaga de estágio para alunos de informática, suporte ao setor de TI.",
    data: "Prazo: 10/10/2025",
    professor: "Prof. Ricardo Lima",
    curso: "Informática",
    requisitos: "Estar cursando a partir do 3º semestre."
  }
]
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
          <EventCards
            v-for="(evento, i) in eventos"
            :key="i"
            :tipo="evento.tipo"
          >
            <template #tipo>{{ evento.tipo }}</template>
            <template #titulo>{{ evento.titulo }}</template>
            <template #descricao>{{ evento.descricao }}</template>
            <template #data>{{ evento.data }}</template>
            <template #professor>{{ evento.professor }}</template>
            <template #curso>Curso: {{ evento.curso }}</template>
            <template #requisitos>{{ evento.requisitos }}</template>
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
