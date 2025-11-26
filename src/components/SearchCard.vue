<template>
    <div class="searchcard-container">
        <div class="buttons-container">
            
                <button class="buttons"
                :class="{active: active === 'carros'}"
                @click="active = 'carros'"
                >
                Carros</button>
            
            
                <button 
                class="buttons"
                :class="{active: active === 'motos'}"
                @click="active = 'motos'"
                >
                Motos</button>
            
        </div>
    </div>

</template>
<script setup>
import {ref} from 'vue'

const active = ref('carros')
</script>


<style scoped>
.searchcard-container{
    width: 35%;
    max-width: 420px;
    min-width: 220px;
    height: 950px;
    display: flex;
    justify-content: center;
    background-color: var(--light);
    
}

h1{
    color: blue;
}

.buttons-container{
    background-color: rgb(237, 236, 242);
    width: 100%;
    max-width: 255px;
    display: flex;
    height: 40px;
    justify-content:space-between;
    align-items: center;
    margin-top: 15px;
    border-radius: 40px;
}


.buttons{
    background-color: transparent;
    flex: 1 1 0;
    min-width: 0;
    height: 35px;
    border-radius: 20px;
    color: black

}

.buttons.active{
    background-color: #232226;
    color: white
}

.buttons:active{
    transform: translateY(1px);
}


.buttons:focus{
    outline: none; 
    box-shadow: 0 0 0 4px rgba(99,102,241,0.12); 
}


.buttons:hover{
    background: #232226;
}


</style>