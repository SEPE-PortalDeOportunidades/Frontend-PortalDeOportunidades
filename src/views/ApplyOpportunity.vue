<script setup>
import { ref, computed } from "vue"
import { useFakeDataStore } from '@/stores/fakeDataStore.js'

// Usando o store
const fakeDataStore = useFakeDataStore()

const motivacao = ref("")
const arquivo = ref(null)

const contador = computed(() => motivacao.value.length)

const selecionarArquivo = (e) => {
    arquivo.value = e.target.files[0]
}

const enviarFormulario = () => {
    console.log({
        motivacao: motivacao.value,
        arquivo: arquivo.value?.name || "nenhum arquivo",
    })
}

const cancelar = () => {
    motivacao.value = ""
    arquivo.value = null
}
</script>

<template>
    <!-- opportunity application form -->
    <div class="container">
        <div class="form-box">
            <label>Motivação*<br />
                <textarea v-model="motivacao" placeholder="Descreva sua motivação para se inscrever..."
                    maxlength="1000"></textarea>
            </label>

            <p class="contador">Mínimo de 100 caracteres ({{ contador }}/1000)</p>

            <div class="upload">
                <i class="fa-solid fa-download"></i>
                <p>
                    Anexe documentos complementares (opcional)<br />
                    <small>Histórico, currículo, certificados, etc.</small>
                </p>
                <label class="upload-btn">
                    <input type="file" @change="selecionarArquivo" hidden />
                    Selecionar arquivos
                </label>
                <p v-if="arquivo" class="arquivo-nome">{{ arquivo.name }}</p>
            </div>

            <div class="botoes">
                <router-link to="/StudentScreen">
                    <button class="enviar">Enviar inscrição</button>
                </router-link>

                <router-link to="/StudentScreen">
                    <button class="cancelar">Cancelar</button>
                </router-link>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* container style */
.container {
    display: flex;
    justify-content: center;
    margin: 40px 0;
}

.form-box {
    background-color: white;
    border-radius: 15px;
    width: 800px;
    padding: 40px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

label {
    font-size: 18px;
    color: #000;
    margin: 25px 0 10px 0;
}

.row {
    display: flex;
    justify-content: space-between;
    gap: 50px;
}

label {
    display: block;
    width: 100%;
    margin-top: 15px;
}

input,
select,
textarea {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f2f2f2;
    font-size: 15px;
}

textarea {
    min-height: 100px;
    resize: none;
}

.upload {
    text-align: center;
    border: 2px dashed #ccc;
    border-radius: 10px;
    padding: 25px;
    margin-top: 25px;
    background-color: #fafafa;
}

.upload i {
    font-size: 22px;
    color: #666;
}

.upload-btn {
    display: inline-block;
    background-color: #ddd;
    color: #333;
    padding: 8px 16px;
    border-radius: 6px;
    margin-top: 10px;
    cursor: pointer;
}

.upload-btn:hover {
    background-color: #ccc;
}

.botoes {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

button {
    padding: 12px 35px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: 0.2s;
}

.enviar {
    background-color: #3c6e47;
    color: white;
}

.enviar:hover {
    background-color: #2b5234;
}

.cancelar {
    background-color: #f2f2f2;
    color: #000;
}

.cancelar:hover {
    background-color: #e2e2e2;
}

.contador {
    margin-top: 5px;
    text-align: right;
    font-size: 13px;
    color: #666;
}

.arquivo-nome {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
}

</style>
