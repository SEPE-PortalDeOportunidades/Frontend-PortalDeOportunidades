<script setup>
import { ref, computed } from "vue";
// created variables for modal: 

const showModal = ref(false);
const toggleModal = () => (showModal.value = !showModal.value);

const props = defineProps({
    tipo: { type: String, default: "Outros" },
});

// color palette for cards
const cores = computed(() => {
    switch (props.tipo.toLowerCase()) {
        case "estágio":
            return { card: "#ffffff", tipo: "#1e8c4a", novo: "#f0a500" };
        case "edital":
            return { card: "#ffffff", tipo: "#004aad", novo: "#3ab0ff" };
        case "evento":
            return { card: "#ffffff", tipo: "#e67e22", novo: "#27ae60" };
        default:
            return { card: "#ffffff", tipo: "#7f8c8d", novo: "#bdc3c7" };
    }
});
</script>

<template>
    <!-- CARD -->
    <div class="card" :style="{ backgroundColor: cores.card }">
        <div class="topo">
            <span class="tipo" :style="{ backgroundColor: cores.tipo }">
                <slot name="tipo">Tipo</slot>
            </span>
            <span class="novo" :style="{ backgroundColor: cores.novo }">
                <slot name="novo">Novo</slot>
            </span>
        </div>

        <h1 class="titulo">
            <slot name="titulo">Título do Card</slot>
        </h1>
        <p class="descricao">
            <slot name="descricao">Descrição resumida</slot>
        </p>

        <div class="info">
            <p><font-awesome-icon :icon="['fas', 'calendar']" />
                <slot name="data">Prazo</slot>
            </p>
            <p><font-awesome-icon :icon="['fas', 'user']" />
                <slot name="professor">Responsável</slot>
            </p>
            <p><font-awesome-icon :icon="['fas', 'school']" />
                <slot name="curso">Curso</slot>
            </p>
            <p><font-awesome-icon :icon="['fas', 'map']" />
                <slot name="local">Local: IFC ARAQUARI</slot>
            </p>
        </div>

        <div class="footer">
            <button class="btn-verde" @click="toggleModal">
                <slot name="btnDetalhes">Ver detalhes</slot>
            </button>
            <p class="status">
                <slot name="status">Inscrições abertas</slot>
            </p>
        </div>
    </div>

    <!-- MODAL -->
    <transition name="fade">
        <div v-if="showModal" class="overlay" @click.self="toggleModal">
            <div class="modal">
                <button class="close-btn" @click="toggleModal">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>

                <div class="tags">
                    <span class="tipo" :style="{ backgroundColor: cores.tipo }">
                        <slot name="tipo">Tipo</slot>
                    </span>
                    <span class="status">
                        <slot name="status">Em aberto</slot>
                    </span>
                </div>

                <h2>
                    <slot name="titulo">Título do Card</slot>
                </h2>
                <p class="sub">
                    <slot name="descricao">Descrição resumida</slot>
                </p>

                <h3>Descrição completa</h3>
                <p class="descricao">
                    <slot name="descricaoCompleta">
                        Informar descrição completa do evento, edital ou estágio aqui.
                    </slot>
                </p>

                <hr />

                <div class="infos">
                    <div class="col">
                        <h4>Informações principais</h4>
                        <ul>
                            <li><font-awesome-icon :icon="['fas', 'calendar']" />
                                <slot name="data">Prazo</slot>
                            </li>
                            <li><font-awesome-icon :icon="['fas', 'user']" />
                                <slot name="professor">Responsável</slot>
                            </li>
                            <li><font-awesome-icon :icon="['fas', 'school']" />
                                <slot name="curso">Curso</slot>
                            </li>
                            <li><font-awesome-icon :icon="['fas', 'map']" />
                                <slot name="local">Local</slot>
                            </li>
                            <li><font-awesome-icon :icon="['fas', 'users']" />
                                <slot name="vagas">Vagas: N/A</slot>
                            </li>

                        </ul>
                    </div>

                    <div class="col">
                        <h4>Requisitos</h4>
                        <ul>
                            <li><font-awesome-icon :icon="['fas', 'check']" />
                                <slot name="requisitos">Requisitos não informados.</slot>
                            </li>
                        </ul>

                        <h4>Benefícios</h4>
                        <ul>
                            <li><font-awesome-icon :icon="['fas', 'money-bill']" />
                                <slot name="beneficios">Benefícios não informados.</slot>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="botoes">
                    <router-link class="btn-verde" to="/ApplyOpportunity">
                        <slot name="btnInscrever">Fazer inscrição</slot>
                    </router-link>


                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
/* ====== CARD ====== */
.card {
    border-radius: 14px;
    padding: 28px;
    width: 100%;
    max-width: 460px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.07);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    background: #fff;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

/* ====== TOPO ====== */
.topo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.tipo {
    font-size: 12px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 6px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
}

.novo {
    font-size: 11px;
    font-weight: 600;
    padding: 5px 8px;
    border-radius: 6px;
    color: #fff;
}


.titulo {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #222;
}

.descricao {
    font-size: 15px;
    color: #555;
    margin-bottom: 18px;
    line-height: 1.5;
}

.info p {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #444;
    margin-bottom: 6px;
}

.footer {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.btn-verde {
    background-color: #1e8c4a;
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s ease;
}

.btn-verde:hover {
    background-color: #166b38;
}

.status {
    font-size: 13px;
    color: #1e8c4a;
}


.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.modal {
    background: #fff;
    border-radius: 14px;
    padding: 35px;
    width: 820px;
    max-width: 92%;
    position: relative;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    animation: popIn 0.3s ease;
}

@keyframes popIn {
    from {
        transform: scale(0.95);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.close-btn {
    position: absolute;
    top: 18px;
    right: 18px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #444;
}

.tags {
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
}

h2 {
    font-size: 22px;
    margin-bottom: 6px;
}

.sub {
    font-size: 15px;
    color: #555;
    margin-bottom: 18px;
}

hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
}

.infos {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.col h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1e8c4a;
}

.col ul {
    list-style: none;
    padding: 0;
    font-size: 14px;
    color: #333;
}

.col li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}

.botoes {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 20px;
}

.btn-branco {
    background: white;
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
}

/* ====== TRANSIÇÃO ====== */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
