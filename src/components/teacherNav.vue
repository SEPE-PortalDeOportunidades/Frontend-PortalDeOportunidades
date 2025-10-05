<script setup>
</script>
<template>
    <header>
        <div class="img">
        <img src="/src/assets/images/logoIFC.png" alt="LOGO IFC ARaQUARI">
        </div>
        <div class="infos">
        <button>Nova oportunidade</button>
        <font-awesome-icon class="icon" :icon="['fas', 'bell']" />
        <font-awesome-icon class="icon" :icon="['fas', 'user']" />

        </div>
    </header>

</template>
<style scoped>
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 0 20px;
    border-bottom: 1px solid #000;
    
    
}


.infos {
    padding-right: 15px;
    display: flex;
    align-items: center;
}

button {
    background-color: black;
    color: white;
    width: 150px;
    border-radius: 8px;
    padding: 10px 0px;
    margin-right: 25px;
    transition: 0.2s ease;
}
button:hover {
  transform: translateY(-2px);
}

.icon {
    border: 1px solid black;
    padding: 11px;
    border-radius: 8px;
    margin-right: 10px;
      transition: 0.2s;
          box-shadow: 0px 2px 2px gray;
}

.icon:hover{
    box-shadow: 0px 2px 2px gray;
    transform: translateY(-2px);
}
</style>