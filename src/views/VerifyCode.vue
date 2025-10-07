<script setup>
import GlobalButton from "@/components/Global/GlobalButton.vue"
import { ref } from "vue"
const text = ref('')

//array of digits
const code = ref(["", "", "", "", "", ""])


// function to automate input and go to the next input
function handleInput(e, idx) {
  const val = e.target.value
  if (/^\d?$/.test(val)) {
    code.value[idx] = val
    if (val && idx < code.value.length - 1) {
      const next = e.target.parentNode.querySelectorAll('input')[idx + 1]
      next?.focus()
    }
  }
}

// function to return to the previous input when deleting
function handleKeydown(e, idx) {
  if (
    e.key === "Backspace" &&
    code.value[idx] === "" &&
    idx > 0
  ) {
    const prev = e.target.parentNode.querySelectorAll('input')[idx - 1]
    prev?.focus()
  }
}
</script>

<template>
  <div class="background">
    <div class="container">
      <h1>Verifique seu email</h1>
      <p class="id">Verifique o codigo de de recuperação de senha para que posso alterar sua senha</p>
      <div class="code-inputs">

        <!-- verification code input -->
        <input v-for="(digit, idx) in code" :key="idx" maxlength="1" type="text" inputmode="numeric" class="code-box"
          v-model="code[idx]" @input="handleInput($event, idx)" @keydown="handleKeydown($event, idx)" />
      </div>
      <p class="send">Não chegou o codigo? <button class="resend" @click="reenviarCodigo">Reenviar Codigo </button></p>
      <router-link to="/reset-password">
        <GlobalButton label="Enviar" type="submit" @click="codigo" />
      </router-link>
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

/* forgertPassword container and background style */

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
  background-color: rgba(255, 255, 255, 1);
  padding: 40px 40px 70px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

h1 {
  margin-bottom: 30px;
  color: #333;
}

p.id {
  color: #525151;
  text-align: center;
  width: 300px;
  font-weight: bold;
  margin: 0 auto -10px auto;

}

:deep(.input) {
  font-size: 15px;
  width: 400px;
  margin: 0 0 20px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;


}

:deep(.globalbutton) {
  margin-top: 40px;
}

.code-inputs {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.code-box {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #f1f1f1;
  border: none;
  font-size: 22px;
  text-align: center;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
  line-height: 40px;
  padding: 0;
  margin-bottom: 0;
}

p.send {
  text-align: start;
  padding-left: 30px;

}

.resend {
  background: none;
  border: none;
  color: blue;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
  padding: 0;
}
</style>