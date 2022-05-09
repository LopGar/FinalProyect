<template>
<br>
<br>
<br>
  <div>
    <div class="card" v-if="persona != undefined && !isLoading">

      <div v-if="!editando">
        <h5 class="card-header">{{ persona.nombre }}</h5>
        <div class="card-body">
          <div class="card-text">
            <p><b>Email</b> : {{persona.email}}</p>
            <br>
            <br>
            <p><b>Elección </b>: {{persona.selres}}</p>
          </div>
        </div>
      </div>

      <div v-else-if="personaEdicion"> <!-- Espera a que la copia del objeto esté lista, si sigue null no se muestra -->
        <h5 class="card-header"><input type="text" v-model="personaEdicion.nombre"></h5>
        <div class="card-body">
          <div class="card-text">
            <p>Email : <input type="text" v-model="personaEdicion.email"></p>
            <br>
            <p>Elección : <!-- <input type="text" v-model="personaEdicion.selres"> -->  <va-select
          v-model="selres"
          class= "personaEdicion.selres"
          :options="options"
          placeholder="Seleccione"
          /> </p>
          </div>
        </div>
      </div>
      
      <div class="actions">
        <va-button size="medium" icon-right="create" color="warning" class="btn" @click= "editar"> {{editando? 'Cancelar' : 'Editar'}}</va-button>
        <va-button size="medium" icon="clear" color="danger" class="btn" @click= "eliminar" v-if="!editando"> Eliminar </va-button>
        <va-button size="medium" icon="save" color="success" class="btn" v-if="editando" @click= "guardarCambios">Guardar</va-button>
      </div>

    </div>

    <div v-else-if="isLoading">Cargando...</div>
    <router-link to="/print" class="btn mt-3" style="color: #000000; background-color: rgb(240, 241, 125); border-radius: 20px; " ><b>Volver</b></router-link>
  </div>
</template>

<script>
  import axios from 'axios'

//Cambiamos sintaxis original

export default {
  data() {
     return {
       index:"",
       persona:null,//Creamos un objeto, le ponemos null no las llaves
       personaEdicion:null,//Hacemos una copia del objeto
       isLoading: false,
       editando:false,
       options: ['Fresco y Sabroso', 'La Candelaria', 'Muu Steak', 'Dulce Tentación']
     }
  },
  methods: {
    eliminar() {
      console.log("Eiminando");

      //Genera modal de confirmacion
      if(confirm('¿Estás seguro que quieres eliminar a ' + this.persona.nombre + '?')) {
      
        //let nombrePersona='invitados/' + this.index + '.json';
        //axios.delete("https://vue-test01-8ab7a-default-rtdb.firebaseio.com/" + nombrePersona)
        axios.delete('invitados/' + this.index + '.json')
        .then ((res) => {
          console.log(res.data)
          this.$router.push('/print');
        })
        .catch()
      }
    },
    editar() {
      console.log("Editando");
      this.editando=!this.editando;

      if(this.editando) {
        //Copiamos valores de los atributos en un nuevo objeto
        this.personaEdicion= {
          nombre:this.persona.nombre,
          email:this.persona.email,
          selres:this.persona.selres,
        }
      }
      else {
        this.personaEdicion=null;
      }
      
    },
    guardarCambios() {
      console.log("Guardando");

      //let nombrePersona='invitados/' + this.index + '.json';
      //axios.put("https://vue-test01-8ab7a-default-rtdb.firebaseio.com/" + nombrePersona, this.personaEdicion)
      axios.put('invitados/' + this.index + '.json', this.personaEdicion)
      .then ((res) => {
        console.log(res.data)
        this.persona=res.data;
        this.editando=!this.editando;
      })
      .catch()
      console.log("Guardando cambios")
    },
    //Reemplazo la CP original
    //Obtener los datos de 1 persona específica
    obtenerPersonaById() {
      this.isLoading=true;
      
      axios.get('invitados/' + this.index + '.json') 
        .then( (res) => {//capturar respuesta
           //console.log(res);
           this.persona= res.data;
           this.isLoading=false;
         })
         .catch((error) => {//capturar errores
           console.log(error)
           this.isLoading=false;
         })
      }
    },
    created() {
      this.index = this.$route.params.index;
      this.obtenerPersonaById();

    }

};
</script>
<style scoped>
.actions {
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  padding:10px;
}
.actions button {
  margin-right:10px;
}
h5{
  background-color: rgb(248, 248, 160);
  font-size: 25px;
}
p{
  font-size: 25px;
}
</style>