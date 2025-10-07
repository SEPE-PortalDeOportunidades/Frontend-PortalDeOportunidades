<script setup>
import { ref } from "vue";
import Notification from "@/components/Notification.vue"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBell, faUser);

const showNotifications = ref(false);


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
      <img src="/src/assets/images/logoIFC.png" alt="LOGO IFC Araquari" />
    </div>

    <div class="infos">
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'bell']"
        @click="toggleNotifications"
      />

      <p>
        Nome do aluno
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
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 40px 1px 40px;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
}



.infos {
  padding-right: 15px;
  display: flex;
  align-items: center;
}

.icon {
  border: 1px solid black;
  padding: 11px;
  border-radius: 8px;
  margin-right: 10px;
  transition: 0.2s;
  box-shadow: 0px 2px 2px gray;
  cursor: pointer;
}

.icon:hover {
  transform: translateY(-2px);
  box-shadow: 0px 3px 3px gray;
}

p {
  background-color: rgb(211, 208, 208);
  padding: 12px;
  border-radius: 8px;
  margin: 10px 10px 10px 0;
  transition: 0.2s ease;
}

p span {
  background-color: gray;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
}

p:hover {
  transform: translateY(-5px);
  box-shadow: 0px 2px 2px gray;
}
</style>
