const answers:string[] = [
  'ja',
  'ja',
  'veldig',
  'ekstremt støgg',
  'i dag er han superstøgg',
  'åpenbart støgg i dag også',
  'https://media2.giphy.com/media/4T3QPfXhVHrlvekSbf/giphy.gif?cid=ecf05e471yvxxdk81ylq2c953q89w3oobh31jr5z62nua3ck&rid=giphy.gif&ct=g',
  'https://media3.giphy.com/media/PS7d4tm1Hq6Sk/giphy.gif?cid=ecf05e47uz43iu1xyfr3f7p8g1idlghufgtqr113q99j4rop&rid=giphy.gif&ct=g'
]
const birthday:string = 'Jepp, støgg, gammal bursdagsgutt'

export default defineEventHandler((): string => {
  
  if(new Date().getDate() === 8 && new Date().getMonth() === 9) return birthday // birthday
  
  return answers[Math.floor(Math.random() * answers.length - 1) + 1]
})
