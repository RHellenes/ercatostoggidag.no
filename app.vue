<template>
  <div class="container">
    <dl :class="`style-${getStyleId}`" >
      <dt class="wordart">
        <div class="preview" data-content="Er Cato støgg i dag?">
          Er Cato støgg i dag?
        </div>
      </dt>
      <dd v-if="giphy.data">
          <Transition name="popin">
            <img v-show="shouldShow" :srcset="giphy.data.images.original.webp" width="500" height="500" alt="Cato er alltid støgg" /> 
          </Transition>
        </dd>
        <dd v-else>
          <p>Ops! Han er så støgg at vi ikke kunne finne en giph som sa ja tydlig nok!</p>
      </dd>
      <button v-show="!shouldShow" @click="handleShouldShow" style="z-index:1000000">Finn svaret</button>
    </dl>
  </div>
</template>
<script setup lang="ts">
import confetti from 'canvas-confetti'

const ids: string[] = [
  '70YaDoZ1VqBZ8SgYiz',
  '70YaDoZ1VqBZ8SgYiz',
  '3ohhweiVB36rAlqVCE',
  '2RGhmKXcl0ViM',
  'J336VCs1JC42zGRhjH',
  'XMBJ0l20sNWEM',
  'ynRrAHj5SWAu8RA002',
  'dvk2pccSeR4Gz9ABl8',
  'nFjDu1LjEADh6',
  'jErnybNlfE1lm',
  'Zai3ffKrUcLFwalDor',
  'h7CrjtmsLtqxi',
  '57ZSazimN4opZYkhjc',
  'XMBJ0l20sNWEM',
  'ynRrAHj5SWAu8RA002',
  'SH8YML3ofBvz7qPB1R',
  'hWFVffRsJUm2zKaEbE',
  'dvk2pccSeR4Gz9ABl8',
  'LNxlSJpxAN55bS51Ro',
  'XMBJ0l20sNWEM',
  '6cFcUiCG5eONW',
  '6cFcUiCG5eONW',
  'l8sXa4DqpPvs6aZ0t2'
]

const getRandomNumber = ((topLimit:number) => {
  return Math.floor(Math.random() * topLimit) + 1
})

const shouldShow = ref(false)
const {data: giphy} = await useFetch(`https://api.giphy.com/v1/gifs/${ids[getRandomNumber(ids.length)]}?api_key=9quZVPwsdg1SFp7953XVDFZu0HfGvQSb`)


const getStyleId = computed(() => {
  return getRandomNumber(21)
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