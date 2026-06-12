// Cores originais da Monalisa baseadas na análise da obra
const COLORS = {
    pele: '#DDB892',      // Tom de pele característico
    peleClara: '#E8C4A0', // Pele mais clara
    cabelo: '#4A3728',    // Cabelo escuro
    olho: '#3D2817',      // Olho escuro
    branco: '#FFFFFF',    // Branco do olho
    boca: '#A85A4E',      // Tons de boca
    fundo: '#9B8B6F',     // Fundo terroso
    sombra: '#6B5B47',    // Sombras
    roxo: '#7B5A5E'       // Tons roxos
};

function setup() {
    let container = document.getElementById('sketch-container');
    let width = Math.min(800, container.clientWidth - 20);
    let height = width * 1.3;
    
    let canvas = createCanvas(width, height);
    canvas.parent('sketch-container');
}

function draw() {
    background(color(COLORS.fundo));
    
    // Desenhar a Monalisa
    desenharMonalisa();
    
    // Desenhar olhos interativos
    desenharOlhos();
    
    // Desenhar boca característica
    desenharBoca();
}

function desenharMonalisa() {
    let larguraRosto = width * 0.4;
    let alturaRosto = height * 0.55;
    let xRosto = width * 0.5;
    let yRosto = height * 0.35;
    
    // Cabeça (forma oval)
    fill(color(COLORS.pele));
    noStroke();
    ellipse(xRosto, yRosto, larguraRosto, alturaRosto);
    
    // Cabelo (superior)
    fill(color(COLORS.cabelo));
    arc(xRosto, yRosto - alturaRosto * 0.2, larguraRosto * 1.1, alturaRosto * 0.6, PI, TWO_PI);
    
    // Cabelo (laterais)
    fill(color(COLORS.cabelo));
    arc(xRosto - larguraRosto * 0.45, yRosto + alturaRosto * 0.05, larguraRosto * 0.4, alturaRosto * 0.5, 0, PI);
    arc(xRosto + larguraRosto * 0.45, yRosto + alturaRosto * 0.05, larguraRosto * 0.4, alturaRosto * 0.5, 0, PI);
    
    // Pescoço
    fill(color(COLORS.peleClara));
    rect(xRosto - larguraRosto * 0.15, yRosto + alturaRosto * 0.25, larguraRosto * 0.3, alturaRosto * 0.2);
    
    // Sombras faciais (Leonardo da Vinci - sfumato)
    fill(color(COLORS.sombra));
    globalAlpha = 0.2;
    // Sombra sob os olhos
    ellipse(xRosto - larguraRosto * 0.15, yRosto + alturaRosto * 0.05, larguraRosto * 0.2, alturaRosto * 0.15);
    ellipse(xRosto + larguraRosto * 0.15, yRosto + alturaRosto * 0.05, larguraRosto * 0.2, alturaRosto * 0.15);
    globalAlpha = 1.0;
    
    // Sobrancelhas
    stroke(color(COLORS.cabelo));
    strokeWeight(3);
    noFill();
    arc(xRosto - larguraRosto * 0.15, yRosto - alturaRosto * 0.1, larguraRosto * 0.25, alturaRosto * 0.1, PI, TWO_PI);
    arc(xRosto + larguraRosto * 0.15, yRosto - alturaRosto * 0.1, larguraRosto * 0.25, alturaRosto * 0.1, PI, TWO_PI);
    
    // Nariz
    noFill();
    stroke(color(COLORS.sombra));
    strokeWeight(2);
    line(xRosto, yRosto - alturaRosto * 0.05, xRosto, yRosto + alturaRosto * 0.15);
    
    // Orelha direita
    fill(color(COLORS.peleClara));
    noStroke();
    ellipse(xRosto + larguraRosto * 0.52, yRosto - alturaRosto * 0.05, larguraRosto * 0.15, alturaRosto * 0.25);
}

function desenharOlhos() {
    let larguraRosto = width * 0.4;
    let xRosto = width * 0.5;
    let yRosto = height * 0.35;
    
    // Olho esquerdo
    let olhoEsquerdoX = xRosto - larguraRosto * 0.12;
    let olhoEsquerdoY = yRosto - larguraRosto * 0.05;
    desenharOlhoInterativo(olhoEsquerdoX, olhoEsquerdoY, larguraRosto * 0.12);
    
    // Olho direito
    let olhoDireitoX = xRosto + larguraRosto * 0.12;
    let olhoDireitoY = yRosto - larguraRosto * 0.05;
    desenharOlhoInterativo(olhoDireitoX, olhoDireitoY, larguraRosto * 0.12);
}

function desenharOlhoInterativo(xOlho, yOlho, tamanho) {
    // Branco do olho
    fill(color(COLORS.branco));
    stroke(color(COLORS.cabelo));
    strokeWeight(1);
    ellipse(xOlho, yOlho, tamanho * 1.5, tamanho * 1.8);
    
    // Calcular ângulo para a íris seguir o mouse
    let dx = mouseX - xOlho;
    let dy = mouseY - yOlho;
    let angulo = atan2(dy, dx);
    
    // Distância máxima da íris do centro
    let distanciaMaxima = tamanho * 0.35;
    
    // Posição da íris
    let irisX = xOlho + cos(angulo) * distanciaMaxima;
    let irisY = yOlho + sin(angulo) * distanciaMaxima;
    
    // Desenhar íris (cores originais)
    fill(color(COLORS.olho));
    noStroke();
    ellipse(irisX, irisY, tamanho * 0.8, tamanho * 0.9);
    
    // Pupila
    fill(0);
    ellipse(irisX, irisY, tamanho * 0.35, tamanho * 0.45);
    
    // Reflexo de luz (brilho característico)
    fill(255);
    ellipse(irisX - tamanho * 0.15, irisY - tamanho * 0.15, tamanho * 0.2, tamanho * 0.25);
}

function desenharBoca() {
    let larguraRosto = width * 0.4;
    let xRosto = width * 0.5;
    let yRosto = height * 0.35;
    
    // Boca (sorriso enigmático)
    stroke(color(COLORS.boca));
    strokeWeight(2);
    noFill();
    
    // Curva superior do sorriso
    beginShape();
    curveVertex(xRosto - larguraRosto * 0.1, yRosto + larguraRosto * 0.15);
    curveVertex(xRosto - larguraRosto * 0.1, yRosto + larguraRosto * 0.15);
    curveVertex(xRosto, yRosto + larguraRosto * 0.2);
    curveVertex(xRosto + larguraRosto * 0.1, yRosto + larguraRosto * 0.15);
    curveVertex(xRosto + larguraRosto * 0.1, yRosto + larguraRosto * 0.15);
    endShape();
    
    // Linha da boca
    strokeWeight(1.5);
    line(xRosto - larguraRosto * 0.1, yRosto + larguraRosto * 0.15, xRosto + larguraRosto * 0.1, yRosto + larguraRosto * 0.15);
}
