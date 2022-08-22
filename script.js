const qteCartas = Number(prompt('Olá! Com quantas cartas você quer jogar?(Você pode jogar com no mínimo 4 carts e no máximo 14 :)'))
    /*while ( (4 >= qteCartas) && (qteCartas <= 14) && (qteCartas % 2 === 0) ) {
        qteCartas = Number(prompt('Olá! Com quantas cartas você quer jogar?'));
        }*/

let contador = 0;
const baralho = document.querySelector('.baralho');
let figurasCartas = ["Imagens/brazilparrot.gif", "Imagens/brazilparrot.gif", "Imagens/coloridoparrot.gif", "Imagens/coloridoparrot.gif", "Imagens/pirateparrot.gif", "Imagens/pirateparrot.gif", 
"Imagens/popcornparrot.gif", "Imagens/popcornparrot.gif", "Imagens/scientistparrot.gif", "Imagens/scientistparrot.gif", "Imagens/soccerparrot.gif", "Imagens/soccerparrot.gif", "Imagens/sunglassparrot.gif", "Imagens/sunglassparrot.gif"];

console.log(figurasCartas);
let cartasJogo =[];

let indice = 0;
while (indice <qteCartas){
    cartasJogo.push(figurasCartas[indice]);
    indice++;
}
console.log(cartasJogo);
cartasJogo = cartasJogo.sort(comparador)
console.log(cartasJogo);

function comparador() { 
     return Math.random() - 0.5; 
}

while (contador < qteCartas) {
    baralho.innerHTML = baralho.innerHTML + (`<li class="carta" onclick="cartaSelecionada(this)">
    <div class="card">
    <div class="front-face face">
        <img src="Imagens/front2.png" />
    </div>
    <div class="back-face face">
       <img src="${cartasJogo[contador]}" />
    </div>
  </div></li>`);
    contador++;
    }

let cartaP; //Primeira carta selecionada
let cartaS; //Segunda carta selecionada
let tentativa = []; //Array para fazer a comparação

function cartaSelecionada(essa){    
    if(tentativa.length === 0){
        if(essa.classList.contains("selecionada") == false){
            essa.classList.add("selecionada");
                cartaP = essa;
                tentativa.push(essa.innerHTML);
                console.log(cartaP);
        }
    }
    else if (tentativa.length === 1){
        if(essa.classList.contains("selecionada") == false){
            essa.classList.add("selecionada");
            cartaS = essa;
            tentativa.push(essa.innerHTML);
            setTimeout(verificarIgualdade(),1100);
            console.log(cartaS);
        }
    }
}

let qteRodadas = 0;

function verificarIgualdade(){
    qteRodadas++;
    if (tentativa.length === 2){
        if (tentativa[0]===tentativa[1]){
            console.log(tentativa);
            cartaP="";
            cartaS="";
            tentativa = [];
            console.log(qteRodadas);
        }       
        else if (tentativa[0] !== tentativa[1]){
            setInterval(1000);
            alert("errou");
            console.log(cartaP.classList);
            console.log(cartaS);
            console.log(cartaS.classList);
            console.log(cartaP.classList.toggle("selecionada"));
            cartaP.classList.remove("selecionada");
            
            cartaS.classList.remove("selecionada");
            console.log(cartaS.classList);
            cartaP="";
            cartaS="";
            tentativa = [];
            console.log(qteRodadas)
        }
    }
}

let cartasTodas = document.querySelectorAll("selecionada");

if (cartasTodas.length === qteCartas){
    fimDeJogo();
}

function fimDeJogo(){ 
    const fim = prompt(`Você ganhou em ${qteRodadas} rodadas! Você deseja jogar novamente?`);
    if(fim === "sim") 
    {location.reload()}
}