ConnexionForm.style.display = "none"
ConnexionForm.style.visibility = "hidden"

SeConnecter.onclick =() =>{
    ConnexionForm.style.display = "block"
    ConnexionForm.style.visibility = "visible"

}; FormulaireConnexion.onclick = ()=>{
    ConnexionForm.style.display = "none"
    ConnexionForm.style.visibility = "hidden"
}

const articles = [
    article1, article2, article3, article4, article5
]
articles.map(i => i.onclick = ()=>{
    console.log(i)
})

console.log(articles);