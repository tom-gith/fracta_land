function setup() {
    var canvas = createCanvas(750, 700);
    canvas.parent('canvas');
}

function draw() {
  background(250);
  divideRect(10, 10, width-20, height-20, 15);
}


//(x座標, y座標, 幅, 高さ, 再帰回数)
function divideRect(x, y, w, h, n) { 
  strokeWeight(n/5);
  rect(x, y, w, h);

  n--;
  
  if (n>=0) {   
    //幅が高さよりも大きい、または幅と高さが等しい場合
    if (w>=h) {
      //ランダムな値を得る
      randomW = random(w*0.1, w*0.9);
      //ランダムな値から2つのdivideRectを呼び出す
      divideRect(x, y, randomW, h, n);    //左側の四角形
      divideRect(x+randomW, y, w-randomW, h, n);    //右側の四角形
    }

    //幅が高さよりも小さい場合
    if (w<h) {
      randomH = random(h*0.1, h*0.9);
      divideRect(x, y, w, randomH, n);    //上側の四角形
      divideRect(x, y+randomH, w, h-randomH, n);    //下側の四角形
    }
  }
}


