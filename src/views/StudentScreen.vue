<script setup>
import { ref, computed } from "vue";
import studentNav from "@/components/studentNav.vue";
import Filtters from "@/components/Fillters.vue";
import EventCards from "@/components/EventCards.vue";

// ====== DADOS DE OPORTUNIDADES ======
const eventos = ref([
  {
    tipo: "Estágio",
    titulo: "Estágio em Desenvolvimento Web Full Stack",
    descricao: "Oportunidade para alunos participarem de projetos web completos.",
    data: "Prazo: 15/11/2025",
    professor: "Prof. Lucas Almeida",
    curso: "Informática, Sistemas de Informação",
    requisitos: "Conhecimento básico em HTML, CSS e JavaScript."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Análise de Dados",
    descricao: "Auxílio na coleta, tratamento e análise de dados da empresa.",
    data: "Prazo: 20/11/2025",
    professor: "Prof. Mariana Costa",
    curso: "Sistemas de Informação, Estatística",
    requisitos: "Conhecimento básico em Excel ou Python."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Marketing Digital",
    descricao: "Atuação em criação de conteúdo e análise de campanhas online.",
    data: "Prazo: 30/11/2025",
    professor: "Prof. Rafael Oliveira",
    curso: "Administração, Comunicação",
    requisitos: "Domínio de redes sociais e marketing básico."
  },
  {
    tipo: "Monitoria",
    titulo: "Monitoria em Algoritmos",
    descricao: "Auxílio aos alunos nas aulas de lógica de programação e algoritmos.",
    data: "Prazo: 25/11/2025",
    professor: "Prof. Beatriz Ferreira",
    curso: "Informática, Sistemas de Informação",
    requisitos: "Ter cursado Algoritmos I e II."
  },
  {
    tipo: "Monitoria",
    titulo: "Monitoria em Física Aplicada",
    descricao: "Auxílio aos alunos em exercícios e dúvidas de física aplicada.",
    data: "Prazo: 18/11/2025",
    professor: "Prof. João Pedro",
    curso: "Engenharia, Informática",
    requisitos: "Ter boa nota em Física I e II."
  },
  {
    tipo: "Evento",
    titulo: "Semana de Inovação Tecnológica",
    descricao: "Palestras, workshops e demonstrações de novas tecnologias.",
    data: "De 10 a 14/11/2025",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos."
  },
  {
    tipo: "Evento",
    titulo: "Feira de Profissões 2025",
    descricao: "Apresentação de oportunidades de carreira e cursos superiores.",
    data: "Data: 22/11/2025",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos e visitantes."
  },
  {
    tipo: "Edital",
    titulo: "Edital de Bolsas de Pesquisa 2025",
    descricao: "Bolsas para alunos desenvolverem projetos de pesquisa científica.",
    data: "Prazo: 30/11/2025",
    professor: "Prof. Ana Lima",
    curso: "Todos os cursos",
    requisitos: "Ter bom desempenho acadêmico e interesse em pesquisa."
  },
  {
    tipo: "Edital",
    titulo: "Edital de Monitoria em Programação",
    descricao: "Seleção de alunos para monitoria em disciplinas de programação.",
    data: "Prazo: 05/12/2025",
    professor: "Prof. Marcos Vinicius",
    curso: "Sistemas de Informação, Informática",
    requisitos: "Ter concluído as disciplinas básicas de programação."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Suporte de TI",
    descricao: "Atendimento a usuários e manutenção de equipamentos de informática.",
    data: "Prazo: 12/12/2025",
    professor: "Prof. Ricardo Lima",
    curso: "Informática",
    requisitos: "Estar cursando a partir do 3º semestre."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Desenvolvimento de Jogos",
    descricao: "Participação em projetos de games, programação e design.",
    data: "Prazo: 10/12/2025",
    professor: "Prof. Felipe Souza",
    curso: "Informática, Design",
    requisitos: "Conhecimento básico em Unity ou Godot."
  },
  {
    tipo: "Monitoria",
    titulo: "Monitoria em Matemática Aplicada",
    descricao: "Auxílio aos alunos nas disciplinas de matemática aplicada.",
    data: "Prazo: 08/12/2025",
    professor: "Prof. Carla Mendes",
    curso: "Todos os cursos",
    requisitos: "Ter bom desempenho nas disciplinas de matemática."
  },
  {
    tipo: "Evento",
    titulo: "Workshop de Inteligência Artificial",
    descricao: "Aprenda sobre IA, Machine Learning e aplicações práticas.",
    data: "Data: 18/12/2025",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos."
  },
  {
    tipo: "Evento",
    titulo: "Palestra sobre Carreira em TI",
    descricao: "Especialistas falam sobre oportunidades no mercado de tecnologia.",
    data: "Data: 20/12/2025",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos."
  },
  {
    tipo: "Edital",
    titulo: "Edital de Seleção para Projeto de Extensão",
    descricao: "Participação em projetos de extensão na área de tecnologia.",
    data: "Prazo: 15/12/2025",
    professor: "Prof. Renata Lima",
    curso: "Todos os cursos",
    requisitos: "Disponibilidade mínima de 8h semanais."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Computação em Nuvem",
    descricao: "Auxílio em projetos que utilizam AWS, Azure e Google Cloud.",
    data: "Prazo: 22/12/2025",
    professor: "Prof. Eduardo Santos",
    curso: "Informática, Sistemas de Informação",
    requisitos: "Conhecimento básico em Linux e redes."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Suporte de Software",
    descricao: "Atendimento a clientes e resolução de problemas em software.",
    data: "Prazo: 28/12/2025",
    professor: "Prof. Fernanda Rocha",
    curso: "Informática",
    requisitos: "Estar cursando a partir do 3º semestre."
  },
  {
    tipo: "Monitoria",
    titulo: "Monitoria em Redes de Computadores",
    descricao: "Auxílio nas disciplinas de redes, configuração e manutenção.",
    data: "Prazo: 10/01/2026",
    professor: "Prof. Lucas Almeida",
    curso: "Informática",
    requisitos: "Ter concluído Redes I e II."
  },
  {
    tipo: "Evento",
    titulo: "Hackathon de Inovação",
    descricao: "Desafios de programação com premiações para os melhores projetos.",
    data: "De 05 a 07/01/2026",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos."
  },
  {
    tipo: "Edital",
    titulo: "Edital de Bolsas de Extensão Cultural",
    descricao: "Bolsas para alunos participarem de projetos culturais do campus.",
    data: "Prazo: 12/01/2026",
    professor: "Prof. Ana Souza",
    curso: "Todos os cursos",
    requisitos: "Interesse em projetos culturais e participação ativa."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Design UX/UI",
    descricao: "Criação de interfaces e experiências para aplicativos e sites.",
    data: "Prazo: 18/01/2026",
    professor: "Prof. Felipe Souza",
    curso: "Design, Sistemas de Informação",
    requisitos: "Conhecimento básico em Figma ou Adobe XD."
  },
  {
    tipo: "Monitoria",
    titulo: "Monitoria em Programação Web",
    descricao: "Auxílio aos alunos nas disciplinas de HTML, CSS e JavaScript.",
    data: "Prazo: 20/01/2026",
    professor: "Prof. Mariana Costa",
    curso: "Sistemas de Informação, Informática",
    requisitos: "Ter concluído Programação Web I e II."
  },
  {
    tipo: "Evento",
    titulo: "Palestra sobre Segurança da Informação",
    descricao: "Técnicas e boas práticas para proteger dados e sistemas.",
    data: "Data: 25/01/2026",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Testes de Software",
    descricao: "Participação em processos de QA e testes de sistemas.",
    data: "Prazo: 28/01/2026",
    professor: "Prof. Ricardo Lima",
    curso: "Informática, Sistemas de Informação",
    requisitos: "Conhecimento básico em testes e lógica de programação."
  },
  {
    tipo: "Edital",
    titulo: "Edital de Seleção para Projeto de Startups",
    descricao: "Participação em incubadora de startups do campus.",
    data: "Prazo: 05/02/2026",
    professor: "Prof. Renata Lima",
    curso: "Todos os cursos",
    requisitos: "Disponibilidade mínima de 10h semanais."
  },
  {
    tipo: "Evento",
    titulo: "Semana de Empreendedorismo Digital",
    descricao: "Workshops sobre criação e gestão de negócios digitais.",
    data: "De 10 a 14/02/2026",
    professor: "Coordenação IFC",
    curso: "Todos os cursos",
    requisitos: "Aberto a todos os alunos."
  },
  {
    tipo: "Monitoria",
    titulo: "Monitoria em Inteligência Artificial",
    descricao: "Auxílio aos alunos nas disciplinas de IA e Machine Learning.",
    data: "Prazo: 15/02/2026",
    professor: "Prof. João Pedro",
    curso: "Informática, Sistemas de Informação",
    requisitos: "Ter concluído Introdução à IA."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Desenvolvimento Front-end",
    descricao: "Criação e manutenção de interfaces web modernas.",
    data: "Prazo: 20/02/2026",
    professor: "Prof. Lucas Almeida",
    curso: "Informática, Sistemas de Informação",
    requisitos: "Conhecimento básico em React ou Vue.js."
  },
  {
    tipo: "Estágio",
    titulo: "Estágio em Suporte Técnico Avançado",
    descricao: "Auxílio em resolução de problemas complexos de TI.",
    data: "Prazo: 25/02/2026",
    professor: "Prof. Eduardo Santos",
    curso: "Informática",
    requisitos: "Estar cursando a partir do 4º semestre."
  }
]);

// ====== CONTROLE DE FILTRO ======
const filtroSelecionado = ref("Todos");

const eventosFiltrados = computed(() => {
  if (filtroSelecionado.value === "Todos") return eventos.value;
  return eventos.value.filter((e) => e.tipo === filtroSelecionado.value);
});

function atualizarFiltro(novoFiltro) {
  filtroSelecionado.value = novoFiltro;
}
</script>

<template>
  <div class="student-screen">
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
        <Filtters @update="atualizarFiltro" />

        <div class="cards">
          <EventCards
            v-for="(evento, i) in eventosFiltrados"
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
  overflow-y: scroll;
}

/* NAVBAR */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
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

.titulo p {
  font-size: 22px;
  opacity: 0.9;
  color: white;
}

h2 {
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
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
</style>
