var mic, fft, vhs, cam;
let angle = 0;
let c =0;
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

push();
var spectrum = fft.analyze();
translate(0,50);
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
pop();


push();
var spectrum = fft.analyze();
translate(500,50);
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
pop();


push();
translate(windowWidth/2, windowHeight/2);
rotate(angle);
imageMode(CENTER);
image(cam, 0, 0, 960/2, 540/1.75);
pop();

//push();
//translate(windowWidth/2, windowHeight/2);
//ellipse(0, 0, 2, 2);
//pop();





keyPressed();
angle -= 0.07;

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    angle += 1;
  } else if (keyCode === DOWN_ARROW) {
    angle -= 0,01;
  }
  return false; // prevent default
}
