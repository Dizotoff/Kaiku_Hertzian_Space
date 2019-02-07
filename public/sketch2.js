var mic, fft, vhs, cam;
let angle = 0;
let c =4;
let speed =0.25;
let autocontrol = false;
let rotateCtr = true;
var r = 1;
function setup() {
  createCanvas(windowWidth-c, windowHeight-c);
  smiley = loadImage("pics/pic1.jpg");
  vhs= createVideo(["vids/vhs.mp4"]);
  vhs.loop();
vhs.hide();

autocontrol = true
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT(0.5, 1024);
   fft.setInput(mic);
w = width/64;


}

function draw() {

push();
image(vhs, 0, 0, windowWidth-c, windowHeight-c);
pop();

//bottom left
push();
var spectrum = fft.analyze();
translate(-2,0);
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
pop();

//bottom right
push();

translate(windowWidth-1024,0);
   beginShape();

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[spectrum.length-i], 0, 255, height, 0) );
   }
   endShape();
pop();


//right top
push();

translate(windowWidth-1024,-windowHeight);

   beginShape();

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(-spectrum[spectrum.length-i], 0, 255, height, 0) );
   }
   endShape();

pop();

//left top
push();

translate(-2,-windowHeight);

   beginShape();

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(-spectrum[i], 0, 255, height, 0) );
   }
   endShape();

pop();


push();
translate(windowWidth/2, windowHeight/2);
rotate(angle);
imageMode(CENTER);
image(smiley, 0, 0, 991*r, 382*r);


pop();



if (autocontrol == true) {
console.log("TRU EE AUTOCONTROL");

  speed = speed + 0.001;

  if (speed > 3) {
  rotateCtr = false
  }

  if (rotateCtr == false) {
    speed = speed - 0.002;

  }

  if (speed < 1) {
    rotateCtr=true;
  }
} else {
  console.log("Autocontrol false ");
}





angle += speed ;
speedcontrol();
console.log(speed);
}
//just for testing purposes
function speedcontrol() {
  if (keyCode === RIGHT_ARROW) {
    speed = speed+0.001;
  } else if (keyCode === LEFT_ARROW) {
    speed = speed-0.001;
  } else if (keyCode === 82) {
    location.reload();
  } else if (keyCode === UP_ARROW) {
    r = r+0.05;
  } else if (keyCode === DOWN_ARROW) {
    r = r-0.05;
  } else if (keyCode === CONTROL) {


  } else if (keyCode === 90) {
    speed = -0.075;
  } else if (keyCode === 67) {
    speed = -0.07*3;
  } else if (keyCode === 86) {
    speed = -0.07*10;
  } else if (keyCode === 66) {
    speed = 0.07;
  } else if (keyCode === 78) {
    speed = 0.07*10;
  } else if (keyCode === 88) {
    speed = 0;
  } else if (keyCode === 65) {
    autocontrol = true;
  } else if (keyCode === 81) {
    autocontrol = false;
  } else if (keyCode === 49) {
    smiley = loadImage("pics/pic1.jpg");
  } else if (keyCode === 50) {
    smiley = loadImage("pics/pic2.jpg");
  } else if (keyCode === 51) {
    smiley = loadImage("pics/pic3.png");
  } else if (keyCode === 52) {
    smiley = loadImage("pics/pic4.jpg");
  } else if (keyCode === 53) {
    smiley = loadImage("pics/pic5.jpg");
  } else if (keyCode === 54) {
    smiley = loadImage("pics/pic6.gif");
  } else if (keyCode === 55) {
    smiley = loadImage("pics/pic7.jpg");
  } else if (keyCode === 56) {
    smiley = loadImage("pics/pic8.jpg");
  } else if (keyCode === 57) {
    smiley = loadImage("pics/pic9.jpg");
  }else if (keyCode === 189) {
    smiley = loadImage("pics/pic10.jpg");
  }else if (keyCode === 68) {
    smiley = loadImage("pics/pic11.jpg");
  }






  return false;

}
