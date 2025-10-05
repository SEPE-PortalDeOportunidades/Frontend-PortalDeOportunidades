<script>

import GlobalInput from "@/components/Global/GlobalInput.vue"
import GlobalButton from "@/components/Global/GlobalButton.vue"
import { ref } from "vue"

const matricula = ref("");
const senha = ref("");

const dados = ref([]);

const enviarFormulario = () => {
  dados.value.push({
    matricula: matricula.value,
    senha: senha.value,
  });

  console.log("Dados salvos:", dados.value);
  console.log("Matricula:", matricula.value);
  console.log("Senha:", senha.value);
};

</script>

<template>
  <div class="background">
    <div class="container">

      <form @submit.prevent="handleLogin">
        <div>
          <h1>Portal de Oportunidades</h1>
          <label for="GlobalInput">Matricula*</label>
          <GlobalInput v-model="email" placeholder="" type="email" class="mb-4 input" />


        </div>
        <div>
          <label for="GlobalInput">Senha*</label>
          <GlobalInput v-model="senha" placeholder="" type="password" class="mb-4 input" />
        </div>
        <p>Esqueceu a senha? <a href="#">Clique Aqui</a></p>
        <GlobalButton label="Entrar" type="submit" @click="enviarFormulario" />
      </form>
      <p class="ifc">Copyright © {{ new Date().getFullYear() }} <br>IFC - Campus Araquari</p>

    </div>
    </div>


</template>

<style scoped>
:global(html, body) {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; 
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;  
  height: 100vh;
  overflow: hidden;
}

.background::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('@/assets/images/background-login.png');
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    z-index: 0;
    overflow: hidden;

}

.container {
  position: relative;
  z-index: 1;
  background-color: white;
  width: 400px;
  padding: 150px 60px 100px 90px;
  margin: 100px 100px 100px 208px;
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

h1 {
    position: relative;
    bottom: 30px;
}

label {
    margin: 5px;


}


p {
  position: relative;
  bottom: 20px;

}

button {
    position: relative;
    left: 15%;
    top: 25px;


}

.ifc {
    display: flex;
    justify-content: center;
    right: 45px;
    top: 50px;
    text-align: center;
}
</style>
