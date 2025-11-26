<script setup>
import SearchCard from '../components/SearchCard.vue';
</script>

<template>

    <div class="container">

        <div class="header">
            <h1>Carros usados e seminovos em todo o Brasil</h1>
        </div>
        <div>
            <SearchCard/>
        </div>

    </div>

</template>


<style scoped> 


.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color:#1f1f2c;
}

.header {
   margin: 30px;
}

h1 {
    font-size: 1.3em;
    color: var(--text);
}
</style>