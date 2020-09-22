var width = 450;
var height = 400;
var lines = [[width/2, 0, width/2,height]];
var fixedLines = [];
var fixedRate = 3;
var theta;
var newLines = [];
 
function setup() {
    // 数値を変数で指定すると、表示キャンバスの大きさが100×100で固定される。
    var canvas = createCanvas(450, 400);
    canvas.parent('canvas');
    
    background(255);
    frameRate(2);
    strokeWeight(1);
    theta = TWO_PI / 20;

    console.log("setup");
}
 
function draw() {
  background(0);
  stroke (171,255,127);
  for(k=0;k < fixedLines.length;k++){
    line(fixedLines[k][0],fixedLines[k][1],fixedLines[k][2],fixedLines[k][3]);
  
  }
  
  for(i=0;i < lines.length;i++){
    line(lines[i][0],lines[i][1],lines[i][2],lines[i][3])
    lineParts = createLines(lines[i]);
    for(j=0;j < lineParts.length;j++){
     newLines.push(lineParts[j]);
    }
  
  
  }
  
  lines = newLines;
  newLines = [];
  if(frameCount === 15){
    noLoop();
  }

}

function createLines(l){
  var branchPoint = [(l[0] + l[2] *fixedRate) / (1 + fixedRate), (l[1] + l[3] *fixedRate) / (1 + fixedRate)];
  var fixedLine = [l[2], l[3], branchPoint[0], branchPoint[1]];
  
  var v1 = l[0] - branchPoint[0];
  var v2 = l[1] - branchPoint[1];
  
  var u1 = v1 * cos(-theta) - v2 * sin(-theta) + branchPoint[0];
  var u2 = v1 * sin(-theta) + v2 * cos(-theta) + branchPoint[1];
  var l1 = [u1, u2, branchPoint[0], branchPoint[1]];
  
  var w1 = v1 * cos(theta) - v2 * sin(theta) + branchPoint[0];
  var w2 = v1 * sin(theta) + v2 * cos(theta) + branchPoint[1];
  var l2 = [w1, w2, branchPoint[0], branchPoint[1]];
  
  fixedLines.push(fixedLine)
  
  return [l1, l2]
  
}

