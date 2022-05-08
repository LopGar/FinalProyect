import {createStore} from 'vuex'

export const store = createStore({
    state:{
        personas:[{nombre:'Michael Bubble', email:'bubble@mail.com', selres:'Muu steak'}]
    },
    getters:{
        getPersonas:state => {
            return state.personas
        },
        getPersona:(state) => (index) => {
            return state.personas[index]
        }
    },
    mutations:{
        addPersona(state, payload){
            state.personas.push(payload)
        }
    },
    actions:{
        addPersona(context, payload){
            context.commit('addPersona', payload)
        }
    }
})