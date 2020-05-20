<template>
  <div id="app">
    <app-Header/>
    <router-view/>
    <div class="info_block_wrapper">
      <router-view name="ordering-guide"/>
      <router-view name="delivery"/>
      <router-view name="history"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import { dbMenuRef } from './firebase'
    export default {
      components:{
        appHeader:Header,
      },
      created(){
        this.$store.dispatch('setMenuRef')
        this.$store.dispatch('setOrderRef')
      }
    }
</script>

<style >
  body{
    font-family: "Crimson Text","sefif";
    margin: 0;
    font-size: 1.5em;
  }

  a{
    text-decoration:none;
    color: inherit;
  }

  ul{
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 10px 0;
    background:#f1e6da;
  }

li{
  list-style: none;
}
span{
  margin: 0 10px;
}
.info_block_wrapper{
  display: flex;
  flex-direction: column;
}

.info_block{
  background: #f1e6da;
  margin: 10px 0;
  padding: 10px;
}

.info_block h3{
  text-align: center;
}

.info_block_content{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.info_block img{
  width: 30%;
}

input,textarea{
  font-size: 1.1rem;
}

button{
  border: none;
  font-size: 1.1rem;
}

.btn_green{
  background:rgb(101,168,101)
}

.btn_red{
  background:rgb(241,70,70)
}

@media screen and (min-width: 900px){
  .info_block{
    width: 100%;
  }
  .info_block_wrapper{
    flex-direction: row;
  }

  .info_block:nth-child(2){
    margin: 10px;
  }

  .info_block:nth-child(2) img{
    order: -1;
  }

  .info_block_content{
    flex-direction: column;
    align-items: center;
  }

  .info_block img{
    max-width: 100%;
  }
}
</style>
