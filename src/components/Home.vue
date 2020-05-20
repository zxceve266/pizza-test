<template>
    <div class="background">
        <div class="background-overlay">
            <h2>Welcom to Pizza Planet</h2>
            <img src="../assets/images/roller.png" alt="roller">
            <h3>Feeling hungry?</h3>
            <button class="order_btn" @click="goToMenu">Let's order</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goToMenu(){
            this.$router.push({name:'Menu'})
            // this.$router.replace({name:'Menu'}) 會直接取代路徑 但是會造成返回(上一頁)錯亂
            // this.$router.go(-1) 回到頁面前一頁
        }
    }
}
</script>

<style>
h2,h3{
    margin: 2%;
}
.background{
    background:url('../assets/images/dough.jpg') center;
    background-size: cover;
    display: flex;
    text-align: center;
    align-items: center;
}

.background-overlay{
    display: flex;
    flex-direction: column;
    background:#f1e6da;
    width: 50%;
    opacity: 0.8;
    margin: 0 auto;
    padding: 5px;
    align-items: center;
}

.background-overlay > img{
    max-width: 15%;
}

.order_btn{
    background:#f79f38;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>