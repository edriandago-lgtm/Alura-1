# 🎨 Monalisa Interativa em p5.js

Uma recriação interativa da famosa pintura **"Monalisa"** de Leonardo da Vinci usando **p5.js**, onde os olhos acompanham o movimento do cursor do mouse em tempo real!

## ✨ Características Principais

✅ **Olhos Interativos** - Os olhos seguem o cursor do mouse dinamicamente  
✅ **Cores Originais** - Paleta de cores fiel à obra original da Monalisa  
✅ **Técnica Sfumato** - Implementa as sombras suaves características de Leonardo da Vinci  
✅ **Design Responsivo** - Adapta-se perfeitamente a qualquer tamanho de tela  
✅ **Interface Elegante** - Tema terroso e sofisticado inspirado na obra  

## 🎨 Paleta de Cores Utilizadas

```javascript
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
```

## 📋 Estrutura do Projeto

```
monalisa/
├── index.html      # Página principal
├── sketch.js       # Código p5.js (lógica da Monalisa)
├── style.css       # Estilos CSS
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe os 3 arquivos: `index.html`, `sketch.js` e `style.css`
2. Coloque todos em uma pasta chamada `monalisa`
3. Abra `index.html` em um navegador web
4. Mova o mouse e veja os olhos acompanharem! 👀

### Opção 2: Ver Online (GitHub Pages)
Se você tem GitHub Pages habilitado, acesse através da URL do seu repositório:
```
https://seu-username.github.io/seu-repo/monalisa/
```

## 🛠️ Código Principal - Rastreamento dos Olhos

O core da interatividade está na função `desenharOlhoInterativo()`:

```javascript
function desenharOlhoInterativo(xOlho, yOlho, tamanho) {
    // Branco do olho
    fill(color(COLORS.branco));
    stroke(color(COLORS.cabelo));
    strokeWeight(1);
    ellipse(xOlho, yOlho, tamanho * 1.5, tamanho * 1.8);
    
    // 🎯 Calcular ângulo para a íris seguir o mouse
    let dx = mouseX - xOlho;
    let dy = mouseY - yOlho;
    let angulo = atan2(dy, dx);  // Atan2 calcula o ângulo em radianos
    
    // Distância máxima da íris do centro
    let distanciaMaxima = tamanho * 0.35;
    
    // Posição da íris (usando trigonometria)
    let irisX = xOlho + cos(angulo) * distanciaMaxima;
    let irisY = yOlho + sin(angulo) * distanciaMaxima;
    
    // Desenhar íris
    fill(color(COLORS.olho));
    noStroke();
    ellipse(irisX, irisY, tamanho * 0.8, tamanho * 0.9);
    
    // Pupila
    fill(0);
    ellipse(irisX, irisY, tamanho * 0.35, tamanho * 0.45);
    
    // Reflexo de luz (brilho realista)
    fill(255);
    ellipse(irisX - tamanho * 0.15, irisY - tamanho * 0.15, tamanho * 0.2, tamanho * 0.25);
}
```

### Como Funciona? 🔍

1. **Cálculo do Ângulo**: Usa `atan2(dy, dx)` para encontrar o ângulo entre o olho e o mouse
2. **Posicionamento da Íris**: Usa `cos()` e `sin()` para calcular a nova posição
3. **Movimento Limitado**: A íris nunca sai do branco do olho (distancia máxima)
4. **Reflexo de Luz**: Adiciona um ponto brilhante para realismo

## 🎓 Conceitos Educacionais

- **Trigonometria**: `atan2()`, `cos()`, `sin()` para movimento angular
- **Geometria**: Elipses para criar formas arredondadas
- **Vetores**: Cálculo de diferenças (dx, dy)
- **Programação Modular**: Funções reutilizáveis
- **Design Responsivo**: Cálculos proporcionais ao canvas

## 📚 Dependências

- [p5.js v1.7.0](https://p5js.org/) - Biblioteca JavaScript para criação gráfica
  - Carregada via CDN: `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js`

## 🎯 Possíveis Extensões e Melhorias

- 🎭 Adicionar mais expressões faciais
- 🔊 Implementar sons interativos ao mover o mouse
- ✨ Efeitos de animação suave (transições)
- 🖼️ Criar variações artísticas (diferentes poses, expressões)
- 🎨 Adicionar mais detalhes na pintura (roupas, cabelo mais realista)
- 👥 Incluir outras personalidades históricas
- 📊 Estatísticas de rastreamento do mouse

## 💡 Dicas de Desenvolvimento

### Ajustar o Tamanho
Modifique na função `setup()`:
```javascript
let width = Math.min(800, container.clientWidth - 20);  // Largura máxima
let height = width * 1.3;  // Proporção altura/largura
```

### Customizar Cores
Edite o objeto `COLORS` no início do `sketch.js`:
```javascript
const COLORS = {
    pele: '#SEU_HEX_AQUI',
    // ... outras cores
};
```

### Melhorar o Realismo
- Aumente os valores de `strokeWeight()` para traços mais espessos
- Ajuste `globalAlpha` para sombras mais suaves ou pronunciadas
- Use `curveVertex()` para curvas mais suaves

## 🔗 Referências

- [Documentação p5.js](https://p5js.org/reference/)
- [Monalisa - Wikipédia](https://pt.wikipedia.org/wiki/Monalisa)
- [Leonardo da Vinci - Técnica Sfumato](https://pt.wikipedia.org/wiki/Sfumato)

## 📝 Licença

Projeto educacional inspirado na obra-prima de Leonardo da Vinci.

---

**Desenvolvido com ❤️ usando p5.js**

*Mantém a essência da Monalisa: misteriosa, elegante e eternamente cativante!* ✨
