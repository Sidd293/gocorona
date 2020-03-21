var s = 1
var xp=0
var yp=0
var sp = 0
var tht=0
var bblx=200
var bbly=200 
var sc = 0
var cmb = 1
var i =255
var lyf = 5
function preload
{   
    gc = loadSound('goco.mp3')
  cg = loadSound('cogo.mp3')
  cv = loadImage('coronavirus.png')

}
function setup() {
  createCanvas(800, 800);
arw = loadImage('arw.png')

   hrt = loadImage('hrtb.png')

}


function mouseReleased()
{

sp=30
}


function draw() {
  scale(2)
  background(255);
for (var l = 0;l<lyf;l++)
 image(hrt,l*50,20,20,20)
  text("score is - "+sc,150,30)
  
  var tht = map(mouseY,0,360,0,450)
   push()
  
   translate(xp+200,yp+400)
  rotate(radians(tht))
  rectMode(CENTER)
  
  image(arw,-25,-25,50,50)
 pop()
 xp = xp+sp*cos(radians(tht-45))
  yp = yp+sp*sin(radians(tht-45))

  if(sp>0)
  sp--
   if(yp+400<0 || yp+400>height||xp+200<0||xp+200>width)
   {xp=0
   yp=0
    sp=0
    cmb=0
   }
  
  if((yp+400-bbly-30)*(yp+400-bbly-30)+(xp+200-bblx-30)*(xp+200-bblx-30)<30*30)
  {if(s<0)
   cg.play()
    else
      gc.play()
   
   s=-s
   
   
   r=bblx
   t = bbly
  bbly = 0
 bblx=random(0,300)
 
    xp=0
   yp=0
    sp=0
   // cmb=0
    
    cmb++ 
 if (cmb>3)
    i = 255
    //h++    
 sc = sc+cmb
  }
  
  if(bbly>400)
  { bbly=0
  lyf--
  }
   else
  {bbly= bbly+ 1 +.01*sc
  } 
    
  if(i!=0)
  fill(255-i)
  textSize(64)
    text("COMBO x"+cmb,0,140)         
   i-=5; 
  fill(0)
  textSize(20)
    
image(cv,bblx,bbly,50,50)
if (lyf==-1)
{exit()
}
}
