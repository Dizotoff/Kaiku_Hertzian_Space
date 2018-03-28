var mic, fft, vhs, cam;
let angle = 0;
let c =0;
function setup() {
  createCanvas(windowWidth-c, windowHeight-c);

  vhs= createVideo(["vhs.mp4"]);
  vhs.loop();
vhs.hide();
  cam = createCapture(VIDEO);
  cam.size(960, 540);
  cam.hide();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT(0.5, 1024);
   fft.setInput(mic);


   
}

function draw() {

push();
image(vhs, 0, 0, windowWidth-c, windowHeight-c);
pop();

push();
var spectrum = fft.analyze();

pop();

push();
translate(windowWidth/2, windowHeight/2);
rotate(angle);
imageMode(CENTER);
image(cam, 0, 0, 960/1.5, 540/1.5);
pop();



angle -= 0.01;

}
