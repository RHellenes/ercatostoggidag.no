// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/wordart.css'
  ],
  head:{
    title: 'Er Cato støgg i dag?',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Interesseside for å fjerne en hver tvil om Cato er støgg eller ikke' },
      { name: 'og:image', content: '/ErCatoStøggBanner2.png' }
    ],
    link: [
     { rel:"icon", type:"image/x-icon", href:"/favicon/cato_x_taric.jpg" }
    ]
  }

})
