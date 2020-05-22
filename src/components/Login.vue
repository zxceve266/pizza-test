<template>
<div class="login-wrapper">
    <p>請登入以繼續</p>
    <form>
        <div class="form-group">
            <label for="email">電子郵件</label>
            <input type="text" id="email" olaceholder="輸入你的電子信箱" v-model="email">
        </div>
        <div class="form-group">
            <label for="password">密碼</label>
            <input type="password" id="password" v-model="password">
        </div>
        <button type="button" class="btn_green" @click.prevent="signIn">登入</button>
    </form>
</div>
</template>

<script>
import store from '../store/store'
    export default {
        data(){
            return{
                email:"zzz@ccc.com",
                password:"123456"
            }
        },
        methods:{
            signIn(){
                const user = {
                    email: this.email,
                    password: this.password
                }
                store.dispatch('signIn',user)
            }
        }
    }
</script>

<style>

</style>