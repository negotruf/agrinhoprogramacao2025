let scene = 0;
let time = 0;
let page = 0; // Página atual (0 a 6)

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(255);

  if (page === 0) {
    showIntroduction();
  } else if (page === 1) {
    showInfoPage();
  } else if (page === 2) {
    showBenefitsPage();
  } else if (page === 3) {
    showExtraPage1();
  } else if (page === 4) {
    showExtraPage2();
  } else if (page === 5) {
    showExtraPage3();
  } else if (page === 6) {
    showDeveloperInfo();  // Página de informações sobre o desenvolvedor
  }
}

function showIntroduction() {
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(0);
  text("Agrinho: Conexão Campo e Cidade", width / 2, height / 4);

  textSize(18);
  text("Explore a importância de cada ambiente", width / 2, height / 2 - 10);

  // Botão "Próxima Página" na tela inicial
  fill(76, 175, 80);
  rect(width / 2 - 75, height - 100, 150, 40, 10);
  fill(255);
  textSize(16);
  text("Próxima Página", width / 2, height - 80);

  if (mouseIsPressed &&
      mouseX > width / 2 - 75 && mouseX < width / 2 + 75 &&
      mouseY > height - 100 && mouseY < height - 60) {
    page = 1;
  }
}

// Página 2: Informações sobre Campo e Cidade
function showInfoPage() {
  textAlign(LEFT, TOP);
  textSize(22);
  fill(0);
  text("Campo e Cidade: Realidades Conectadas", 20, 20);

  textSize(16);
  text("• O campo é fonte de alimentos, ar puro e tranquilidade. É onde nasce o que alimenta o mundo.\n\n" +
       "• A cidade oferece oportunidades, acesso à saúde, educação e tecnologia. Ela conecta pessoas e ideias.\n\n" +
       "Ambos têm importância vital e se complementam no dia a dia.", 20, 70, width - 40);

  drawNavButtons();
}

function showBenefitsPage() {
  textSize(22);
  fill(0);
  textAlign(CENTER);
  text("Benefícios do Campo e da Cidade", width / 2, 40);

  textSize(16);
  textAlign(LEFT);
  text("Campo:\n- Ar puro e natureza\n- Produção de alimentos\n- Estilo de vida mais calmo", 50, 90);
  text("Cidade:\n- Mais oportunidades de trabalho\n- Acesso a serviços públicos\n- Cultura e educação", 300, 90);

  drawNavButtons();
}

// Página Extra 1
function showExtraPage1() {
  textSize(22);
  fill(0);
  textAlign(CENTER);
  text("Desafios no Campo", width / 2, 40);

  textSize(16);
  textAlign(LEFT);
  text("• Acesso limitado à internet e educação\n" +
       "• Dificuldade com transporte e saúde\n" +
       "• Êxodo rural devido à falta de oportunidades", 50, 90);

  drawNavButtons();
}

// Página Extra 2
function showExtraPage2() {
  textSize(22);
  fill(0);
  textAlign(CENTER);
  text("Desafios na Cidade", width / 2, 40);

  textSize(16);
  textAlign(LEFT);
  text("• Poluição e trânsito intenso\n" +
       "• Estresse e correria do cotidiano\n" +
       "• Desigualdade social e violência", 50, 90);

  drawNavButtons();
}

// Página Extra 3
function showExtraPage3() {
  textSize(22);
  fill(0);
  textAlign(CENTER);
  text("Como Unir os Dois Mundos?", width / 2, 40);

  textSize(16);
  textAlign(LEFT);
  text("• Incentivar a agricultura urbana\n" +
       "• Valorizar os produtos locais\n" +
       "• Levar tecnologia ao campo\n" +
       "• Aproximar as pessoas através da educação e cultura", 50, 90);

  drawNavButtons();
}

// Página Final: Informações sobre o Desenvolvedor
function showDeveloperInfo() {
  textAlign(CENTER, CENTER);
  textSize(22);
  fill(0);
  text("Sobre o Desenvolvedor", width / 2, 40);

  textSize(16);
  textAlign(LEFT);
  text("Maick Cassiano\n" +
       "Idade: 16 anos\n" +
       "Estudante do Colégio Helena Proerf\n\n" +
       "Agradeço a todos que acompanharam este projeto!", 50, 90);

  drawNavButtons();
}

function drawNavButtons() {
  // Próxima Página
  fill(76, 175, 80);
  rect(width - 180, height - 50, 150, 35, 10);
  fill(255);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Próxima Página", width - 105, height - 32);

  // Voltar
  fill(255, 87, 34);
  rect(30, height - 50, 100, 35, 10);
  fill(255);
  text("Voltar", 80, height - 32);

  if (mouseIsPressed) {
    if (mouseX > width - 180 && mouseX < width - 30 && mouseY > height - 50 && mouseY < height - 15) {
      page = (page + 1) % 7;  // Agora temos 7 páginas no total
    }
    if (mouseX > 30 && mouseX < 130 && mouseY > height - 50 && mouseY < height - 15) {
      page = (page - 1 + 7) % 7;  // Voltar de forma cíclica
    }
  }
}
