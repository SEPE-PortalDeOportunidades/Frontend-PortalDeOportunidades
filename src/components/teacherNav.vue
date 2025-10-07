<script setup>
import { ref } from "vue";
import Notification from "@/components/Notification.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBell, faUser);

const showNotifications = ref(false);
const notifications = ref([
  "Nenhuma notificação no  momento"
]);

function toggleNotifications() {
  showNotifications.value = !showNotifications.value;
}
</script>

<template>
  <header>
    <div class="img">
      <img src="/src/assets/images/logoIFC.png" alt="LOGO IFC ARaQUARI" />
    </div>
    <div class="infos">
      <router-link  class="btn" to="/OpportunityRegistration">Nova oportunidade</router-link>
      <font-awesome-icon class="icon" :icon="['fas', 'bell']" @click="toggleNotifications" />
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
:root,
:global(body) {
  overflow-x: hidden;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 40px 0 40px;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
}


.infos {
  padding-right: 15px;
  display: flex;
  align-items: center;
}

.btn {
  background-color: black;
  color: white;
  width: 150px;
  border-radius: 8px;
  padding: 10px 15px 10px 20px;
  margin-right: 25px;
  transition: 0.2s ease;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  justify-content: center;
  display: flex;
  text-align: center;
}

.btn:hover {
  transform: translateY(-2px);
  background-color: rgb(44, 44, 44);
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
  box-shadow: 0px 2px 2px gray;
  transform: translateY(-2px);
}
</style>
