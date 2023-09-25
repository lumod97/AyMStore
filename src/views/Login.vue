<template>
  <div
    class="flip-card h-75 d-flex justify-content-center align-items-center col-xxl-3 col-xl-4 col-lg-6 col-md-8 col-sm-12"
    :class="{ flipped: !showLoginForm }"
  >
    <!-- Contenido del formulario de inicio de sesión -->
    <b-card class="h-100 flip-card-front shadow rounded p-5">
      <!-- Formulario de Inicio de Sesión -->
      <b-card-title class="mb-5">
        <h1 class="text-label">Iniciar Sesion</h1>
      </b-card-title>
      <b-form-group class="mb-3">
        <label for="">
          <h4 class="text-label">Usuario</h4>
        </label>
        <b-form-input
          v-model="loginUsername"
          type="text"
          required
          placeholder="Ingresa tu nombre de usuario o correo electrónico"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="">
          <h4 class="text-label">Contraseña</h4>
        </label>
        <b-form-input
          v-model="loginPassword"
          type="password"
          required
          placeholder="Ingresa tu contraseña"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button
          pill
          class="mt-3 btn-collapsible ps-2 btn-cprimary"
          variant="primary"
          @click="login"
        >
          <b-icon icon="box-arrow-in-right" animation="cylon" class="me-3" />
          Iniciar Sesión
        </b-button>
      </div>
      <p class="mt-3 text-center text-muted cursor-pointer">
        ¿No tienes una cuenta?
        <a @click="showLoginForm = !showLoginForm">Registrarse</a>
      </p>
    </b-card>
    <!-- Contenido del formulario de registro -->
    <b-card class="h-100 flip-card-back shadow rounded p-5">
      <b-card-title class="mb-5">
        <h1 class="text-label">Registro</h1>
      </b-card-title>
      <!-- Formulario de Registro -->
        <b-form-group class="mb-3">
          <label for="">
            <h4 class="text-label">Usuario</h4>
          </label>
          <b-form-input
            v-model="registerUsername"
            type="text"
            required
            placeholder="Elije un nombre de usuario"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-3">
          <label for="">
            <h4 class="text-label">Correo Electronico</h4>
          </label>
          <b-form-input
            v-model="registerEmail"
            type="email"
            required
            placeholder="Ingresa tu correo electrónico"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-3">
          <label for="">
            <h4 class="text-label">Contraseña</h4>
          </label>
          <b-form-input
            v-model="registerPassword"
            type="password"
            required
            placeholder="Elije una contraseña"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <label for="">
            <h4 class="text-label">Confirma tu contraseña</h4>
          </label>
          <b-form-input
            v-model="registerPassword"
            type="password"
            required
            placeholder="Elije una contraseña"
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-end">
          <b-button
            pill
            class="mt-3 btn-collapsible ps-2 btn-cprimary"
            variant="success"
            @click="register"
          >
            <b-icon icon="box-arrow-in-right" animation="cylon" class="me-3" />
            Registrate
          </b-button>
        </div>
      <p class="mt-3 text-center text-muted cursor-pointer">
        ¿Ya tienes una cuenta?
        <a @click="showLoginForm = true">Iniciar Sesión</a>
      </p>
    </b-card>
  </div>
</template>
<script>
import axios from "@/config/axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      showLoginForm: true,
      loginUsername: "",
      loginPassword: "",
      registerUsername: "",
      registerEmail: "",
      registerPassword: "",
      showRegisterForm: false,
    };
  },
  mounted() {},
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.loginUsername,
          password: this.loginPassword,
        };

        // Realizar la solicitud POST al endpoint de inicio de sesión
        const response = await axios.post("/login", credentials);

        if (response.status === 200) {
          // Autenticación exitosa, obtener el token de acceso
          const token = response.data.token;

          // Almacenar el token en el almacenamiento local o en una cookie
          localStorage.setItem("access_token", token);

          // Redirigir al usuario a otra página o realizar acciones adicionales
          Swal.fire("Bienvenido!", "Inicio de Sesión Exitoso!", "success");
          this.$router.push({ name: "products" });
        } else {
          // Autenticación fallida, manejar el error
          Swal.fire("Oops!", "Credenciales incorrectas.", "warning");
        }
      } catch (error) {
        // Manejar errores de la solicitud
        console.error("Error:", error);
      }
    },
    register() {
      // Lógica de registro aquí
      Swal.fire("Registrado!", "El usuario ha sido registrado!", "info");
    },
  },
};
</script>

<style scoped>
/* Agrega estilos de transición para la animación flip */
.flipped {
  transform: rotateY(180deg);
}
.flip-container {
  width: 100%;
}
.card {
  background-color: rgba(255, 255, 255, 0.123);
  position: absolute;
}
.text-label {
  color: rgba(255, 255, 255, 0.753);
  font-family: "CaviarDreams";
}
.text-muted {
  color: rgba(255, 255, 255, 0.6) !important;
  font-family: "LouisGeorgeCafe";
}
</style>

<style lang="scss" scoped>
.flip-card {
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.flip-card-front {
  transform: rotateY(0deg);
}

.flip-card-back {
  transform: rotateY(180deg);
}

@mixin transition($settings) {
  -webkit-transition: $settings;
  -moz-transition: $settings;
  -ms-transition: $settings;
  -o-transition: $settings;
  transition: $settings;
}
.btn-collapsible {
  overflow: hidden;
  @include transition(all 500ms ease-in-out);
  max-width: 40px;
  white-space: nowrap;
  &.btn-sm {
    max-width: 34px;
  }
  &.btn-lg {
    max-width: 50px;
  }
  span {
    opacity: 0;
    text-indent: -6px;
    display: inline-block;
    @include transition(all 500ms ease-in-out);
  }
  &:hover {
    max-width: 300px;
    @include transition(all 300ms ease-in-out);
    span {
      opacity: 1;
      text-indent: 0px;
      @include transition(all 300ms ease-in-out);
    }
  }
}
</style>