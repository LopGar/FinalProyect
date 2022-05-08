import SelectRestorant from './pages/SelectRestorant.vue'
import SelectData from './pages/SelectData.vue'
import DetalleSelect from './pages/DetalleSelect.vue'
import Register from './pages/Register.vue'



export const routes = [
    {path:'', redirect:'login'},
    {path:'/add', 
        component:SelectRestorant,
        meta:{requiresAuth:true}
    },
    {path:'/print', 
        component:SelectData,
        meta:{requiresAuth:true}
    },
    {path:'/login', component:Register},
    {path:'/details/:index', 
        component:DetalleSelect,
        meta:{requiresAuth:true}
    },
    
]