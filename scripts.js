let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")



function mudarVisual(cor, img) {

    tenis.classList.add("troca-efeito")

    body.style.background = cor
  


    //contaddor de time
    setTimeout(() => {
          tenis.src = img
        tenis.classList.remove("troca-efeito")
        
    }, 500);



    
}



