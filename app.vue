<template>
  <div class="container">
    <dl :class="`style-${getHeadingStyle}`" >
      <dt class="wordart">
        <div class="preview" data-content="Er Cato støgg i dag?">
          Er Cato støgg i dag?
        </div>
      </dt>
      <template v-if="!isImage">
        <Transition name="popin">
          <dd v-show="shouldShow" :data-content="answerComputed">{{ answerComputed }}</dd> 
        </Transition>
      </template>
      
      <template v-else>
        <Transition name="popin">
          <img v-show="shouldShow" :srcset="answerComputed" width="500" height="500" alt="Cato er alltid støgg"> 
        </Transition>
      </template>

      <button v-show="!shouldShow" @click="handleShouldShow" style="z-index:100000000000">Finn svaret</button>
    </dl>
    <!-- <canvas id="confetti-canvas" style="position: fixed; top: 0px; left: 0px; width: calc(100%); height: calc(100%); margin: 0px; padding: 0px; z-index: 999999999; pointer-events: none;"></canvas> -->
  </div>
</template>
<script setup lang="ts">

import confetti from 'canvas-confetti'
import answer from '@/utils/answers'

let shouldShow = ref(false)

// const {data, pending, error} = useAsyncData('ercatostogg', 
// () => $fetch('/api')
// )

const answerComputed = computed(() => {
  return answer()
})
  
const isImage = computed(() => {
  const regex = new RegExp("^http")
  return regex.test(answerComputed.value)
})
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
  font-family: Times, serif;
  
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
  font-size: clamp(1.4em, 2vw, 8rem);
  text-decoration:underline;
  
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