
/*
//Desafios lista 1

// 01
let titulo = document.querySelector ('h1');
titulo.innerHTML = ('Hora do Desafio')

// 02
function verificarChute() {
console.log('O botão foi clicado!')
}

// 03

function euAmojs(){
    alert ('Eu amo js')
}

//04

function euEstive(){
    let nomeCidade = prompt ('diga uma cidade')
    alert (`estive em ${nomeCidade} e lembrei de você`)
}

//05
function somaDenumeros(){
    let valor1 = parseInt(prompt('digite o o primeiro numero'));
    let valor2 = parseInt(prompt('digite o segundo valor'));
    let resultado = valor1 + valor2;
    alert(`${valor1} + ${valor2} = ${resultado}`)
}



//Desafios lista 2

// 01
function exibirHello(){
    console.log('hello word');
}
exibirHello();

// 02 
function exibirNome(nome){
    console.log(`ola,${nome}`);
}

exibirNome ('Gabriel');

// 03
function dobrar(numero){
    return numero * 2
}

let valorDobrado = dobrar(10);
console.log(valorDobrado)

// 04
function calculomedia ( n1,n2,n3){
    return (n1 + n2 + n3) / 3;
}

let media = calculomedia (5,5,5);
console.log(media);

// 05
function numeroMaior (v1, v2){ 
    if (v1 > v2)
        return v1;
    else return v2;
 }
 let maiorDeles = numeroMaior (1,99)
 console.log (maiorDeles)
 

 // 06
 function quadrado(NUmero){
    return 2 * 2
 }
console.log (quadrado(2));


//Desafios lista 3

//01
// não consegui fazer
function calculaIMC(altura, peso){

  let imc = peso / (alturaMetros * alturaMetros);
}

//02
function fatorial(numero) {
    let resultado = numero;
    for (let i = 1; i < numero; i++){
        resultado = resultado * i;
    }
   return resultado;
}  
let numero = 5;
let resultado = fatorial(numero)
console.log(`O fatorial de ${numero} é ${resultado}`);

//03
// tofixed(2) serve para cortar o valor, se é 3,1415 ele arredonda para 3,14 /// obs: botei a cotação de 2025
function converteDinheiro (valorDollar){
    let contaçãoDollar = 5.57;
    let valorReais = valorDollar * contaçãoDollar;
    return valorReais.toFixed(2)
}

let valorDollar = 7
let valorReais = converteDinheiro(valorDollar)
console.log(`${valorDollar} dolares equivalem a R$${valorReais}`);

//04
function calcularTamanho (altura1, largura2){
    let area = altura1 * largura2;
    let peremitro = 2 * (altura1 + largura2);
    console.log(`area --> ${area} metros quadrados`);
    console.log(`area --> ${peremitro} metros`);
}

let altura1 = 1;
let largura2 = 1;
calcularTamanho(altura1,largura2);

//05 
// sempre que você precisar fazer contas com círculos (calcular o tamanho da borda, a área, etc.), você usa Math.PI
function calcularSalaCircular(raio){
    let area = Math.PI * raio * raio;
    let peremitro = 2 * Math.PI * raio;
    
    console.log(`a area da sala -->${area.toFixed(2)}metros quadrados`)
    console.log(`o perimetro da sala -->${peremitro.toFixed(2)}metros`)
}

let raio = 8;
calcularSalaCircular(raio)

//06
//o "i" é usado para controlar qual parte de uma tarefa repetitiva você está fazendo
function Tabuada(numeroTabuada){
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabuada * i;
        console.log(`${numeroTabuada} x ${i} = ${resultado}`);

    }
}
let numeroTabuada = 4
Tabuada (numeroTabuada)



//Desafios lista 4

//01
let listaGenerica = [];

//02
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

//03
let linguagensDeProgramacao2 = ['JavaScript','C','C++','Kotlin','Python'];
linguagensDeProgramacao.push = ['java','ruby','golang'];

//04
lista1 = ['teclado','mouse','monitor']
console.log(lista1[0])

//05
lista1 = ['carro','moto','barco']
console.log(lista1[1])

//06
lista1 = ['android','motorola','iphone']
console.log(lista1[2])
*/