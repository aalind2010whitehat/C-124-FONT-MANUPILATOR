noseX = 0;
noseY = 0;
difference = 0;
RightWristX = 0;
LeftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,400);
    video.position(50, 200);

    canvas = createCanvas(550, 400);
    canvas.position(660, 120);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('Posenet is Initialized')
}

function gotPoses(results) 
{
if(results.length > 0) {
console.log(results)
noseX = results[0].pose.nose.x ;
noseY = results[0].pose.nose.y ;
console.log("nose X =" +noseX+ "nose Y =" +noseY )

LeftWristX = results[0].pose.leftWrist.x ;
RightWristX = results[0].pose.rightWrist.x ;
difference = floor(LeftWristX - RightWristX);

console.log("leftWristX =" +LeftWristX+ "RightWristX =" +RightWristX+ "Difference =" + difference)
}
}
function draw() {
    background('darkblue');
    
    document.getElementById('text').innerHTML = "SIZE OF THE TEXT IS = " +difference+ "px";
    fill(236, 24, 24);
    stroke('peach');
    strokeWeight(4);
    text("Aalind", noseX, noseY );
    textSize(difference);
}