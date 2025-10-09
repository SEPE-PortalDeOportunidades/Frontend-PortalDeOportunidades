<script setup>
import { ref, onMounted } from "vue";
import Notification from "@/components/Notification.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBell, faUser);

const showNotifications = ref(false);

const usuario = ref({ nome: "Aluno" });
const isEditing = ref(false);
const editUsuario = ref({});

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

function startEdit() {
  editUsuario.value = { ...usuario.value };
  isEditing.value = true;
}

function saveEdit() {
  usuario.value = { ...editUsuario.value };
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario.value));
  isEditing.value = false;
}

function cancelEdit() {
  isEditing.value = false;
}
</script>
<template>
  
  <div class="atAll">
    <div class="userInfos">
      <div class="userIcon">
        <div class="bordaUser" style="display: flex;justify-content: center; border: 2px solid blue; padding: 30px; border-radius: 100%;">
          <font-awesome-icon style="font-size: 50px;" class="icon" :icon="['fas', 'user']" />
        </div>
        <span>{{ usuario.nome }}</span>
        <span>{{ usuario.matricula }}</span>
      </div>
      <div class="userDetails">
        <div v-if="!isEditing" class="displayMode">
          <h3>Informações do Usuário</h3>
          <p><strong>Nome:</strong> {{ usuario.nome }}</p>
          <p><strong>Matrícula:</strong> {{ usuario.matricula }}</p>
          <p><strong>Email:</strong> {{ usuario.email }}</p>
          <p><strong>Curso:</strong> {{ usuario.curso }}</p>
          <p v-if="usuario.ano"><strong>Ano:</strong> {{ usuario.ano }}</p>
          <p><strong>Tipo:</strong> {{ usuario.tipo }}</p>
          <button @click="startEdit" class="editBtn">Editar</button>
        </div>
        <div v-else class="editMode">
          <h3>Editar Informações</h3>
          <div class="formGroup">
            <label for="nome">Nome:</label>
            <input id="nome" v-model="editUsuario.nome" type="text" />
          </div>
          <div class="formGroup">
            <label for="email">Email:</label>
            <input id="email" v-model="editUsuario.email" type="email" />
          </div>
          <div class="formGroup">
            <label for="curso">Curso:</label>
            <input id="curso" v-model="editUsuario.curso" type="text" />
          </div>
          <div v-if="editUsuario.ano" class="formGroup">
            <label for="ano">Ano:</label>
            <input id="ano" v-model="editUsuario.ano" type="text" />
          </div>
          <div class="buttons">
            <button @click="saveEdit" class="saveBtn">Salvar</button>
            <button @click="cancelEdit" class="cancelBtn">Cancelar</button>
          </div>
        </div>
      </div>
     </div>
   </div>
 </template>

<style scoped>
.atAll {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: #f5f7fa;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
}

/* ======= CONTAINER PRINCIPAL ======= */
.userInfos {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 100%;
  max-width: 700px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transition: all 0.3s ease;
}

.userInfos:hover {
  transform: translateY(-3px);
}

/* ======= PERFIL (ICON + INFOS) ======= */
.userIcon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
}

.bordaUser {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #007bff;
  padding: 25px;
  border-radius: 100%;
  background-color: #f0f4ff;
  transition: all 0.3s ease;
}

.bordaUser:hover {
  background-color: #e2e8ff;
  transform: scale(1.05);
}

.icon {
  font-size: 50px;
  color: #007bff;
}

.userIcon span {
  font-size: 16px;
  color: #444;
  font-weight: 500;
}

/* ======= DETALHES DO USUÁRIO ======= */
.userDetails {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.displayMode h3,
.editMode h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #222;
}

.displayMode p {
  font-size: 16px;
  margin: 8px 0;
  color: #555;
}

.displayMode strong {
  color: #000;
}

/* ======= FORMULÁRIO DE EDIÇÃO ======= */
.formGroup {
  margin-bottom: 18px;
}

.formGroup label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}

.formGroup input {
  width: 100%;
  padding: 10px 14px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
}

.formGroup input:focus {
  border-color: #007bff;
}

/* ======= BOTÕES ======= */
.buttons,
.displayMode {
  display: flex;
  flex-direction: column;
}

.editBtn,
.saveBtn,
.cancelBtn {
  width: 100%;
  max-width: 220px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;
  text-align: center;
}

.editBtn {
  background-color: #007bff;
  color: white;
}

.editBtn:hover {
  background-color: #0056b3;
}

.saveBtn {
  background-color: #28a745;
  color: white;
}

.saveBtn:hover {
  background-color: #218838;
}

.cancelBtn {
  background-color: #dc3545;
  color: white;
}

.cancelBtn:hover {
  background-color: #a71d2a;
}

/* ======= RESPONSIVIDADE ======= */
@media (max-width: 768px) {
  .userInfos {
    padding: 20px;
  }

  .bordaUser {
    padding: 20px;
  }

  .icon {
    font-size: 40px;
  }

  .displayMode p {
    font-size: 15px;
  }
}
</style>