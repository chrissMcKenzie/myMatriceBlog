var a = 1
var b = "lkdnc"
let c = true
let d = false
let e = undefined
let f = {}
let g = []
let h = Number
let i = new Boolean()
let j = function (params) {
    
}

function Pilo(param){
    return param * 2
}
//let arg = 5
Pilo(5)

const Pilon = (param) => {
    return param * 2
}

param => param * 2;
(param1, param2) => param1 * 2
parami => {parami * 2}

const Data = []
for (let index = 0; index < Data.length; index++) {
    const element = Data[index];
}

Data.forEach(element => {
    return element
});

for (const key in Data) {
    if (Object.hasOwnProperty.call(Data, key)) {
        const element = Data[key];
        
    }
}

for (const iterator of Data) {
    
}

let estPrésent = false
if(estPrésent){
    console.log("Présent")
}else if(estPrésent){

}else{

}

let Data2 = ["Pomme", "Poire", "Bannane"]
console.log(Data.length)

console.log(Data2[0])
Data2.push("Fraise")
console.log(Data2)

Data2.unshift("Framboise")
console.log(Data2)

Data2.pop()
Data2.shift()
console.log(Data2)

//Data2.replace("Poire", "Abricot")
// Data2.slice("Poire", "Abricot")
// console.log(Data2, "slice")
Data2[1] = "Abricot"
console.log(Data2, "[1]")

Data2.splice(1, 1, "Abricot")
console.log(Data2, "splice")

console.log(Data2.slice(1,3), "slice")

console.log(Data2.join(""))

console.log(Data2.reduce((acc, valeurInitial) => acc + valeurInitial))

console.log(true && true)
console.log(true && true)
console.log(false && true)
console.log(true || false)
console.log(false || false)
console.log(true && false && true)
console.log(false || false || true)
console.log(true || false && true)
console.log(false && false || true)
console.log(false && (false || true))

console.log(!true)

// rest opérator ()
// const [a, b, ...toto] = [1, 2, 3, 4, 5, 6]
// console.log(toto)
// const [a, b, ...toto] = [1, 2, 3, 4, 5, 6]
// console.log(toto)

console.log(map((fruit) => fruit+"s"))


function TestPromise(promise) {
    promise.then((data)=>{
        data.map(i=>{ console.log(i) })
    }) // if the promise resolves, this is executed
    .catch((erreur)=>{
        return
    })
}

const bob = {
    name: "bob",
    age: 32,
    sayHello(){
        console.log(`Good morning, my name is ${this.name} and i ${this.age} years old`);
    }
}

const alice = {
    name: "alice",
    age: 56.5,
    sayHello(){
        console.log(`Good morning, my name is ${this.name} and i ${this.age} years old`);
    }
}

function personne(name, age) {
    this.name = name
    this.age = age

    personne.prototype.sayHello = () => {
        console.log(`Good morning, my name is ${this.name} and i ${this.age} years old`);
    }
    
}; personne.prototype.sayHello = function() {
    console.log(`Good morning, my name is ${this.name} and i ${this.age} years old`);
}

const ete = new personne("Bob", 45)
ete.sayHello()

class Bob{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    sayHello(){
        console.log(`Good morning, my name is ${this.name} and i ${this.age} years old`);
    }
}