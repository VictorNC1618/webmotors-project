<template>
  <header class="site-header">
    <div class="left-section">
      <img class="logo" src="../assets/webmotors-logo.png" alt="Logo">
      <h1>Webmotors</h1>
    </div>
    
    <nav class="center-section">
      <a href="#">Comprar</a>
      <a href="#">Vender</a>
      <a href="#">Assinar</a>
      <a href="#">Serviços</a>
      <a href="#">Notícias WM1</a>
      <a href="#">Ajuda</a>
      <a href="#" class="concurso-link">Concurso Coala <span class="badge">PARTICIPE</span></a>
    </nav>
    
    <div class="right-section">
      <a href="#" class="icon-link">
        <User :size="20" :stroke-width="1.5" />
        <span>Entrar</span>
      </a>
      <a href="#" class="icon-link">
        <Heart :size="20" :stroke-width="1.5" />
      </a>
      <a href="#" class="icon-link">
        <MessageCircle :size="20" :stroke-width="1.5" />
      </a>
    </div>
  </header>
</template>

<script setup>
import { User, Heart, MessageCircle } from 'lucide-vue-next';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.site-header {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0 20px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.logo {
  height: 30px;
  width: auto;
}

h1 {
  font-size: 25px;
  margin: 0;
  font-weight: 600;
}

.center-section {
  display: flex;
  gap: 24px;
  align-items: center;
  flex: 2;
  justify-content: center;
}

.center-section a {
  text-decoration: none;
  color: #2e2d37;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
  white-space: nowrap;
}

.center-section a:hover {
  color: #f3123c;
}

.concurso-link {
    display: flex;
    align-items: center;
    gap: 4px;
}

.badge {
    align-items: center;
    background: #ffffff;
    color: #ff0000;
    font-size: 8px;
    padding: 1px 10px;
    border-radius: 12px;
    border: 1px solid #ff0000;
    border-color: #f3123c;
    font-weight: 800;
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}


.icon-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  color: #2e2d37;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
  height: 24px;
}

.icon-link:hover {
  color: #f3123c;
}

.icon-link:hover svg {
  stroke: #f3123c;
}
</style>
