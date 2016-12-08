import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = Vue.extend({
    template: '<div>Welcome to the <strong>home page<strong>!</div>'
})
const People = Vue.extend({
    template: '<div>Look at all the people here</div>'
})
const routes = [
    { path: '/', component: Home },
    { path: '/people', component: People },
    {
        path: '/people/:personId',
        component: {
            template: '<div>Person ID is {{$route.params.personId}}</div>'
        },
    },
]
const router = new VueRouter({ routes });
const app = new Vue({
    router
}).$mount('#app')
