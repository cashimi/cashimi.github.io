function setup() {
createCanvas(800, 600);
capture = createCapture(VIDEO);
capture.hide();
}

function draw() {
image(capture, 0, 0, width, height);
}
