function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //FUNÇÃO SWITCH LIMPA

  const img = document.querySelector("#profile img") //Selecionando a div #profile e o elemento img
  if (html.classList.contains("light")) {
    //Se html conter a classe light
    img.setAttribute("src", "./assets/avatar-light.png") //seta o link da imagem e o alt
    img.setAttribute(
      "alt",
      "Pessoa encapuzada sobe luz vermelha e olhos levemente iluminados"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Pessoa encapuzada sobe luz azul e olhos iluminados com cor azul"
    )
  }

  //FUNÇÃO SWITCH BRUTA
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  //TROCAR IMAGEM
}
