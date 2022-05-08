<template>
  <div>
    <br>
    <br>
    <br>
    <h2>Tus opciónes más Frecuentes</h2>
    <br>
    <br>
    <!-- Ahora llamaremos a persona.id, que es el id de la BD, y no al store-->
    <ul class="list-group" v-if="personas.length>0 && !isLoading">
      <li v-for="persona in personas" :key="persona.id"  class="list-group-item">
        <router-link :to="`/details/${persona.id}`">
        {{persona.nombre}}</router-link>
      </li>
    </ul>
    <div v-else-if="isLoading"><p>Cargando...</p></div>
    <div v-else><p>No Existen Selecciones</p></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
     return {
       personas:[],
       isLoading: false,
     }
  },
  methods: {
    //Reemplazo la CP original por
    obtenerPersonas() {
      this.isLoading=true;
      axios.get('invitados.json') 
        .then( (res) => {//capturar respuesta
           let results=[];
           for (let id in res.data) {
             results.push({
               id:id,//recomendable guardar siempre el id de la BD de Firebase
               nombre: res.data[id].nombre,
               email: res.data[id].email,
               selres: res.data[id].aporte,
             });
           }
           this.personas=results;
           this.isLoading=false;
         })
         .catch((error) => {//capturar errores
           console.log(error);
           this.isLoading=false;
         })
      }
    },
    created() {
      this.obtenerPersonas();
    }
};
</script>
<style scoped>
h2{
  font-size: 35px;
}
li{
  font-size: 30px;
  background-color: rgb(247, 247, 188);
}
a{
  color: black;
  text-decoration-line: none;
}
</style>