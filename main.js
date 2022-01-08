var song_names = [];

var leftWristX = 0;
var leftWristY = 0;

var rightWristX = 0;
var rightWristY = 0;

var scoreLeftWrist = 0;
var scoreRightWrist  = 0;

function preload() {
    song_names[0] = loadSound("Aage Peeche.mp3");
    song_names[1] = loadSound("Are Yaaro Mere Pyaro.mp3");
    song_names[2] = loadSound("Chahe Koi Mujhe Junglee.mp3");
    /*song1= loadSound("Aage Peeche.mp3");
    song2= loadSound("Are Yaaro Mere Pyaro.mp3");
    song3= loadSound("Chahe Koi Mujhe Junglee.mp3");*/
}

function setup() {
    canvas = createCanvas(700, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log("posenet is initialised");
}

function gotPoses(answers) {
    if(answers.length > 0) {
        console.log(answers);

        leftWristX = answers[0].pose.leftWrist.x;
        leftWristY = answers[0].pose.leftWrist.y;

        rightWristX = answers[0].pose.rightWrist.x;
        rightWristY = answers[0].pose.rightWrist.y;

        console.log("Left Wrist X - " + leftWristX + " Left Wrist Y - " + leftWristY 
        + " Right Wrist X - " + rightWristX + " Right Wrist Y - " + rightWristY);

        scoreLeftWrist = answers[0].pose.keypoints[9].score;
        scoreRightWrist = answers[0].pose.keypoints[10].score;
        console.log("Left Wrist Score - " + scoreLeftWrist + " Right Wrist Score - " + scoreRightWrist)
    }
}

function draw() {
    image(video,0,0,700,600);

    song1_status = song_names[0].isPlaying();
    song2_status = song_names[1].isPlaying();
    song3_status = song_names[2].isPlaying();


    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2) {

        circle(leftWristX,leftWristY,15);
        song1.stop();
        if((song1_status==false)&&(song3_status==true))
        {
            song_names[2].stop();
            song_names[1].play();
            document.getElementById("song").innerHTML = "Playing: Are Yaaro Mere Pyaro";
        } else if((song2_status == true) && (song3_status == false)){
            song_names[1].stop();
            song_names[2].play();
            document.getElementById("song").innerHTML = "Playing:Chahe Koi Mujhe Junglee";
            }      
    }

    if(scoreRightWrist > 0.2) {

        circle(rightWristX,rightWristY,15);
        song3.stop();
        if((song3_status==false)&& (song1_status==true)){
            song_names[0].stop();
            song_names[1].play();
            document.getElementById("song").innerHTML="Playing: Aage Peeche";
        }
        else if((song3_status==false)&&(song2_status==true)){
            song_names[1].stop();
            song_names[0].play();
            document.getElementById("song").innerHTML="Playing: Are Yaaro Mere Pyaro";
        
        }
       
    }
}

function play() {
    song_names[0].play();
    song_names[0].setVolume(1);
    song_names[0].rate(1);
}