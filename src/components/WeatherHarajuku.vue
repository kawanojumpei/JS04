<template>
  <div>
    <p v-if="main == 'Rain'" class="rain"><img src="../assets/rain.jpg" alt="Rainy" style="width:500px; height:500px;"></p>
    <p v-else-if="main == 'Clouds'" class="clouds"><img src="../assets/clouds.jpeg" alt="Cloudy" style="width:500px; height:500px;"></p>
    <p v-else-if="main == 'Clear'" class="sunny"><img src="../assets/sunny.jpeg" alt="Sunny" style="width:500px; height:500px;"></p>
    <p v-else class="sunset"><img src="../assets/Loading.gif" alt="Sunset" style="width:500px; height:500px;"></p>
    <p class="text1">{{ city }}</p>
    <p class="text2">{{ main }}</p>
    <p class="text3">{{ temp }}℃</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
          city:null,
          main:null,
          temp:null
    }
  },
  mounted: function(){
   axios.get('https://api.openweathermap.org/data/2.5/weather?q=Harajuku&appid=cd4b425fafcd684028eb5eddb9ec4071')
   .then(function(response){
     this.city = response.data.name
     this.main = response.data.weather[0].main
     this.temp = Math.ceil(response.data.main.temp - 273.15)
   }.bind(this))
   .catch(function(error){
     console.log(error)
   })
 },
}

</script>

<style scoped>
.text1{
  color:white;
  font-size: 30px;
  font-weight: 600;
  margin: auto;
  text-align: center;
  z-index:2;
  width: 500px;
  position: absolute;
  top:338px;
  left:460px;
}

.text2{
  color:white;
  font-size: 30px;
  font-weight: 600;
  margin: auto;
  text-align: center;
  z-index:2;
  width: 500px;
  position: absolute;
  top:438px;
  left:460px;
}

.text3{
  color:white;
  font-size: 30px;
  font-weight: 600;
  margin: auto;
  text-align: center;
  z-index:2;
  width: 500px;
  position: absolute;
  top:538px;
  left:460px;
}

.rain{
    height:400px;
    width:500px;
    margin:auto;
    position:relative;top:100px;
    z-index:1;
}

.sunset{
    height:400px;
    width:500px;
    margin:auto;
    position:relative;top:100px;
    z-index:1;
}

.clouds{
    height:400px;
    width:500px;
    margin:auto;
    position:relative;top:100px;
    z-index:1;
}

.sunny{
    height:400px;
    width:500px;
    margin:auto;
    position:relative;top:100px;
    z-index:1;
}

img{
    z-index: 1;
}

</style>