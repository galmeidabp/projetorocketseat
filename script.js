function togglemode() {
   const html = document.documentElement

   html.classList.toggle('light')

   const img = document.querySelector('#foto img')
   if(html.classList.contains('light')) {
      img.setAttribute('src', './assets/avatar-light.png')
   } else {
      img.setAttribute('src', './assets/avatar.png')
   }

   if(html.classList.contains('light')) {
      Text.setAttribute('alt', 'Imagem do Mayk Brito sorrindo usando óculos, barba e camisa preta em um fundo amarelo' )
   } else {
      Text.setAttribute('alt', 'Imagem do Mayk Brito sorrindo usando óculos escuros, camisa preta e jaqueta preta em um fundo em degradê de roxo e azul')
   }
}