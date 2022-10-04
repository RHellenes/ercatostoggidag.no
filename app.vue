<template>
  <div class="container">
    <dl :class="`style-${getHeadingStyle}`" >
      <dt class="wordart">
        <div class="preview" data-content="Er Cato støgg i dag?">
          Er Cato støgg i dag?
        </div>
      </dt>
      <dd>
        <template v-if="giphy.data">
          <Transition name="popin">
            <img v-show="shouldShow" :srcset="giphy.data.images.original.webp" width="500" height="500" alt="Cato er alltid støgg"> 
          </Transition>
        </template>
        <template v-else>
          <p>Ops! Han er så støgg at vi ikke kunne finne en giph som sa ja tydlig nok!</p>
        </template>
      </dd>
      <button v-show="!shouldShow" @click="handleShouldShow" style="z-index:1000000">Finn svaret</button>
    </dl>
  </div>
</template>
<script setup lang="ts">
import confetti from 'canvas-confetti'


const shouldShow = ref(false)
const {data: giphy} = await useFetch('https://api.giphy.com/v1/gifs/random?api_key=9quZVPwsdg1SFp7953XVDFZu0HfGvQSb&tag=big+yes&rating=g')


const getHeadingStyle = computed(() => {
  return Math.floor(Math.random() * 21) + 1
})

const handleShouldShow = (): void => {
  shouldShow.value = true
  confetti({
    particleCount: 300,
    spread: 360,
    startVelocity: 20,
    angle:90,
    origin: { y: 0.55,  }
  });
}


</script>
<style>
  .popin-enter-active {
    will-change: transform;
  animation: zoomin .3s cubic-bezier(1,.07,.35,.9);
}

@keyframes zoomin {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
  .container{
    width: 100%;
    height: 100%;
    position: relative;
  }
  body{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
*{
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  box-sizing: border-box;
}
dl{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
  
  
}
dt{
  font-size: clamp(1.8em, 5vw, 8rem);
}
dd{
  margin:0;
  width:100%;
  
}
img{
  margin-top:2rem;
  width: 80%;
  height:auto !important;
  max-width: 500px;
  
}
@media (min-width:500px) {
  img {
    width: 40%;

  }
  
}

</style>