<script setup>
import { ref, onMounted } from "vue";
import Notification from "@/components/Notification.vue"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBell, faUser);

const showNotifications = ref(false);


const usuario = ref({ nome: "Aluno" }); 

onMounted(() => {
  const usuarioSalvo = localStorage.getItem("usuarioLogado");
  if (usuarioSalvo) {
    usuario.value = JSON.parse(usuarioSalvo);
  }
});

// Notificações
const notifications = ref([
  "Nenhuma notificação no momento"
]);

function toggleNotifications() {
  showNotifications.value = !showNotifications.value;
}
</script>

<template>
  <header>
    <div class="img">
      <img src="/src/assets/images/logoIFC (1).png" alt="LOGO IFC Araquari" />
    </div>

    <div class="infos">
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'bell']"
        @click="toggleNotifications"
      />

      <p>
        {{ usuario.nome }}
        <span>Aluno</span>
      </p>

      <font-awesome-icon class="icon" :icon="['fas', 'user']" />
    </div>

    <Notification
      :visible="showNotifications"
      :notifications="notifications"
      @close="showNotifications = false"
    />
  </header>
</template>

<style scoped>
img {
  width: 120px;
  height: 60px;
}
/* Header principal */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  border-bottom: 1px solid #000;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

/* Container de ícones e informações do usuário */
.infos {
  display: flex;
  align-items: center;
  gap: 15px; /* espaço consistente entre itens */
}

/* Ícones (sino, usuário) */
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.icon:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
}

/* Caixa de nome do usuário */
p {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: rgb(211, 208, 208);
  font-size: 14px;
  transition: transform 0.2s, box-shadow 0.2s;
}

p:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Nome do usuário em destaque */
p span {
  background-color: gray;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 500;
}


</style>
