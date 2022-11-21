
let HEAD = document.querySelector("head")
// flexRadioDefault1.value = "off"
flexRadioDefault1.onClick = ()=>{
    flexRadioDefault1.value = "on"
    HEAD.innerHTML += `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        `
    console.log(HEAD)

}

const SlideImages = [
    "./src/media/images/rest.png",
    "./src/media/images/ipipeline.png",
    "./src/media/images/iindex.png"
]

// irest.style.display = "inline"
// ipipeline.style.display = "inline"
// iindex.style.display = "inline"


// FlecheGauche.style.zIndex = "10"
FlecheGauche.onclick = ()=>{
    console.log(FlecheGauche)
    
    for (let index = 0; index < SlideImages.length; index++) {
        irest.src = SlideImages[index]
    }

        // for (let index = 1; index < 25; index++) {
        //     Slide.style.marginLeft = `-${index}px`;
        //     setInterval(() => {
        //         Slide.style.marginLeft = `-${index}px`;
        //     }, 1000);
        // }
//     if (irest.style.display = "inline") {
//     irest.style.display = "none"
//     ipipeline.style.display = "none"
//     iindex.style.display = "inline"
// }else if(ipipeline.style.display = "inline") {
//     irest.style.display = "inline"
//     ipipeline.style.display = "none"
//     iindex.style.display = "none"
// }else if(iindex.style.display = "inline") {
//     irest.style.display = "none"
//     ipipeline.style.display = "inline"
//     iindex.style.display = "none"
// }
    
}

FlecheDroite.onclick = ()=>{
    console.log(FlecheDroite)
    Slide.style.marginLeft = "+5px";
//     if (irest.style.display = "inline") {
//     irest.style.display = "none"
//     ipipeline.style.display = "inline"
//     iindex.style.display = "none"
// }

// if (ipipeline.style.display = "inline") {
//     irest.style.display = "none"
//     iindex.style.display = "inline"
//     ipipeline.style.display = "none"
// }

// if (iindex.style.display = "inline") {
//     irest.style.display = "inline"
//     iindex.style.display = "none"
//     ipipeline.style.display = "none"
// }
}




