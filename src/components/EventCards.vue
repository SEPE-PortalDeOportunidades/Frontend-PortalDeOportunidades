<script setup>
</script>
<template>
<div class="container">
    <h2 class="tipo"><slot name="tipo"></slot><br></h2>
    <h1 class="titulo"><slot name="titulo"></slot><br></h1>
    <p class="descricao"><slot name="descricao"></slot><br></p>
    <div class="infos">
    <p class="data"><font-awesome-icon :icon="['fas', 'calendar']" /> <slot name="data"></slot><br></p>
    <p class="professor"><font-awesome-icon :icon="['fas', 'user']" /><slot name="professor"></slot><br></p>
    </div>
    <p class="curso"><div class="cursoS">Curso:</div><slot name="curso"> </slot><br></p>
    <p class="requisitos"><div class="requistosS">Requisitos:</div> <slot name="requisitos"></slot><br></p>

    <button><font-awesome-icon :icon="['fas', 'info']"/>Inscrever-se Agora</button>
</div>
</template>
<style scoped>
.container {
    border: solid 1px rgb(189, 189, 189);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    width: 1000px;
    height: 358px;
    padding: 40px;
    margin: 10px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.container:hover {
    transform: scale(1.008);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
}

.tipo {
    font-size: 15px;
    font-weight: lighter;
}

.titulo {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: lighter;
    padding-bottom: 10px;
    position: relative;
    bottom: 10px;   
}

.descricao {
    font-size: 18px;
    font-weight: lighter;
    padding-top: 10px; 
    opacity: 50%;
}

.infos {
    display: flex;
    gap: 40px;
}

.cursoS, .requistosS {
    font-weight: bold;
}

button {
    padding: 8px;
    border: none;
    background-color: rgb(0, 0, 0);
    border-radius: 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    background-color: rgb(30, 30, 30);
}


</style>