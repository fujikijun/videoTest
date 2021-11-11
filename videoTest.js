/*
 * @name Video Canvas
 * @description Load a video with multiple formats and draw it to the canvas.
 * To run this example locally, you will need a running 
 * <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.
 */
let fingers;

function setup() {
  createCanvas(710, 400);
  // specify multiple formats for different browsers
  fingers = createVideo(['data/tema.mp4']);
  fingers.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
}

function draw() {
  fingers.loop();
  background(150);
  image(fingers, 10, 10, 400, 240 ); // draw the video frame to canvas
  filter(GRAY);
  image(fingers, 150, 150, 400, 240); // draw a second copy to canvas
}

function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
}