let HEAD = document.querySelector("head")
// flexRadioDefault1.value = "off"
Bootstrap.onclick = ()=>{
    // flexRadioDefault1.value = "on"
    HEAD.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>myMatriceBlog - Accueil</title>
        <link rel="stylesheet" href="./src/pages/CSS/initialisation.css">
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="./src/pages/CSS/finition.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    `
}; Bootstrap.ondblclick = ()=>{
    HEAD.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>myMatriceBlog - Accueil</title>
        <link rel="stylesheet" href="index.css">
    `
}

Materialize.onclick = ()=>{
    HEAD.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>myMatriceBlog - Accueil</title>
        <link rel="stylesheet" href="./src/pages/CSS/initialisation.css">
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="./src/pages/CSS/finition.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    `
}; Materialize.ondblclick = ()=>{
    HEAD.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>myMatriceBlog - Accueil</title>
        <link rel="stylesheet" href="index.css">
    `
}


SwitchLight.onclick = ()=>{
    header.style.backgroundColor = "white"
    footer.style.backgroundColor = "white"
}; SwitchLight.ondblclick = ()=>{
    header.style.backgroundColor = "#1a1a1a"
    footer.style.backgroundColor = "#1a1a1a"
}

Réduire.onclick = ()=>{
    Terminal.style.marginTop = "475px"
}; Réduire.ondblclick = ()=>{
    Terminal.style.marginTop = "50px"
}

Agrandir.onclick = ()=>{
    Terminal.style.width = "1050px"
    Terminal.style.height = "450px"
    Bouttons.style.marginLeft = "80%"

}; Agrandir.ondblclick = ()=>{
    Terminal.style.width = "800px"
    Terminal.style.height = "375px"
    Bouttons.style.marginLeft = "74%"

}; X.onclick = ()=>{
        Terminal.style.display = "none"
}; Découvrir.onclick = ()=>{
    Terminal.style.display = "block"
}; Apprendre.onclick = ()=>{
    UserInput.style.display = "none"
}

UserInput.style.display = "none"
Expérimenter.onclick = ()=>{
    UserInput.style.display = "inline"
    UserInput.style.color = "white"
    UserInput.style.width = "425px"
    UserInput.style.backgroundColor = "black"
    UserInput.style.border = "none"
    UserInput.style.outline = "none"
    UserInput.focus()
}

UserInput.onkeypress = (event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        Paragraphe.innerHTML += `<b style="color: purple;"><i>Installing... ${UserInput.value}</i></b>`
      }
}


// Terminal.onmousedown = function(event) {
//     let shiftX = event.clientX - Terminal.getBoundingClientRect().left;
//     let shiftY = event.clientY - Terminal.getBoundingClientRect().top;
//     Terminal.style.position = 'absolute';
//     Terminal.style.zIndex = 1000;
  
//     moveAt(event.pageX, event.pageY);
  
//     // Déplace la Terminale aux cordonnées (pageX, pageY)
//     // Prenant en compte les changements initiaux
//     function moveAt(pageX, pageY) {
//       Terminal.style.left = pageX - shiftX + 'px';
//       Terminal.style.top = pageY - shiftY + 'px';
//     }
  
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
  
//         // déplace la Terminale à l’évènement mousemove
//         document.addEventListener('mousemove', onMouseMove);
    
//         // dépose la Terminale, enlève les gestionnaires d’évènements dont on a pas besoin
//         Terminal.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         //   Terminal.onmouseup = null;
//         };
  
// };
  
Terminal.ondragstart = function() {
    return false;
};

  
const SlideImages = [
    "./src/media/images/rest.png",
    "./src/media/images/pipeline.png",
    "./src/media/images/index.png"
]

irest.style.display = "inline"
FlecheGauche.onclick = ()=>{
    console.log(FlecheGauche)
    SlideImages.sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.4)
    for (let index = 0; index < SlideImages.length; index++) {
        irest.src = SlideImages[index]
    }
    console.log("#SlideImages", SlideImages)
}

FlecheDroite.onclick = ()=>{
    console.log(FlecheDroite)
    SlideImages.sort(() => Math.random() - 0.4).sort(() => Math.random() - 0.5)
    for (let index = 0; index < SlideImages.length; index++) {
        irest.src = SlideImages[index]
    }
    console.log("#SlideImages", SlideImages)
}




