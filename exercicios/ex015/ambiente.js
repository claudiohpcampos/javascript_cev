/*
let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()
console.log(` Estes são os vetores: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`${num[4]}`)
*/


let num = [4, 5, 6, 7, 8]

//console.log(num)
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

for(let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num) {
    console.log(num[pos])
}