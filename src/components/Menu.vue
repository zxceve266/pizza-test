<template>
    <div class="menu_wrapper">
        <div class="menu">
            <h3>~ Authentic handmade pizza ~</h3>
            <table>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td>
                            <strong>~ {{item.name}} ~</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <small>{{item.description}}</small>
                        </td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="index">
                        <td>{{option.size}}</td>
                        <td>{{option.price | currency}}</td>
                        <td>
                            <button type="button" class="btn_green" @click="addToBasket(item,option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="basket">
            <h3>~ Basket ~</h3>
            <div v-if="basket.length > 0">
                <table>
                    <tbody v-for="(item,index) in basket" :key="index">
                        <tr>
                            <td>
                                <button class="btn_green" @click="decreaseQuantity(item,index)">&#8722;</button>
                                <span>{{item.quantity}}個</span>
                                <button class="btn_green" @click="increaseQuantity(item)">&#43;</button>
                            </td>
                            <td>{{item.name}} {{item.size}}吋</td>
                            <td>{{item.price * item.quantity | currency}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>消費總額:{{total | currency}}</p>
                <button class="btn_green" @click="addNewOrder">訂貨</button>
            </div>
            <div v-else>
                {{basketText}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store/store'
    export default {
        data() {
            return {
                basket: [],
                basketText:"你的購物車是空的",
            }
        },
        computed:{
            ...mapGetters([
                'getMenuItems'
            ]),
            total(){
                let totalCost = 0
                this.basket.forEach((item)=>{
                    totalCost += item.quantity * item.price
                })
                return totalCost
            }
        },
        methods: {
            async addToBasket(item, option) {
                const pizzaExists = await this.basket.find(
                    (pizza) => pizza.name === item.name && pizza.size === option.size
                )
                if (pizzaExists) {
                    pizzaExists.quantity++
                } else {
                    this.basket.push({
                        name: item.name,
                        price: option.price,
                        size: option.size,
                        quantity: 1
                    })
                }
            },
            increaseQuantity(item){
                item.quantity ++
            },
            decreaseQuantity(item,index){
                if(item.quantity > 1){
                    item.quantity --
                }else{
                    this.basket.splice(index,1)
                }
            },
            addNewOrder(){
                const order ={
                    pizza:{...this.basket},//因為是陣列要解構在Object
                    createdAt: new Date()
                }
                store.dispatch('addNewOrder',order)
                this.basket = []
                this.basketText = '謝謝你的購買'
            }
        }
    }
</script>

<style scoped>
    h3 {
        text-align: center;
    }

    .menu_wrapper {
        display: flex;
        flex-direction: column;
    }

    .menu,
    .basket {
        background: #f1e6da;
        border-radius: 3px;
        height: 100vh;
        margin: 10px;
        padding: 10px;
    }

    @media screen and (min-width:900px) {
        .menu_wrapper {
            flex-direction: row;
            justify-content: space-between;
        }

        .menu {
            width: 65vw;
        }

        .basket {
            width: 35vw;
        }
    }
</style>