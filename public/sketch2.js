var mic, fft, vhs, cam;
let angle = 0;
let c =5;
let speed =0;
let autocontrol = false;
let rotateCtr = true;
function setup() {
  createCanvas(windowWidth-c, windowHeight-c);
  smiley = loadImage("spiral.jpg");
  vhs= createVideo(["vhs.mp4"]);
  vhs.loop();
vhs.hide();
  cam = createCapture(VIDEO);
  cam.hide();

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
translate(-10,0);
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
pop();

//bottom right
push();

translate(500,0);
   beginShape();

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[spectrum.length-i], 0, 255, height, 0) );
   }
   endShape();
pop();


//right top
push();

translate(500,-850);

   beginShape();

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(-spectrum[spectrum.length-i], 0, 255, height, 0) );
   }
   endShape();

pop();

//left top
push();

translate(-0,-900);

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
image(smiley, 0, 0, 960/2.5*1.75, 540/1.85*1.7);


pop();

push();
translate(windowWidth/2, windowHeight/2);
ellipse(0, 0, 2, 2);
pop();

if (autocontrol == true) {
console.log("TRUEE AUTOCONTROL");

  speed = speed + 0.0015;

  if (speed > 2) {
  rotateCtr = false
  }

  if (rotateCtr == false) {
    speed = speed - 0.002;
  }

  if (speed < 0) {
    rotateCtr=true;
  }
} else {
  console.log("Autocontrol false ");
}





angle += speed ;
speedcontrol();
console.log(speed);
}

function speedcontrol() {
  if (keyCode === RIGHT_ARROW) {
    speed = speed+0.001;
  } else if (keyCode === LEFT_ARROW) {
    speed = speed-0.001;
  } else if (keyCode === 82) {
    location.reload();
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
  }


  return false;

}
