<script setup>
import { ref } from "vue"

//variables for the form
const nome = ref("")
const cpf = ref("")
const telefone = ref("")
const email = ref("")
const nomeVaga = ref("")
const detalhesVaga = ref("")
const curso = ref("")
const prazo = ref("")
const requisitos = ref("")
//
const enviarFormulario = () => {
  const dados = {
    nome: nome.value,
    cpf: cpf.value,
    telefone: telefone.value,
    email: email.value,
    nomeVaga: nomeVaga.value,
    detalhesVaga: detalhesVaga.value,
    curso: curso.value,
    prazo: prazo.value,
    requisitos: requisitos.value,
  }
}
</script>

<template>
  <!-- opportunity registration form -->
  <div class="container">

    <div class="personal-infos">
      <h1>Dados Pessoais</h1>

      <label for="nome">Nome completo do servidor*<br>
        <input v-model="nome" type="text" id="nome" placeholder="Digite seu nome completo" />
      </label>

      <div class="row">
        <label for="cpf">CPF*<br>
          <input v-model="cpf" type="text" id="cpf" placeholder="000.000.000-00" />
        </label>

        <label for="telefone">Telefone*<br>
          <input v-model="telefone" type="text" id="telefone" placeholder="(00) 00000-0000" />
        </label>
      </div>

      <label for="email">E-mail*<br>
        <input v-model="email" type="email" id="email" placeholder="seu.email@gmail.com" />
      </label>
    </div>


    <div class="vaga">
      <h1>Detalhes sobre a vaga</h1>

      <label for="nomeVaga">Nome da vaga*<br>
        <input v-model="nomeVaga" type="text" id="nomeVaga" placeholder="Informe o nome da vaga" />
      </label>

      <label for="detalhesVaga">Detalhes sobre a vaga*<br>
        <textarea v-model="detalhesVaga" id="detalhesVaga" placeholder="Dê mais detalhes sobre a vaga"></textarea>
      </label>

      <div class="row">
        <label for="curso">Curso*<br>
          <input v-model="curso" type="text" id="curso" placeholder="Informe para qual curso essa vaga é destinada" />
        </label>

        <label for="prazo">Prazo*<br>
          <input v-model="prazo" type="date" id="prazo" />
        </label>
      </div>

      <label for="requisitos">Fale os requisitos da vaga*<br>
        <textarea v-model="requisitos" id="requisitos" placeholder="Faça uma breve descrição dos requisitos da vaga"></textarea>
      </label>
    </div>


    <div class="button-wrapper">
      <button type="button" @click="enviarFormulario">Enviar formulário</button>
    </div>
  </div>
</template>

<style scoped>
/* container style */
.container {
  border: 1px solid rgb(59, 59, 59);
  border-radius: 8px;
  padding: 35px 60px;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin-top: 106px;
}

h1 {
  font-size: 20px;
  margin-bottom: 25px;
  color: #333;
}

.row {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 15px;
}

label {
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: #222;
  width: 100%;
}

input,
textarea {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 12px 14px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f6f6f6;
  box-sizing: border-box;
}

.row label {
  flex: 1;
  min-width: 250px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

button {
  background-color: #004d04;
  color: white;
  font-size: 18px;
  padding: 12px 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #096900;
}
</style>
