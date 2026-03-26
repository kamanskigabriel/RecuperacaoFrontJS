//Gabriel Kamanski Oliveira: 2, 8, 12, 13, 14

//-------------------------------------------
    //questao 2
    function comprimento(){
const comp = prompt("Digite o comprimento do terreno")
const largura = prompt("Digite a largura do terreno")
const resultado = comp * largura

alert("A área possui " + resultado + " m por quadrado")
    }
const buttoncomprimento = document.getElementById("comprimento")
buttoncomprimento.addEventListener('click', () =>{ comprimento()})
//-------------------------------------------
    //qustao 8
    function idade () {
        const idade = Number(prompt("Digite a idade"))
        const resultado = 52 * idade

alert("Essa pessoa viveu " + resultado)
    }
    const buttonidade = document.getElementById("idade")
    buttonidade.addEventListener('click', () =>{idade ()})
//-------------------------------------------
    //questao 12
function multiplo () {
    const idade = Number(prompt("Descubra se vc pode votar"))

if (idade < 16) {
    alert("Não pode")
}
else if (idade === 16 || idade === 17) {
    alert("Pode")
}
else {
    alert("Deve")
}
}
const buttonmultiplo = document.getElementById("multiplo")
buttonmultiplo.addEventListener('click', () =>{multiplo()})
//-------------------------------------------
    //questao 13
    function divisao () {

const compra = Number(prompt("Digite o valor da compra"))
const desconto = compra * (1 - 5 / 100)

if (compra > 100) {
    alert("Com 5% de desconto o valor fica: " + desconto)
}
else {
    alert("Sem desconto")
}
    }
const buttondivisao = document.getElementById("divisao")
buttondivisao.addEventListener('click', () =>{divisao() })
//-------------------------------------------
    //questao 14
function horas (){
    const temp = Number(prompt("Digite a temperatura"))

if (temp < 15) {
    alert("Frio")
}
else if (temp >= 15 && temp <= 25) {
    alert("Agradavel ")
}
else {
    alert("Quente ")
}
}
const buttonhoras = document.getElementById("horas")
buttonhoras.addEventListener('click', () => {horas()})