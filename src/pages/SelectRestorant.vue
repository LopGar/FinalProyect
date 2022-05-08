<template>
  <br>
  <br> 
  <h1><b>Elige una de Nuestras Opciones y Disfruta</b></h1>
<div>
  <div>
  <br>
  <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <img src="https://dam.esquirelat.com/wp-content/uploads/2021/01/comida-saludable-pescado-300x300.jpg" class="card-img-top" alt="Restaurant1">
      <div class="card-body">
        <h5 class="card-title"><b>Fresco y Sabroso</b></h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br>
        <a href="#Form" style="color: #000000; background-color: rgb(245, 213, 31); border-radius: 20px; " class="btn">Elegir</a> 
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <img src="https://www.mexicoenmicocina.com/wp-content/uploads/2021/01/tacos-categoria-300x300.jpg" class="card-img-top" alt="Restaurant2">
      <div class="card-body">
        <h5 class="card-title"><b>La Candelaria</b></h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br>
        <a href="#Form" style="color: #000000; background-color: rgb(245, 213, 31); border-radius: 20px; " class="btn">Elegir</a> 
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <img src="https://www.santita.es/wp-content/uploads/2020/08/DSC8234-300x300-min.jpg" class="card-img-top" alt="Restaurant3">
      <div class="card-body">
        <h5 class="card-title"><b>Muu Steak</b></h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br>
        <a href="#Form" style="color: #000000; background-color: rgb(245, 213, 31); border-radius: 20px; " class="btn">Elegir</a> 
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <img src="https://lacocineria.cl/wp-content/uploads/2020/06/WhatsApp-Image-2020-11-20-at-09.30.06-300x300.jpeg" class="card-img-top" alt="Restaurant4">
      <div class="card-body">
        <h5 class="card-title"><b>Dulce Tentación</b></h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <br>
        <a href="#Form" style="color: #000000; background-color: rgb(245, 213, 31); border-radius: 20px; " class="btn">Elegir</a>
      </div>
    </div>
  </div>
</div>
</div>
 
 <div class="card" style="width: 35rem" id="Form">
      <div class="card-body">
        <h5 class="card-title"><b>Ingresa tus Datos</b></h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Michael Bubble"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">E-mail</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="bubble@email.com"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Ingresa el Restaurante Elegido</label>
          <va-select
          v-model="selres"
          class= "form-control"
          :options="options"
          placeholder="Seleccione"
          /> 
        </div>
        <va-button color="rgb(245, 213, 31)" text-color="#000000" class="btn" @click="addPersona">
          Ingresar
        </va-button>
      </div>
    </div>
</div>
<br>
<br>
<br>
<br>
<br>
</template>


<script>
import axios from 'axios'
export default {
  data() {
     return {
       nombre: "",
       email: "",
       selres: "",
       isLoading: false,
       options: ['Fresco y Sabroso', 'La Candelaria', 'Muu Steak', 'Dulce Tentación']
     }
  },
  methods: {
     addPersona() {
       if (this.nombre != "" && this.email != "") {
         const persona = {
           nombre: this.nombre,
           email: this.email,
          selres: this.selres,
         };
        
         this.isLoading=true;
        
         //axios maneja internamente la conversión a json
         axios.post('invitados.json', persona)
         .then( (res) => {//capturar respuesta
           console.log(res)
           this.nombre="",
           this.email="",
           this.selres="",
           this.$router.push('/print');
           this.isLoading=false;

         })
         .catch((error) => {//capturar errores
           console.log(error);
           this.isLoading=false;
         })
         //this.$store.dispatch("addPersona", persona);
         
       }
     },
   },
  }
</script>
<style scoped>
.card{
  margin-top: 50px;
}
h1{
  font-size: 40px;
}
h5{
  font-size: 25px;
}
</style>