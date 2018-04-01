var mic, fft, vhs, cam;
let angle = 0;
let c =5;
let speed =0;
function setup() {
  createCanvas(windowWidth-c, windowHeight-c);

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
translate(0,0);
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
pop();

//bottom right
push();
var spectrum = fft.analyze();
translate(700,0);
   beginShape();

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[spectrum.length-i], 0, 255, height, 0) );
   }
   endShape();
pop();


//right top
push();
var spectrum = fft.analyze();
translate(700,-1000);

   beginShape();

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(-spectrum[spectrum.length-i], 0, 255, height, 0) );
   }
   endShape();

pop();

//left top
push();
var spectrum = fft.analyze();
translate(-5,-1000);

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
image(cam, 0, 0, 960/2*1.75, 540/1.75*1.75);


pop();

//push();
//translate(windowWidth/2, windowHeight/2);
//ellipse(0, 0, 2, 2);
//pop();







angle += speed ;
speedcontrol();
}

function speedcontrol() {
  if (keyCode === UP_ARROW) {
    speed = speed+0.001;
  } else if (keyCode === DOWN_ARROW) {
    speed = speed-0.001;
  } else if (keyCode === 82) {
    location.reload();
  } else if (keyCode === CONTROL) {
    console.log("OPA");
  } else if (keyCode === 90) {
    speed = -0.07;
  }
  return false;

}
