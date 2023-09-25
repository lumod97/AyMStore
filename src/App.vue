<template>
  <div class="container-fluid m-0 p-0 w-100 h-100">
    <div class="container-fluid" :class="$route.name=='home' ? 'login-background d-flex justify-content-center align-items-center' : ''">
        <!-- Barra de navegación -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="$route.name!='home'">
          <a class="navbar-brand" href="#">Mi Tienda</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link"
                  >Ventas</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/productos" class="nav-link">Productos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link"
                  >Acerca de</router-link
                >
              </li>
              <!-- Agrega más enlaces de navegación aquí -->
            </ul>
          </div>
        </nav>
        <!-- Área de contenido -->
          <router-view></router-view>
    </div>
    <!-- <div class="container-fluid d-flex justify-content-center align-items-center login-background" v-else>

    <Login/>
    </div> -->

  </div>

</template>

<script>
import Login from '@/views/Login.vue'
export default {
  name: "Layout",
  components:{
    Login
  }
};
</script>
<style>
.cursor-pointer {
  cursor: pointer;
}
@font-face {
  font-family: "CaviarDreams";
  src: url('./assets/fonts/CaviarDreams.ttf'),
  url('./assets/fonts/CaviarDreams_Bold.ttf'),
  url('./assets/fonts/CaviarDreams_BoldItalic.ttf'),
  url('./assets/fonts/CaviarDreams_Italic.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LouisGeorgeCafe';
  src: url('@/assets/fonts/LouisGeorgeCafe.ttf'),
  url('@/assets/fonts/LouisGeorgeCafeBold.ttf'),
  url('@/assets/fonts/LouisGeorgeCafeBoldItalic.ttf'),
  url('@/assets/fonts/LouisGeorgeCafeItalic.ttf'),
  url('@/assets/fonts/LouisGeorgeCafeLightItalic.ttf'),
  url('@/assets/fonts/LouisGeorgeCafeLight.ttf'),
  url('@/assets/fonts/LouisGeorgeCafe.ttf');
}

@font-face {
  font-family: 'Millionaire';
  src: url('@/assets/fonts/Millionaire.otf');
}

.login-background {
  background-image: url("https://c4.wallpaperflare.com/wallpaper/471/768/845/blurred-minimalism-gradient-wallpaper-preview.jpg"); /* Cambia esto a la ruta de tu imagen de fondo */
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
