const toggleMode = () => {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector("#profile img");

  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/perfil2.jfif");
    img.setAttribute(
      "alt",
      "Foto do Renan Moreira usando um chapéu de palha com uma camisa quadriculada tirando foto de perfil"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto do Renan Moreira usando um chapéu de palha com uma camisa preta tirando foto na frente do espelho com um celular"
    )
  }
}