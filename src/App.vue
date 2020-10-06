<template>
  <div class="all">
    <h1 style="margin:auto; width:1000px;text-align: center;">Weather Forecast @G's Academy Offices</h1>
    <nav style="margin:auto; width:500px;text-align: center;">
      <router-link to="/Sapporo" class="link">Sapporo</router-link>
      <router-link to="/Harajuku" class="link">Harajuku</router-link>
      <router-link to="/Fukuoka" class="link">Fukuoka</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


</script>

<style scoped>
.all{
  position: relative;
  padding: none;
}

nav{
  padding-top: 30px;
}
.link{
  
  margin-right:10px;
  font-size: 25px;
}

</style>
