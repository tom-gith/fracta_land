var tree_step;
var tree_angle;
var tree_length
var tree_startx;
var tree_scale;

var step_count=0;

function setup(){
    var canvas = createCanvas(450, 400);
    canvas.parent('canvas');

    tree_step = 10;
    tree_angle = 20;
    tree_length = 100;
    tree_scale = 0.7;
    tree_startx = width/2;
    tree_angle = radians(tree_angle);
    frameRate(1);
    //newTree();
}

function draw() {
  background(100);
  stroke (171,255,127);
  newTree();
  step_count += 1;

 if(step_count === tree_step){
  noLoop();
 }
  
}

function newTree() {
  translate(tree_startx, height);
  branch(tree_startx, tree_length, step_count);

}

function branch(x0, h, n) {
  var theta;
  
  line(0, 0, 0, -h);
  translate(0, -h);
  h = h * tree_scale;
  if(n > 0){
    theta = -tree_angle;
    push();
    rotate(theta);   
    branch(x0, h, n-1);
    pop();     
    theta = tree_angle;
    push();
    rotate(theta);
    branch(x0, h, n-1);
    pop();
  }

}

