difference = 0;
rightWrist = 0;
leftWrist = 0;

console.log("hi");

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Posenet Is Initialized!");
}

function draw() {
    background("#228B22");
    textSize(difference);
    fill("#FF0000");
    text("Arth", 275, 275);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWrist" + leftWrist + "rightWrist" + rightWrist + "difference" + difference);
        document.getElementById("px").innerHTML = "Width & height of the text is = " + difference;
    }
}