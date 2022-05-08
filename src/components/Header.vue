<template>
  <nav class="navbar nav-pills" style="background-color: rgb(245, 213, 31)">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/add" class="nav-link" active-class="active" style="color: #000000; background-color: rgb(240, 241, 125); border-radius: 20px; "
            ><b>Selección de Restaurant</b></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/print" class="nav-link" active-class="active" style="color: #000000; background-color: rgb(240, 241, 125); border-radius: 20px;"
            ><b>Tus Elegidos</b></router-link
          >
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item logout" @click="logout">
          <va-button text-color="#000000" color="rgb(240, 241, 125)" v-if="isLoggedIn" class="btn btn-default"><b>Cerrar Sesión</b></va-button>
          <va-button  href="#ini" text-color="#000000" color="rgb(240, 241, 125)" v-else class="btn btn-default"><b>Iniciar Sesión</b></va-button>
        </li>
      </ul>
    </div>
  </nav>

</template>
<script>
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  data() {
    return {
      auth:null,
      isLoggedIn:false
    }
  },
  methods: {
    logout() {
      console.log('Cerrando sesión')

      signOut(this.auth)
      .then(() => {
        this.isLoggedIn=false;
        this.$router.push('/login')
      })
    }
  },
  mounted() {
    this.auth=getAuth();
    onAuthStateChanged(this.auth, (user) => {
      if(user) {
        this.isLoggedIn=true;
      }
    })
  }
}
</script>

<style scoped>
a{
  color: black;
  margin: 5px;
  
}

</style>