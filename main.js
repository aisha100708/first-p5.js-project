function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 260);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 50, 50, 500, 380);

    fill("green");
    rect(40, 20, 550, 20);
    rect(40, 450, 550, 20);
    rect(20, 50, 20, 400);
    rect(580, 50, 20, 400);

    fill("red");
    circle(32, 30, 40);
    circle(590, 30, 40);
    circle(33, 450, 40);
    circle(590, 450, 40);

    stroke("black");
    strokeWeight(2);
}
function take_snapshot() {
    save("image.png");
}