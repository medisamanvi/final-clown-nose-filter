var nosex=0
var nosey=0

function preload(){
    clown_nose=loadImage("Clown-Nose.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nose x= "+nosex);
        console.log("nose y= "+nosey);
    }
}

function draw(){
    image(video,0,0,300,300);
    //fill("red")
    //circle(nosex,nosey,30)
    image(clown_nose,nosex-15,nosey-5,30,30)
}

function take_snapshot(){
    save("filterimg.png")
}