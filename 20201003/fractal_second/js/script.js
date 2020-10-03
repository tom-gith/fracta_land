var w = 450;
var h = 400;
var lines = [[0, h-100, w, h-100]];
var newLines = [];

function setup(){
    var canvas = createCanvas(450, 400);
    canvas.parent('canvas');
    background(100);
    frameRate(1);
}

function draw() {
  background(100);
  stroke (171,255,127);
  for(i = 0; i < lines.length; i++){
    line(lines[i][0],lines[i][1],lines[i][2],lines[i][3]);
    lineParts = createLines(lines[i]);

    for(j = 0; j < lineParts.length; j++){
      newLines.push(lineParts[j]);

    }
  }
  
  
  lines = newLines;
  newLines = [];
  
  
  if(frameCount === 6){
    noLoop();
  }
  
}

function createLines(lines){
  // �����_�̌������
  var sx = 2 * lines[0]/3 + lines[2]/3;
  var sy = 2 * lines[1]/3 + lines[3]/3;
  var tx = lines[0]/3 + 2 * lines[2]/3;
  var ty = lines[1]/3 + 2 * lines[3]/3;
  
  // ��]�s��̎����
  var ux = (tx - sx)*cos(-PI / 3) - (ty - sy)*sin(-PI / 3) + sx;
  var uy = (tx - sx)*sin(-PI / 3) + (ty - sy)*cos(-PI / 3) + sy;

  // �R�b�z�Ȑ��̑�����4�{�̐��̍��W������B
  var l1 = [lines[0], lines[1], sx, sy];
  var l2 = [sx, sy, ux, uy];
  var l3 = [ux, uy, tx, ty];
  var l4 = [tx, ty, lines[2],lines[3]];
  
  console.log([l1, l2, l3, l4])
  
  return [l1, l2, l3, l4];

}

