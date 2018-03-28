var mic, fft;

function setup() {
   createCanvas(710,400);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT(0.4, 16);
   fft.setInput(mic);
}

function draw() {
   background(200);

   var spectrum = fft.analyze();
   push();
translate(50,50);
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
pop();

push();
translate(100,100);
rect(30, 20, 55, 55, 20);
fill(255);
pop();

console.log(spectrum,0,50);
//console.log(isKick(spectrum, 0, ));
}

function isKick(spectrum, cell, level)
{
if (spectrum[cell]>level) {
  return true;
}
  return false;
}
