<template>
    <div class="admin_wrapper">
        <AdminContent v-if="currentUser !== null"/>
        <Login v-if="currentUser === null"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
const AdminContent = ()=> import('./AdminContent')
import Login from './Login'
export default {
    components:{
        AdminContent,
        Login
    },
    computed:{
        ...mapGetters([
            'currentUser'
        ])
    },
    beforeRouteLeave(to,from,next){
            if( this.currentUser === null ){
                next()
            }else{
                if(confirm('你會被登出，確定繼續嗎?') === true){
                    this.signOut()
                    next()
                }else{
                    next(false)
                }
            }
        }
}
</script>


<style scoped>
    .admin_wrapper{
        margin: 10px;
    }
    
</style>