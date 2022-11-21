// console.log(article1)
// console.log(article2)
// console.log(article3)
// console.log(article4)
// console.log(article5)

const articles = [
    article1, article2, article3, article4, article5
]
articles.map(i => i.onClick = ()=>{
    console.log(i)
})

console.log(articles);