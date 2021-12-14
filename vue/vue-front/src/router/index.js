import Vue from "vue"
import Router from 'vue-router'
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"
import Home from "../components/Home.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/:id',
            name: 'Home',
            component: Home,
            props: true
        },
    ]
})
// router.beforeEach( async(to, from, next) => {

//     if(VueCookies.get('token')===null && VueCookies.get('refresh_token') !== null){
//       await refreshToken();
//     }
  
//     if (to.matched.some(record => record.meta.unauthorized) || VueCookies.get('token')){
//       return next();
//     }
  
//       alert('로그인 해주세요');
//       return next('/login');
//   })