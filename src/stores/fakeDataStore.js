import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useFakeDataStore = defineStore("fakeData", () => {
  // ====== DADOS DE OPORTUNIDADES ======
  const oportunidades = ref([
    {
      id: 1,
      tipo: "Estágio",
      titulo: "Estágio em Desenvolvimento Web",
      descricao:
        "Oportunidade de estágio em empresa parceira para estudantes de Informática.",
      descricaoCompleta:
        "Esta é uma excelente oportunidade de estágio em desenvolvimento web, onde o estudante irá trabalhar com tecnologias modernas como React, Vue.js e Node.js. O estagiário participará de projetos reais, desenvolvendo soluções web para clientes da empresa parceira. Será uma experiência enriquecedora para aplicar os conhecimentos adquiridos em sala de aula.",
      data: "Prazo: 17/09/2025",
      professor: "Prof. João Silva",
      curso: "Informática, Sistemas de Informação",
      requisitos: "Estar cursando a partir do 3º semestre.",
      local: "IFC ARAQUARI",
      vagas: "5 vagas disponíveis",
      beneficios: "Bolsa auxílio de R$ 800,00 + auxílio transporte",
      status: "Inscrições abertas",
      novo: true,
    },
    {
      id: 2,
      tipo: "Edital",
      titulo: "Edital de Monitoria 2025",
      descricao: "Monitoria remunerada para o curso de Sistemas de Informação.",
      descricaoCompleta:
        "O programa de monitoria acadêmica oferece aos estudantes a oportunidade de auxiliar professores em disciplinas específicas, desenvolvendo habilidades pedagógicas e aprofundando conhecimentos técnicos. O monitor irá auxiliar em aulas práticas, tirar dúvidas dos colegas e apoiar em atividades de laboratório.",
      data: "Prazo: 25/09/2025",
      professor: "Prof. Ana Souza",
      curso: "Informática",
      requisitos: "Ter concluído o 2º semestre com média superior a 8,0.",
      local: "IFC ARAQUARI",
      vagas: "3 vagas disponíveis",
      beneficios: "Bolsa de R$ 400,00 mensais",
      status: "Inscrições abertas",
      novo: true,
    },
    {
      id: 3,
      tipo: "Evento",
      titulo: "Semana Acadêmica IFC",
      descricao: "Participe de palestras e workshops sobre tecnologia e inovação.",
      descricaoCompleta:
        "A Semana Acadêmica do IFC é um evento anual que reúne estudantes, professores e profissionais da área para discutir as últimas tendências em tecnologia. Serão realizadas palestras, workshops práticos, mesas redondas e apresentações de projetos estudantis. Uma oportunidade única de networking e aprendizado.",
      data: "De 05 a 09/10/2025",
      professor: "Coordenação IFC",
      curso: "Todos os cursos",
      requisitos: "Aberto a todos os alunos.",
      local: "Auditório Principal - IFC ARAQUARI",
      vagas: "200 vagas disponíveis",
      beneficios: "Certificado de participação + coffee break",
      status: "Inscrições abertas",
      novo: false,
    },
    {
      id: 4,
      tipo: "Estágio",
      titulo: "Estágio em Suporte Técnico",
      descricao: "Vaga de estágio para alunos de informática, suporte ao setor de TI.",
      descricaoCompleta:
        "Estágio na área de suporte técnico onde o estudante irá prestar atendimento aos usuários, realizar manutenção preventiva e corretiva em equipamentos, configurar sistemas operacionais e softwares, além de auxiliar na administração da rede corporativa. Excelente oportunidade para desenvolver habilidades técnicas e de atendimento ao cliente.",
      data: "Prazo: 10/10/2025",
      professor: "Prof. Ricardo Lima",
      curso: "Informática",
      requisitos: "Estar cursando a partir do 3º semestre.",
      local: "Empresa Parceira - Centro de Araquari",
      vagas: "2 vagas disponíveis",
      beneficios: "Bolsa de R$ 600,00 + vale transporte + vale alimentação",
      status: "Inscrições abertas",
      novo: true,
    },
    {
      id: 5,
      tipo: "Edital",
      titulo: "Bolsa de Iniciação Científica",
      descricao: "Programa de iniciação científica com bolsa para pesquisa em IA.",
      descricaoCompleta:
        "O programa de iniciação científica oferece aos estudantes a oportunidade de desenvolver pesquisas na área de Inteligência Artificial e Machine Learning. O bolsista irá trabalhar em projetos de pesquisa sob orientação de professores doutores, participar de congressos científicos e desenvolver artigos acadêmicos.",
      data: "Prazo: 30/10/2025",
      professor: "Prof. Dr. Maria Santos",
      curso: "Informática, BSI",
      requisitos: "Estar cursando a partir do 4º semestre, ter CRA mínimo de 7,5.",
      local: "Laboratório de Pesquisa - IFC ARAQUARI",
      vagas: "4 vagas disponíveis",
      beneficios: "Bolsa CNPq de R$ 500,00 mensais",
      status: "Inscrições abertas",
      novo: true,
    },
    {
      id: 6,
      tipo: "Evento",
      titulo: "Workshop de Programação Mobile",
      descricao: "Aprenda a desenvolver aplicativos móveis com React Native.",
      descricaoCompleta:
        "Workshop intensivo de programação mobile utilizando React Native. Os participantes irão aprender desde os conceitos básicos até o desenvolvimento de um aplicativo completo. Serão abordados temas como navegação, consumo de APIs, armazenamento local e publicação nas lojas de aplicativos.",
      data: "15/11/2025 - 9h às 17h",
      professor: "Prof. Carlos Tech",
      curso: "Informática, BSI",
      requisitos: "Conhecimentos básicos em JavaScript.",
      local: "Laboratório de Informática - IFC ARAQUARI",
      vagas: "25 vagas disponíveis",
      beneficios: "Certificado + material didático + coffee break",
      status: "Inscrições abertas",
      novo: false,
    },
  ]);

  // ====== DADOS DE CURSOS ======
  const cursos = ref([
    { id: 1, nome: "Agropecuária", codigo: "AGRO" },
    { id: 2, nome: "Informática", codigo: "INFO" },
    { id: 3, nome: "Química", codigo: "QUIM" },
    { id: 4, nome: "Bacharelado em Sistemas de Informação", codigo: "BSI" },
    { id: 5, nome: "Técnico em Eletrotécnica", codigo: "ELET" },
    { id: 6, nome: "Técnico em Mecânica", codigo: "MEC" },
  ]);

  // ====== DADOS DE ANOS/PERÍODOS ======
  const anosLetivos = ref([
    { id: 1, nome: "1º Ano", periodo: "primeiro" },
    { id: 2, nome: "2º Ano", periodo: "segundo" },
    { id: 3, nome: "3º Ano", periodo: "terceiro" },
    { id: 4, nome: "Nível Superior", periodo: "superior" },
  ]);

  // ====== DADOS DE USUÁRIOS (PARA LOGIN) ======
  const usuarios = ref([
    {
      id: 1,
      matricula: "2024001234",
      senha: "123456",
      nome: "João Silva Santos",
      email: "joao.santos@estudante.ifc.edu.br",
      curso: "Informática",
      ano: "3º Ano",
      tipo: "estudante",
    },
    {
      id: 2,
      matricula: "2024005678",
      senha: "abcd123",
      nome: "Marcos enzaqueu Costa",
      email: "maria.costa@estudante.ifc.edu.br",
      curso: "BSI",
      ano: "2º Ano",
      tipo: "estudante",
    },
    {
      id: 3,
      matricula: "2023009876",
      senha: "senha123",
      nome: "Pedro Almeida",
      email: "pedro.almeida@estudante.ifc.edu.br",
      curso: "Química",
      ano: "3º Ano",
      tipo: "estudante",
    },
    {
      id: 4,
      matricula: "PROF001",
      senha: "professor123",
      nome: "Prof. Ana Souza",
      email: "ana.souza@ifc.edu.br",
      curso: "Informática",
      tipo: "professor",
    },
  ]);

  // ====== DADOS DE PROFESSORES ======
  const professores = ref([
    {
      id: 1,
      nome: "Prof. João Silva",
      email: "joao.silva@ifc.edu.br",
      area: "Desenvolvimento Web",
    },
    {
      id: 2,
      nome: "Prof. Ana Souza",
      email: "ana.souza@ifc.edu.br",
      area: "Banco de Dados",
    },
    {
      id: 3,
      nome: "Prof. Ricardo Lima",
      email: "ricardo.lima@ifc.edu.br",
      area: "Redes e Suporte",
    },
    {
      id: 4,
      nome: "Prof. Dr. Maria Santos",
      email: "maria.santos@ifc.edu.br",
      area: "Inteligência Artificial",
    },
    {
      id: 5,
      nome: "Prof. Carlos Tech",
      email: "carlos.tech@ifc.edu.br",
      area: "Programação Mobile",
    },
    {
      id: 6,
      nome: "Coordenação IFC",
      email: "coordenacao@ifc.edu.br",
      area: "Coordenação Geral",
    },
  ]);

  // ====== COMPUTED PARA FILTROS ======
  const oportunidadesAbertas = computed(() =>
    oportunidades.value.filter((op) => op.status === "Inscrições abertas")
  );

  const oportunidadesPorTipo = computed(() => (tipo) =>
    oportunidades.value.filter((op) => op.tipo.toLowerCase() === tipo.toLowerCase())
  );

  const oportunidadesPorCurso = computed(() => (curso) =>
    oportunidades.value.filter((op) =>
      op.curso.toLowerCase().includes(curso.toLowerCase())
    )
  );

  const oportunidadesNovas = computed(() =>
    oportunidades.value.filter((op) => op.novo === true)
  );

  // ====== MÉTODOS PARA MANIPULAÇÃO DE DADOS ======
  const getOportunidadePorId = (id) => {
    return oportunidades.value.find((op) => op.id === id);
  };

  const getCursoPorNome = (nome) => {
    return cursos.value.find((curso) =>
      curso.nome.toLowerCase().includes(nome.toLowerCase())
    );
  };

  const validarLogin = (matricula, senha) => {
    return usuarios.value.find(
      (user) => user.matricula === matricula && user.senha === senha
    );
  };

  const getProfessorPorNome = (nome) => {
    return professores.value.find((prof) =>
      prof.nome.toLowerCase().includes(nome.toLowerCase())
    );
  };

  // ====== MÉTODOS PARA ADICIONAR DADOS ======
  const adicionarOportunidade = (novaOportunidade) => {
    const id = Math.max(...oportunidades.value.map((op) => op.id)) + 1;
    oportunidades.value.push({ ...novaOportunidade, id });
  };

  const adicionarUsuario = (novoUsuario) => {
    const id = Math.max(...usuarios.value.map((user) => user.id)) + 1;
    usuarios.value.push({ ...novoUsuario, id });
  };

  // ====== MÉTODOS PARA ATUALIZAR DADOS ======
  const atualizarOportunidade = (id, dadosAtualizados) => {
    const index = oportunidades.value.findIndex((op) => op.id === id);
    if (index !== -1) {
      oportunidades.value[index] = { ...oportunidades.value[index], ...dadosAtualizados };
    }
  };

  const marcarComoVisto = (id) => {
    const oportunidade = getOportunidadePorId(id);
    if (oportunidade) {
      oportunidade.novo = false;
    }
  };

  return {
    // Estado
    oportunidades,
    cursos,
    anosLetivos,
    usuarios,
    professores,

    // Computed
    oportunidadesAbertas,
    oportunidadesPorTipo,
    oportunidadesPorCurso,
    oportunidadesNovas,

    // Métodos
    getOportunidadePorId,
    getCursoPorNome,
    validarLogin,
    getProfessorPorNome,
    adicionarOportunidade,
    adicionarUsuario,
    atualizarOportunidade,
    marcarComoVisto,
  };
});
