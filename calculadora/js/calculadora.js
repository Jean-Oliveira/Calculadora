// incluir valor do botao cliado.
function insert(num) {
    document.querySelector(".tela").innerHTML += num;
}
// apaga valor
function back() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.substring(
      0,
      tela.length - 1
    );
  }
// limpa o campo
function clean() {
    document.querySelector(".tela").innerHTML = " ";
}
// calcula utilizando a função 'eval()'.
function calcular() {
    let tela = document.querySelector(".tela").innerHTML;
    if (tela) {
      document.querySelector(".tela").innerHTML = eval(tela);
    } else {
      document.querySelector(".tela").innerHTML = "Sem comando...";
    }
  }
//   troca sinal positivo negativo
  function PosNeg() {
    let conv = document.querySelector(".tela")
        
        conv = conv.textContent;
        conv = conv * (-1); 
        console.log(conv);

        document.querySelector(".tela").innerHTML = conv;
  }
// porcetagem
  function Poscem() {
    let conv = document.querySelector(".tela")
        
        conv = conv.textContent;
        conv = conv / 100; 
        console.log(conv);

        document.querySelector(".tela").innerHTML = conv;
  }
























































// var calc = document.querySelector("#botao0")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao0 = document.querySelector('#botao0');
//         botao0=botao0.textContent;
//         console.log(botao0);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao0;
        
//     })

//     var calc = document.querySelector("#botao1")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao1 = document.querySelector('#botao1');
//         botao1=botao1.textContent;
//         console.log(botao1);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao1;
              
//     })
//     var calc = document.querySelector("#botao2")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao2 = document.querySelector('#botao2');
//         botao2=botao2.textContent;
//         console.log(botao2);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao2;
        
//     })

//     var calc = document.querySelector("#botao3")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao3 = document.querySelector('#botao3');
//         botao3=botao3.textContent;
//         console.log(botao3);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao3;
        
//     })

//     var calc = document.querySelector("#botao4")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao4 = document.querySelector('#botao4');
//         botao4=botao4.textContent;
//         console.log(botao4);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao4;
        
//     })

//     var calc = document.querySelector("#botao5")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao5 = document.querySelector('#botao5');
//         botao5=botao5.textContent;
//         console.log(botao5);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao5;
        
//     })

//     var calc = document.querySelector("#botao6")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao6 = document.querySelector('#botao6');
//         botao6=botao6.textContent;
//         console.log(botao6);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao6;
        
//     })

//     var calc = document.querySelector("#botao7")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao7 = document.querySelector('#botao7');
//         botao7=botao7.textContent;
//         console.log(botao7);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao7;
        
//     })

//     var calc = document.querySelector("#botao8")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao8 = document.querySelector('#botao8');
//         botao8=botao8.textContent;
//         console.log(botao8);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao8;
        
//     })

//     var calc = document.querySelector("#botao9")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botao9 = document.querySelector('#botao9');
//         botao9=botao9.textContent;
//         console.log(botao9);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botao9  + resultado;
        
//     })

//     var calc = document.querySelector("#botaoAC")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botaoAC = document.querySelector('#botaoAC');
//         botaoAC=botaoAC.textContent;
//         console.log(botaoAC);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = ' ';
        
//     })

//     var calc = document.querySelector("#botaoDiv")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botaoDiv = document.querySelector('#botaoDiv');
//         botaoDiv=botaoDiv.textContent;
//         console.log(botaoDiv);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botaoDiv;
        
//     })

//     var calc = document.querySelector("#botaoX")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botaoX = document.querySelector('#botaoX');
//        // botaoX=botaoX.textContent;
//         //console.log(botaoX);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = '*';
        
//     })

//     var calc = document.querySelector("#botaoMenos")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botaoMenos = document.querySelector('#botaoMenos');
//         botaoMenos=botaoMenos.textContent;
//         //console.log(botaoMenos);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botaoMenos;
        
//     })

//     var calc = document.querySelector("#botaoMais")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botaoMais = document.querySelector('#botaoMais');
//         botaoMais=botaoMais.textContent;
//         //console.log(botaoMais);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botaoMais;
        
//     })

//     var calc = document.querySelector("#botaoVirg")
//     calc.addEventListener("click", function(Event) {
//         Event.preventDefault();
        
//         var botaoVirg = document.querySelector('#botaoVirg');
//         botaoVirg=botaoVirg.textContent;
//         //console.log(botaoVirg);

//         var resultado = document.querySelector('.resultado');
//         resultado.value = botaoVirg;
        
//     })
    