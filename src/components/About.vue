<template>
  <div>
    <h3>點擊下面連結以獲得更多資訊</h3>
    <nav>
      <ul>
        <router-link :to="{name:'History'}" tag="li">
          <a class="nav-link">我們的歷史</a>
        </router-link>
        <span>~</span>
        <router-link :to="{name:'OrderingGuide'}" tag="li">
          <a class="nav-link">購物指南</a>
        </router-link>
        <span>~</span>
        <router-link :to="{name:'Delivery'}" tag="li">
          <a class="nav-link">配送</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h3{
  text-align: center;
}
</style>