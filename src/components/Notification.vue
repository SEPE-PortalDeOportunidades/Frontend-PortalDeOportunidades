<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  notifications: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(["close"]);
</script>

<template>
  <transition name="slide-fade">
    <div v-if="visible" class="notificacao">
      <div class="painel">
        <button class="fechar" @click="emit('close')">×</button>

        <div class="conteudo">
          <div v-if="notifications.length === 0" class="notificacoes">
            <i class="fa-regular fa-bell fa-3x"></i>
            <p>Nenhuma Notificação Recente</p>
          </div>

          <ul v-else>
            <li v-for="(notif, index) in notifications" :key="index">
              {{ notif }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.notificacao {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 50;
}

.painel {
  background: #fff;
  width: 350px;
  height: 100%;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.fechar {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
}

.conteudo {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.noficacoes {
  color: #888;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.35s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>


<!-- <script setup>
adicionar nas paginas que vao usar o componente

import { ref } from "vue";
import Notification from "@/components/Notification.vue";

const showNotifications = ref(false);
const notifications = ref([]);

function toggleNotifications() {
  showNotifications.value = !showNotifications.value;
}
</script>

<template>
  <div>
    <button @click="toggleNotifications" class="i-sino">
    colocar icone aqui dps
    </button>
    
    <Notification
      :visible="showNotifications"
      :notifications="notifications"
      @close="showNotifications = false"
    />
  </div>
</template>

<style scoped>
.i-sino {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}
</style> -->