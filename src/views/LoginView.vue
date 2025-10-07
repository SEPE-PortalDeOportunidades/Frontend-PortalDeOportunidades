<script setup>
//importing components
import GlobalInput from "@/components/Global/GlobalInput.vue"
import GlobalButton from "@/components/Global/GlobalButton.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useFakeDataStore } from '@/stores/fakeDataStore.js'

// Usando router e store
const router = useRouter()
const fakeDataStore = useFakeDataStore()

//variaveis para o login
const matricula = ref("");
const senha = ref("");
const errorMessage = ref("");

//function to send the login and check with the database
const enviarFormulario = () => {
  // Validar login usando o store
  const usuario = fakeDataStore.validarLogin(matricula.value, senha.value);

  if (usuario) {
    console.log("Login bem-sucedido:", usuario);
    // Redirecionar baseado no tipo de usuário
    if (usuario.tipo === "estudante") {
      router.push("/StudentScreen");
    } else if (usuario.tipo === "professor") {
      router.push("/TeacherScreen");
    }
  } else {
    errorMessage.value = "Matrícula ou senha incorretos!";
    console.log("Falha no login");
  }
};

</script>

<template>
<!-- login form -->
  <div class="background">
    <div class="container">
      <form @submit.prevent="handleLogin">
        <div>
          <h1>Portal de Oportunidades</h1>
          <label for="GlobalInput">Matricula*</label>
          <GlobalInput v-model="matricula" placeholder="" type="number" class="mb-4 input" />
        </div>
        <div>
          <label for="GlobalInput">Senha*</label>
          <GlobalInput v-model="senha" placeholder="" type="password" class="mb-4 input" />
        </div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p>Esqueceu a senha? <RouterLink to="/forgot-password">Clique Aqui</RouterLink>
        </p>
        <RouterLink to="/StudentScreen">
          <GlobalButton class="btn" label="Entrar" type="submit" @click="enviarFormulario" />
        </RouterLink>
      </form>
      <p class="ifc">Copyright © {{ new Date().getFullYear() }} <br>IFC - Campus Araquari</p>
    </div>
  </div>


</template>

<style scoped>
/* remove scroll bar horizontal */
:global(html, body) {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
/* login background and container customization and remove scroll bar horizontal */
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
  right: -480px;
  top: 20px;
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

.btn {
  position: relative;
  left: 20%;
  top: 25px;


}

.ifc {
  display: flex;
  justify-content: center;
  right: 45px;
  top: 50px;
  text-align: center;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}
</style>
