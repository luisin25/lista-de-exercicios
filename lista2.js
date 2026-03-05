//Criar um programa que mostre se um numero e positivo ou negativo

let num1 = 99;
if (num1>=0) {
    console.log(`o numero ${num1} é positivo`);
} else {
    console.log(`o numero ${num1} e negativo`);
}

//Criar um programa que mostre se um ano é bissexto.
let ano = 2020;
if ((ano % 4 === 0 && ano % 100 !== 0 )) {
    console.log(`o ano ${ano} é bissexto`);
}

//Criar um programa que mostre uma senha e a mensagem de acesso permitido
let senha = "123456";
let senhacorreta = "123456";
if (senha === senhacorreta) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}


//criar um programa para verificar se um numero 12 é divisivel por 2 e por 3.
let numero = 12;
if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(numero + " é divisível por 2 e por 3.");
} else {
    console.log(numero + " não é divisível por 2 e por 3.");
}
//criar um programa para mostrar um desconto de 12% para produtos acima de R$80.
let preco = 700;
let desconto = preco * 0.88;
if (preco >=800){
    console.log(`o valor do desconto e ${desconto}`)
  }  else {
        console.log ("nao tem desconto")
    }
//criar um programa que mostre os numeros de 1 a 10 usando laço de repetição.
for(let i= 1;i<=10;i++){
    console.log(i)
}
// criar um programa que mostre os numeros de 10 a 1 usando laço de repetição
for(let i=10; i<=1; i--){
    console.log(i)
}
//Criar um programa para mostrar apenas os números pares entre 1 e 20

//Criar um programa para mostrar apenas os números impares entre 1 e 20
//Criar um programa para mostrar a tabuada do 5
//Criar um programa para mostrar os números de 1 a 7 usando while
//Criar um programa para mostrar a tabuada do 3 usando while
//Criar um programa para mostrar o fatorial de 5
//Criar um programa para saber se o número 7 é primário
//Criar um programa para calcular a potência de 2³
