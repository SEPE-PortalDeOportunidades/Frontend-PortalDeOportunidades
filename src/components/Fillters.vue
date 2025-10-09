<script setup>
import { ref } from 'vue'

// Filtros e cores
const filtros = [
  { nome: 'Todos', cor: '#049f45' },      // Verde
  { nome: 'Estágio', cor: '#007bff' },    // Azul
  { nome: 'Monitoria', cor: '#ffc107' },  // Amarelo
  { nome: 'Evento', cor: '#dc3545' },     // Vermelho
  { nome: 'Edital', cor: '#6f42c1' }      // Roxo
]

const filtroAtivo = ref('Todos')

// Emit para o pai
const emit = defineEmits(['update'])

function selecionar(filtroNome) {
  filtroAtivo.value = filtroNome
  console.log("Filtro selecionado:", filtroAtivo.value)
  emit('update', filtroNome)
}
</script>

<template>
  <div class="filtros">
    <button
      v-for="filtro in filtros"
      :key="filtro.nome"
      class="botao"
      :class="{ ativo: filtroAtivo === filtro.nome }"
      @click="selecionar(filtro.nome)"
      :style="filtroAtivo === filtro.nome ? { backgroundColor: filtro.cor, color: '#fff' } : {}"
    >
      {{ filtro.nome }}
    </button>
  </div>
</template>

<style scoped>
.filtros {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f5;
  padding: 6px;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  gap: 20px;
}

.botao {
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px 0;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  color: #000;
  transition: all 0.3s ease;
}

.botao:hover {
  background-color: #dfe6e0;
}

.botao.ativo {
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
