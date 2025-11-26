<template>
     <div>
        <div class="search-container">
            <input
                type="text"
                placeholder="Busque por marca ou modelo"
                class="search-input"/>
            <Search class="search-icon" :size="20"/>
        </div>   
    </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
</script>

<style scoped>
.search-container{
    position: relative
}

.search-input {
    height: 45px;
    width: 300px;
    border-radius: 5px;
    padding-left: 10px;
    border: 1px solid 
}

.search-icon {
    position: absolute;
    right: 10px;
    top: 50%; 
    transform: translateY(-50%);
    pointer-events: none; 
}
</style>

