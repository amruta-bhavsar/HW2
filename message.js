function setup() {
  createCanvas(700, 200);
}

function draw() {
  background(220);


  function printA(x, y) {
    //arc
    ellipse(x, y, 10);
    ellipse(x + 3, y - 15, 10);
    ellipse(x + 10, y - 30, 10);
    ellipse(x + 23, y - 40, 10);
    ellipse(x + 38, y - 40, 10);
    ellipse(x + 51, y - 30, 10);
    ellipse(x + 58, y - 15, 10);
    ellipse(x + 61, y, 10);
    //connector line
    ellipse(x + 15, y - 17, 10);
    ellipse(x + 30, y - 17, 10);
    ellipse(x + 45, y - 17, 10);
  }
  function printB(x, y) {
    //straight line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 40, 10);
    //top arc
    ellipse(x + 15, y - 45, 10);
    ellipse(x + 30, y - 45, 10);
    ellipse(x + 45, y - 40, 10);
    ellipse(x + 48, y - 28, 10);
    ellipse(x + 38, y - 20, 10);
    ellipse(x + 25, y - 20, 10);
    ellipse(x + 13, y - 20, 10);
    //bottom arc
    ellipse(x + 15, y + 5, 10);
    ellipse(x + 30, y + 5, 10);
    ellipse(x + 45, y, 10);
    ellipse(x + 50, y - 12, 10);
  }
  function printC(x, y) {
    ellipse(x, y, 10);
    ellipse(x - 15, y - 5, 10);
    ellipse(x - 30, y - 5, 10);
    ellipse(x - 45, y + 2, 10);
    ellipse(x - 50, y + 17, 10);
    ellipse(x - 45, y + 32, 10);
    ellipse(x - 30, y + 40, 10);
    ellipse(x - 15, y + 40, 10);
    ellipse(x, y + 35, 10);
  }
  function printD(x, y) {
    //straight line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 40, 10);
    //arc
    ellipse(x + 15, y - 45, 10);
    ellipse(x + 30, y - 44, 10);
    ellipse(x + 40, y - 35, 10);
    ellipse(x + 45, y - 20, 10);
    ellipse(x + 40, y - 5, 10);
    ellipse(x + 27, y, 10);
    ellipse(x + 13, y, 10);
  }
  function printE(x, y) {
    //vertical line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
    //bottom horizontal line
    ellipse(x + 13, y, 10);
    ellipse(x + 26, y, 10);
    ellipse(x + 39, y, 10);
    //top horizontal line
    ellipse(x + 13, y - 43, 10);
    ellipse(x + 26, y - 43, 10);
    ellipse(x + 39, y - 43, 10);
    //middle horizontal line
    ellipse(x + 13, y - 22, 10);
    ellipse(x + 26, y - 22, 10);
    ellipse(x + 39, y - 22, 10);
  }
  function printF(x, y) {
    //vertical line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
    //top horizontal line
    ellipse(x + 13, y - 43, 10);
    ellipse(x + 26, y - 43, 10);
    ellipse(x + 39, y - 43, 10);
    //middle horizontal line
    ellipse(x + 13, y - 22, 10);
    ellipse(x + 26, y - 22, 10);
    ellipse(x + 39, y - 22, 10);
  }
  function printG(x, y) {
    //arc
    ellipse(x, y, 10);
    ellipse(x - 15, y - 5, 10);
    ellipse(x - 30, y - 5, 10);
    ellipse(x - 45, y + 2, 10);
    ellipse(x - 50, y + 17, 10);
    ellipse(x - 45, y + 32, 10);
    ellipse(x - 30, y + 40, 10);
    ellipse(x - 15, y + 40, 10);
    ellipse(x, y + 35, 10);
    //G part
    ellipse(x, y + 22, 10);
    ellipse(x - 12, y + 22, 10);
    ellipse(x - 24, y + 22, 10);
  }
  function printH(x, y) {
    //left vertical
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
    //middle horizontal
    ellipse(x + 38, y - 20, 10);
    ellipse(x + 25, y - 20, 10);
    ellipse(x + 13, y - 20, 10);
    //right vertical
    ellipse(x + 50, y, 10);
    ellipse(x + 50, y - 13, 10);
    ellipse(x + 50, y - 27, 10);
    ellipse(x + 50, y - 42, 10);
  }
  function printI(x, y) {
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
  }
  function printJ(x, y) {
    ellipse(x - 30, y - 13, 10);
    ellipse(x - 23, y - 3, 10);
    ellipse(x - 10, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
  }
  function printK(x, y) {
    //vertical line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
    //top diagonal
    ellipse(x + 12, y - 18, 10);
    ellipse(x + 24, y - 29, 10);
    ellipse(x + 36, y - 42, 10);
    //bottom diagonal
    ellipse(x + 24, y - 13, 10);
    ellipse(x + 36, y, 10);
  }
  function printL(x, y) {
    //vertical line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
    //horizontal line
    ellipse(x + 13, y, 10);
    ellipse(x + 26, y, 10);
    ellipse(x + 39, y, 10);
  }
  function printM(x, y) {
    //left vertical line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
    //right vertical line
    ellipse(x + 50, y, 10);
    ellipse(x + 50, y - 13, 10);
    ellipse(x + 50, y - 27, 10);
    ellipse(x + 50, y - 42, 10);
    //middle
    ellipse(x + 25, y - 27, 10);
    ellipse(x + 12, y - 34, 10);
    ellipse(x + 38, y - 34, 10);
  }
  function printN(x, y) {
    //left vertical line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 42, 10);
    //right vertical line
    ellipse(x + 45, y, 10);
    ellipse(x + 45, y - 13, 10);
    ellipse(x + 45, y - 27, 10);
    ellipse(x + 45, y - 42, 10);
    //diagonal
    ellipse(x + 12, y - 32, 10);
    ellipse(x + 22, y - 22, 10);
    ellipse(x + 32, y - 12, 10);
  }
  function printO(x, y) {
    ellipse(x, y + 2, 10);
    ellipse(x - 15, y - 5, 10);
    ellipse(x - 30, y - 5, 10);
    ellipse(x - 45, y + 2, 10);
    ellipse(x - 50, y + 17, 10);
    ellipse(x - 45, y + 32, 10);
    ellipse(x - 30, y + 40, 10);
    ellipse(x - 15, y + 40, 10);
    ellipse(x, y + 32, 10);
    ellipse(x + 5, y + 17, 10);
  }
  function printP(x, y) {
    //straight line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 40, 10);
    //top arc
    ellipse(x + 15, y - 45, 10);
    ellipse(x + 30, y - 45, 10);
    ellipse(x + 45, y - 40, 10);
    ellipse(x + 48, y - 28, 10);
    ellipse(x + 38, y - 20, 10);
    ellipse(x + 25, y - 20, 10);
    ellipse(x + 13, y - 20, 10);
  }
  function printQ(x, y) {
    //circle part
    ellipse(x, y + 2, 10);
    ellipse(x - 15, y - 5, 10);
    ellipse(x - 30, y - 5, 10);
    ellipse(x - 45, y + 2, 10);
    ellipse(x - 50, y + 17, 10);
    ellipse(x - 45, y + 32, 10);
    ellipse(x - 30, y + 40, 10);
    ellipse(x - 15, y + 40, 10);
    ellipse(x, y + 32, 10);
    ellipse(x + 5, y + 17, 10);
    //tail
    ellipse(x - 12, y + 23, 10);
    ellipse(x + 10, y + 40, 10);
  }
  function printR(x, y) {
    //straight line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 40, 10);
    //top arc
    ellipse(x + 15, y - 45, 10);
    ellipse(x + 30, y - 45, 10);
    ellipse(x + 45, y - 40, 10);
    ellipse(x + 48, y - 28, 10);
    ellipse(x + 38, y - 20, 10);
    ellipse(x + 25, y - 20, 10);
    ellipse(x + 13, y - 20, 10);
    //diagonal
    ellipse(x + 42, y - 10, 10);
    ellipse(x + 48, y, 10);
  }
  function printS(x, y) {
    //top half
    ellipse(x, y, 10);
    ellipse(x - 15, y - 7, 10);
    ellipse(x - 30, y - 5, 10);
    ellipse(x - 40, y + 4, 10);
    ellipse(x - 30, y + 14, 10);
    ellipse(x - 15, y + 16, 10);
    ellipse(x - 3, y + 20, 10);
    //bottom half
    ellipse(x - 40, y + 32, 10);
    ellipse(x - 30, y + 40, 10);
    ellipse(x - 15, y + 40, 10);
    ellipse(x, y + 35, 10);
  }
  function printT(x, y) {
    //vertical line
    ellipse(x, y, 10);
    ellipse(x, y - 13, 10);
    ellipse(x, y - 27, 10);
    ellipse(x, y - 40, 10);
    //horizontal line
    ellipse(x - 6, y - 50, 10);
    ellipse(x - 18, y - 50, 10);
    ellipse(x + 6, y - 50, 10);
    ellipse(x + 18, y - 50, 10);
  }
  function printU(x, y) {
    ellipse(x - 45, y - 10, 10);
    ellipse(x - 45, y + 3, 10);
    ellipse(x - 45, y + 17, 10);
    ellipse(x - 40, y + 32, 10);
    ellipse(x - 28, y + 40, 10);
    ellipse(x - 13, y + 40, 10);
    ellipse(x, y + 32, 10);
    ellipse(x + 5, y + 17, 10);
    ellipse(x + 5, y + 3, 10);
    ellipse(x + 5, y - 10, 10);
  }
  function printV(x, y) {
    ellipse(x, y, 10);
    ellipse(x + 4, y + 12, 10);
    ellipse(x + 8, y + 24, 10);
    ellipse(x + 12, y + 36, 10);
    ellipse(x + 18, y + 48, 10);
    ellipse(x + 26, y + 36, 10);
    ellipse(x + 30, y + 24, 10);
    ellipse(x + 34, y + 12, 10);
    ellipse(x + 38, y, 10);
  }
  function printW(x, y) {
    ellipse(x, y, 10);
    ellipse(x + 4, y + 12, 10);
    ellipse(x + 8, y + 24, 10);
    ellipse(x + 12, y + 36, 10);
    ellipse(x + 18, y + 48, 10);
    ellipse(x + 26, y + 36, 10);
    ellipse(x + 33, y + 24, 10);
    ellipse(x + 40, y + 36, 10);
    ellipse(x + 47, y + 48, 10);
    ellipse(x + 55, y + 36, 10);
    ellipse(x + 59, y + 24, 10);
    ellipse(x + 63, y + 12, 10);
    ellipse(x + 67, y, 10);
  }
  function printX(x, y) {
    //L to R diagonal
    ellipse(x, y, 10);
    ellipse(x + 8, y + 10, 10);
    ellipse(x + 16, y + 20, 10);
    ellipse(x + 24, y + 30, 10);
    ellipse(x + 32, y + 40, 10);
    ellipse(x + 40, y + 50, 10);
    //R to L diagonal
    ellipse(x + 40, y, 10);
    ellipse(x + 30, y + 13, 10);
    ellipse(x + 10, y + 35, 10);
    ellipse(x, y + 50, 10);
  }
  function printY(x, y) {
    //top half
    ellipse(x, y, 10);
    ellipse(x + 8, y + 10, 10);
    ellipse(x + 20, y + 20, 10);
    ellipse(x + 32, y + 10, 10);
    ellipse(x + 40, y, 10);
    //bottom half
    ellipse(x + 20, y + 35, 10);
    ellipse(x + 20, y + 48, 10);
  }
  function printZ(x, y) {
    //top horizontal line
    ellipse(x, y, 10);
    ellipse(x + 12, y, 10);
    ellipse(x + 24, y, 10);
    ellipse(x + 36, y, 10);
    ellipse(x + 48, y, 10);
    //bottom horizontal line
    ellipse(x, y + 48, 10);
    ellipse(x + 12, y + 48, 10);
    ellipse(x + 24, y + 48, 10);
    ellipse(x + 36, y + 48, 10);
    ellipse(x + 48, y + 48, 10);
    //diagonal
    ellipse(x + 8, y + 37, 10);
    ellipse(x + 18, y + 28, 10);
    ellipse(x + 28, y + 20, 10);
    ellipse(x + 40, y + 13, 10);
  }

printT(100,100);
printY(140,50);
printP(200,95);
printE(270,95);
printF(340,95);
printA(400,95);
printC(530,55); 
printE(550,95)
}
