<template>
  <section v-if="currentUser !== null">
            <div class="current_user_wrapper">
                <span>登入用戶:</span>
                {{currentUser}}
                <button type="button" class="btn_red" @click.prevent="signOut">登出</button>
            </div>
            <newPizza/>
            <div class="menu_wrapper">
                <h3>Menu:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>商品</th>
                            <th>刪除商品品項</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in getMenuItems" :key="index" >
                        <tr>
                            <td>{{item.name}}</td>
                            <td>
                                <button type="button" class="btn_red" @click="removeMenuItem(item.id)">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="order_wrapper">
                <h3>目前訂單 ({{numberOfOrder}}):</h3>
                <table>
                    <thead>
                        <tr>
                            <th>商品</th>
                            <th>尺寸</th>
                            <th>數量</th>
                            <th>價格</th>
                        </tr>
                    </thead>
                    <tbody v-for="(order,index) in getOrder" :key="index" >
                        <tr class="order_number">
                            <th colspan="4">
                                <strong>購物編碼 :{{index + 1}}</strong>
                                <button type="buttn" class="btn_red" @click="removeOrderItem(order.id)">&times;</button>
                            </th>
                        </tr>
                        <tr v-for="(pizza,index) in order.pizza" :key="index">
                            <td>{{pizza.name}}</td>
                            <td>{{pizza.size}}</td>
                            <td>{{pizza.quantity}}</td>
                            <td>{{pizza.price * pizza.quantity | currency}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
</template>

<script>
import newPizza from './newPizza'
import { firebaseAuth } from '../firebase'
import { mapGetters } from 'vuex'
    export default {
        components:{
            newPizza,
        },
        data(){
            return{
                name:'steve'
            }
        },
        computed:{
            ...mapGetters([
                'getMenuItems',
                'numberOfOrder',
                'currentUser',
                'getOrder'
            ]),
        },
        // beforeRouteEnter(to,from,next){//componet Guard 示範1
        //     next((vm)=>{
        //         alert(`歡迎${vm.name}`)
        //     }); //不能直接用 this獲取實例 因為Componet還沒創建
        // },
        methods:{
            signOut(){
                this.$store.dispatch('signOut')
            },
            removeMenuItem(id){
                this.$store.dispatch('removeMenuItem',id)
            },
            removeOrderItem(id){
                this.$store.dispatch('removeOrderItem',id)
            }
        },
        
    }
</script>

<style scoped>
.current_wrapper,
    .order_wrapper,
    .menu_wrapper{
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #f79e38;
    }

    table{
        text-align: left;
        width: 70vw;
    }

    .order_number th{
        background:#ddd;
    }

    .order_number button{
        margin: 0 10px;
    }
</style>
