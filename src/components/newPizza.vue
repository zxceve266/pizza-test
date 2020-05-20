<template>
    <form>
        <h3>Add new pizza:</h3>
        <div class="form-group">
            <label for="name">品名</label>
            <input type="text" id="name" v-model="newPizza.name">
        </div>
        <div class="form-group">
            <label for="description">描述介紹</label>
            <textarea type="text" id="description" v-model="newPizza.description"></textarea>
        </div>
        <p>
            <strong>選項 1:</strong>
        </p>
        <div class="form-group">
            <label for="size1">尺寸價格(")</label>
            <input type="text" id="size1" v-model="newPizza.options[0].size">
        </div>
        <div class="form-group">
            <label for="price1">價格</label>
            <input type="text" id="price1" v-model="newPizza.options[0].price">
        </div>
        <p>
            <strong>選項 2:</strong>
        </p>
        <div class="form-group">
            <label for="size2">尺寸價格(")</label>
            <input type="text" id="size2" v-model="newPizza.options[1].size">
        </div>
        <div class="form-group">
            <label for="price2">價格</label>
            <input type="text" id="price2" v-model="newPizza.options[1].price">
        </div>
        <button type="button" class="btn_green" @click.prevent="add">加入</button>
    </form>
</template>

<script>
import { dbMenuRef } from '../firebase'
export default {
    data() {
        return {
            newPizza: {
                name: 'Eg. Margherita',
                description: 'Eg. A delicious tomato based pizza topped with mozzarella',
                options: [
                    {
                    size: 9,
                    price: 6.95
                    }, 
                    {
                    size: 12,
                    price: 10.95
                    }
                ],
                createdAt:new Date()
            }
        }
    },
    methods:{
        
        add(){
            
            this.$store.dispatch('addNewPizza',this.newPizza)
        }
    }
}
</script>

<style>
    .form-group {
        margin: 10px 0;
    }

    label {
        display: block;
        margin: 0 0 10px 0;
    }

    input,
    textarea {
        width: 50%;
        padding: 5px;
        box-sizing: border-box;
        background: rgb(254, 254, 252);
        border: 1px solid #f79e38;
    }

    button {
        background: rgb(63, 145, 63);
        color: #fff;
        padding: 5px 15px;
        border-radius: 5px;

    }
</style>