console.log('moving lines 2');

let offset = 0; 
let b;
let a;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(10);
  
  noFill();
  b = height / 2;
  a = height / 2;
  
  }


function draw(){

  background(51);

  push();
  stroke('red');
 
  stroke('red');
  line(a, 0, a, height);
  a = a - 0.5;
  if (a < 0) {
    a = height;
  }

 
  line(0, b, width, b);
  
  b = b - 0.5;
  if (b < 0) {
    b = height;
  }



pop();
  stroke('white');


 
  for (let i = 100; i < width; i += 50) {
    
    line(i + offset, 0 , i + offset, 700);
    
     }

offset = offset + 1;
if (offset > width){
  offset = 0;
}
}
  
