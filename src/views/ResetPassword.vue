<script setup>
import GlobalInput from "@/components/Global/GlobalInput.vue"
import GlobalButton from "@/components/Global/GlobalButton.vue"
import { ref } from "vue"
const text = ref('')
</script>

<template>
  <div class="background">
    <div class="container">
      <h1>Mudança de senha</h1>
      <label for="GlobalInput" class="label-senha" >Nova senha</label>
      <GlobalInput v-model="password" placeholder="Insira nova senha" type="password" class="mb-4 input" />
      <label for="GlobalInput" class="label-nova">Repita a nova senha</label>
      <GlobalInput v-model="password" placeholder="Insira novamente a senha nova" type="password" class="mb-4 input" />
      <router-link to="/Login"><GlobalButton label="Enviar" type="submit" @click="verificarEmail" /></router-link>

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

p {
  color: #525151;
  text-align: center;
  width: 300px;
  font-weight: bold;
  margin: 0 auto 30px auto;
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

.label-nova {
    padding-right: 250px;
    position: relative;
    bottom: 5px;
}

.label-senha {
    position: relative;
    right: 155px;
    bottom: 5px;
}



</style>