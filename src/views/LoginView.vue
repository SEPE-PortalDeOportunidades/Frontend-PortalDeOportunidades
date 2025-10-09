<script setup>
// Importando componentes
import GlobalInput from "@/components/Global/GlobalInput.vue"
import GlobalButton from "@/components/Global/GlobalButton.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useFakeDataStore } from "@/stores/fakeDataStore.js"

// Router e Store
const router = useRouter()
const fakeDataStore = useFakeDataStore()

const matricula = ref("")
const senha = ref("")
const errorMessage = ref("")

function fazerLogin() {
  const m = matricula.value.trim()
  const s = senha.value

  const todos = [...fakeDataStore.professores, ...fakeDataStore.usuarios]
  const usuario = todos.find(x => x.matricula === m && x.senha === s)

  if (!usuario) {
    errorMessage.value = "Matrícula ou senha incorretos!"
    return
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario))
  const isProfessor = (usuario.tipo || "").toLowerCase().includes("prof")
  router.push(isProfessor ? "/teacherScreen" : "/studentScreen")
}

</script>

<template>
  <!-- login form -->
  <div class="background">
    <div class="container">
      <form @submit.prevent="fazerLogin">
        <div>
          <h1>Portal de Oportunidades</h1>
          <label for="GlobalInput" id="matricula">Matrícula*</label>
          <GlobalInput
            v-model="matricula"
            placeholder=""
            type="string"
            class="mb-4 input"
          />
        </div>

        <div class="conj">
          <label for="GlobalInput">Senha*</label>
          <GlobalInput
            v-model="senha"
            placeholder=""
            type="password"
            class="p-4 input"
          />
        </div>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <p>
          Esqueceu a senha?
          <RouterLink to="/forgot-password">Clique Aqui</RouterLink>
        </p>

        <GlobalButton
          class="btn"
          label="Entrar"
          type="submit"
        />
      </form>

      <p class="ifc">
        Copyright © {{ new Date().getFullYear() }} <br />
        IFC - Campus Araquari
      </p>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}


.background::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('@/assets/images/background-login.png') center/cover no-repeat;
  filter: blur(4px);
  transform: scale(1.05); 
  z-index: -1;
}


body,
.background {
  display: flex;
  justify-content: center;
  align-items: center;
}


.container {
  position: relative;
  z-index: 1;
  background-color: white;
  width: 400px;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

h1 {
  margin-bottom: 20px;
}


p {
  margin-bottom: 15px;
}

.btn {
  display: block;
  margin: 25px auto 0;
  list-style: none;
  text-decoration: none;
}

.ifc {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  text-align: center;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

.conj{
  display: flex;
  flex-direction: column;
}
</style>

