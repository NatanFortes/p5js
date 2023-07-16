//variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro /2;

//velocidade da Bolinha
let velocidadexBolinha = 3;
let velocidadeyBolinha = 3;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

let colidiu = false;

//Placar do jogo
let MeusPontos = 0;
let PontosDoOponente  = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
 background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
 // verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
 
 
function mostraBolinha (){
circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
xBolinha += velocidadexBolinha;
yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
 if (xBolinha + raio > width || xBolinha - raio < 0){
  velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;}
} 
}

function mostraRaquete(x,y){
rect( x, y, RaqueteComprimento,RaqueteAltura);
}

function movimentaMinhaRaquete(){
if (keyIsDown(UP_ARROW)){
yRaquete -= 10;
}
if (keyIsDown(DOWN_ARROW)){
yRaquete += 10;
}
}  

function verificaColisaoRaquete(){
 if(xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha - raio < yRaquete + RaqueteAltura && yBolinha + raio > yRaquete){
   velocidadexBolinha *= -1;
   raquetada.play();
 } 
}

 function verificaColisaoRaquete(x, y){
   colidiu = 
 collideRectCircle ( x, y, RaqueteComprimento, RaqueteAltura, xBolinha, yBolinha, raio)
  if (colidiu){
   velocidadexBolinha *= -1;
    raquetada.play();
  } 
 }
 
  function movimentaRaqueteOponente(){
 velocidadeyOponente = yBolinha - yRaqueteOponente - RaqueteComprimento /2 -90; 
   yRaqueteOponente += velocidadeyOponente
 }

function incluiPlacar(){
 stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill (color(255, 140,0));
  rect (150,10,40,20);
  fill(255);
  text (MeusPontos, 170, 26);
  fill (color(255,140,0));
  rect (450,10,40,20);
  fill (255);
  text ( PontosDoOponente, 470, 26);
}

function marcaPonto(){
 if (xBolinha > 590){
   MeusPontos += 1;
   ponto.play();
 }
  if (xBolinha < 10){
    PontosDoOponente += 1;
    ponto.play();
  }
}