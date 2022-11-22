SeConnecter.onclick = ()=>{
    if(Connexion.style.display === "block"){
        Connexion.style.display = "none"
        Connexion.style.visibility = "hidden"
    }

    if(Connexion.style.display === "none"){
        Connexion.style.display = "block"
        Connexion.style.visibility = "visible"
    }

}; FormulaireConnexion.onclick = ()=>{
    Connexion.style.display = "none"
    Connexion.style.visibility = "hidden"
}

const articles = [
    article1, article2, article3, article4, article5
]
articles.map(i => i.onclick = ()=>{
    console.log(i)
})

console.log(articles);