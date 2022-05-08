<template>
    <br>
    <br>
      <div>
        <h1> Bienvenidos a la nueva forma</h1>
        <h2> de encontrar y reservar en tus restaurantes favoritos.</h2>
    </div>
    <br>
    <br>
    <br>
    <h3>Conoce toda la actualidad sobre restaurantes y cocina </h3>
    <br>
    <br>
    <br>
    <div class="row">
        <div class="col-md-9 flex">
            <va-card>
        <va-image
          src="https://imagenes.elpais.com/resizer/nREPapPWkrqha8sLmS0ZEzSxUZ4=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/FKUQUZVXBBHBHEKBZF3ZKGWJ6I.jpg"
          style="height: 200px;"
        />
        <va-card-title><b>FUERON PRESENTADOS LOS MEJOR 50 RESTAURANTES DEL MUNDO</b></va-card-title>
        <va-card-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam odio quis voluptatum quae ut blanditiis, sequi eum voluptatibus nisi magnam nostrum ex quam. In exercitationem aut unde tempora ipsa quibusdam.</va-card-content>
        </va-card>
        </div>
        </div>
    <br>
    <br>
    <br>
    <br>
    <div class="row">
        <div class="col-md-6">
            <va-card>
        <va-image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncLgVIfH-0SgCw7SIVrmeTfovuwUA1T-2Mw&usqp=CAU"
          style="height: 200px;"
        />
        <va-card-title>LO QUE DEBES SABER PARA ESCOGER EL MEJOR CORTE DE CARNE</va-card-title>
        <va-card-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat eaque maxime ab sequi, et quidem laboriosam, assumenda fugiat, natus saepe voluptatum quibusdam quos reprehenderit doloribus velit sint accusantium voluptate? </va-card-content>
      </va-card>
        </div>
          <div class="col-md-6">
              <va-card>
        <va-image
          src="https://media.istockphoto.com/photos/professional-chef-at-work-seasoning-steaks-picture-id935491988?k=20&m=935491988&s=612x612&w=0&h=y2ED_A1OoDuowOOTqmJ7okmwOsMmf6Zdym1HmL5TgVs="
          style="height: 200px;"
        />
        <va-card-title>EL RESTAURANTE MÁS CARO DEL MUNDO</va-card-title>
        <va-card-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ullam beatae, cupiditate corrupti dolore sint accusamus modi voluptates. Omnis explicabo ipsam sunt fugit architecto rerum ratione quo nihil beatae provident.</va-card-content>
      </va-card>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="row">
        <h2>Ingresa, guarda y reserva en tus lugares favoritos</h2>
        <br>
        <br>
        <hr>
        <h3>Recuerda que tambien puedes obsequiar una reserva  a un ser querido</h3>
        <br>
        <br>
        <div col-md-8>
            <br>
            <br>
            <br>
              <h3><b>Ingresa Tus datos</b></h3>
        <br>
        <div class="card" style="width: 50rem; ">
            <div class="card-body" >
                <div class="form-group">
                    <label><b>Email</b></label><br>
                    <input style="width: 45rem; height:30px ;" type="text" v-model="email" placeholder="xxxxx@xxx.xx"> 
                </div>

                <div class="form-group">
                    <label><b></b>Contraseña</label><br>
                    <input style="width: 45rem; height:30px ;" type="password" v-model="password" placeholder="xxxxxxxxxxx">
                </div>

                <va-button id="ini" color="rgb(245, 213, 31)" text-color="#000000" class="btn" @click="registrar">Registrarse</va-button>
                <va-button color="rgb(245, 213, 31)" text-color="#000000" class="btn" @click="login" >Iniciar sesión</va-button>

                <p v-if="error" class="error">{{errorMessage}}</p>
            </div>
        </div>
    </div>
    </div>
     <br>
    <br>
    <br>
    <br>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

export default {
    data() {
        return {
            email:"",
            password:"",
            error:false,
            errorMessage:""
        }
    },
    methods: {
        registrar() {
            console.log('Registrando')
            let auth=getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)//encriptará la contraseña y hará el request http, ya tiene then y catch
            .then((res) => {
                console.log(res);
                console.log("Se ha creado el usuario");
                console.log(auth.currentUser);
                this.$router.push('/add');
            })
            .catch((error) => {
                console.log(error)
            })
        },
        login() {
            console.log('Iniciando sesión')
            let auth=getAuth();
            this.error=false;

            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((res) => {
                console.log(res);   
                //console.log("Se ha creado el usuario");
                //console.log(auth.currentUser);
                this.$router.push('/add');
            })
            .catch((error) => {
                this.error=true;
                //this.errorMessage=msg;

                console.log(error)
                let msg="";
                console.log(error.code);

                if (error.code==="auth/invalid-email") {
                msg="El email es inválido"
                this.errorMessage=msg;
                }
                else if(error.code==="auth/user-not-found") {
                msg="No se encontró el usuario"
                this.errorMessage=msg;
                }
                else if(error.code==="auth/wrong-password") {
                msg="Contraseña incorrecta"
                this.errorMessage=msg;
                }
                else {
                msg="Ha ocurrido un error, no se pudo iniciar sesión"
                this.errorMessage=msg;
                }
            })
        }
    }
}
</script>

<style scoped>
 button {
     margin-right:10px;
 }
 p.error {
     color:red
 }
h1{
    font-size: 40px;
}
h2{
    font-size: 35px;
}
h3{
    font-size: 25px;
}
</style>