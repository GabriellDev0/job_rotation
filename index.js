//1. Ao final do processamento, qual será o valor da variável SOMA?

const INDICE = 13;
let SUM = 0, K = 0;

while ( K < INDICE ) {
    K += 1
    SUM += K
}

console.log(SUM)

// Total soma = 91
// Enquanto K for menor que 13
// Ele vai pegar o valor de K e somar +1
// Depois a soma vai pegar o valor dela + o valor de K
// Assim volta o looping até K continuar sendo menor que 13.


// 2. Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const number = 21; // número a ser verificado

let a = 0, b = 1, fib = 0;

while (fib < number) {
  fib = a + b;
  a = b; 
  b = fib; 
}

if (fib === number) {
  console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`);
}

// O programa inicia definindo o número a ser verificado (no caso, 21) e criando três variáveis: a, b e fib. 
// A variável a armazena o valor anterior de b, b armazena o valor anterior de fib e fib armazena a soma de a e b.
// O programa utiliza um laço while para calcular os números da sequência de Fibonacci até que o próximo número seja maior ou igual ao número informado. 
// Quando isso acontece, o programa verifica se o número informado é igual ao número que está na variável fib.
// Se for, o programa exibe uma mensagem indicando que o número pertence à sequência de Fibonacci. 
// Caso contrário, o programa exibe uma mensagem indicando que o número não pertence à sequência.


// 3. Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ( 9 )

// b) 2, 4, 8, 16, 32, 64, ( 128 )

// c) 0, 1, 4, 9, 16, 25, 36, ( 49 )

// d) 4, 16, 36, 64, 100

// e) 1, 1, 2, 3, 5, 8, 13

// f) 2,10, 12, 16, 17, 18, 19, 20

// Resposta a) A lógica é adicionar 2 a cada termo, portanto o próximo número é 9.

// Resposta b) A lógica é multiplicar cada termo por 2, portanto o próximo número é 128.

// Resposta c) A lógica é elevar cada número ao quadrado, portanto o próximo número é 49.

// Resposta d) A lógica dessa sequência é que cada número é obtido somando-se 4 ao quadrado do seu índice na sequência. Ou seja, o primeiro número é 4, que é igual a 4 + 0^2, o segundo número é 16, que é igual  a 4 + 1^2, o terceiro número é 36, que é igual a 4 + 2^2, o quarto número é 64, que é igual a 4 + 3^2. portanto o próximo número é 100.

// Resposta e) A lógica é somar os dois termos anteriores para obter o próximo termo, portanto o próximo número é 13.

// Resposta f) Não entendi muito bem, mas seguindo uma lógica meio óbvia, apenas somar mais 1.


// 4. Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// Resposta: Nessa questão não precisamos fazer cálculo, pois quando ambos os carros se encontrarem eles vão permanecer na mesma distância do ponto de referência que é o Ribeirão Preto.
// Mas caso a referência fosse a cidade para qual eles estavam indo, o carro ganharia com toda certeza, pois além de mais rápido não precisaria parar em pedágio.


// 5. Escreva um programa que inverta os caracteres de um string.

const string = "exemplo de string"; // String a ser invertida
let invertedString = ""; // Variável para armazenar a string invertida

// Loop for que percorre a string da última posição até a primeira
for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i]; // Adiciona o caractere atual na posição invertida na nova string
}

console.log(invertedString); // Imprime a string invertida no console
