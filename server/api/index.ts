const answers:string[] = [
  'ja',
  'veldig',
  'ekstremt støgg',
  'i dag er han superstøgg',
  'åpenbart støgg i dag også',
  'https://media2.giphy.com/media/4T3QPfXhVHrlvekSbf/giphy.gif?cid=ecf05e471yvxxdk81ylq2c953q89w3oobh31jr5z62nua3ck&rid=giphy.gif&ct=g',
  'https://media3.giphy.com/media/PS7d4tm1Hq6Sk/giphy.gif?cid=ecf05e47uz43iu1xyfr3f7p8g1idlghufgtqr113q99j4rop&rid=giphy.gif&ct=g'
]
const getCurrentDayNumber = ():number => {
  const now = new Date() 
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day
}
export default defineEventHandler((): string => {

  return answers[5]
})
