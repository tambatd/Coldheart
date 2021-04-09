x =window.innerWidth;
y = window.innerHeight;
a=0;
a2=0;
background_col=0;
b=window.innerHeight;
b2=window.innerHeight;

function setup() {
  createCanvas(x,y);
  //size(width,height);
  background(0);
  textSize(32);
  
      stroke(random(255),random(255),random(255));  
      text(" CLICK  ME", width/2, height/2); 

}


function draw() {
  //translate(width/2,height/2);
  //noStroke();
fill(color(random(255),random(255),random(255)));
line(a, 0, width, b);
 fill(color(126,31,37));
a-=10;
b-=5;
 fill(color(126,31,37));
line(-a2, -0, -width, -b2);
a2+=-10;
b2+=-5;
 // circle(width/2,height/2,100);
}

function mouseClicked(){
if(background_col == 0){
      background_col=1;
      background(255);
      //draw();
      //mouseClicked();
}
else{
      background(0);
      console.log(0);
      background_col = 0;
      //draw();
      //mouseClicked();
}
    //background_col = 0;
    stroke(random(255),random(255),random(255));  
    a=0;
    a2=0;
    b=window.innerHeight;
    b2=window.innerHeight;
}

function keyPressed() {

}
