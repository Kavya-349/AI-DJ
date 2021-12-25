var song_names = [];

function preload() {
    song_names[0].loadSound("Aage Peeche.mp3");
    song_names[1].loadSound("Ankhiyon Se Goli Marre.mp3");
    song_names[2].loadSound("Are Yaaro Mere Pyaro.mp3");
    song_names[3].loadSound("Chahe Koi Mujhe Junglee.mp3");
    song_names[4].loadSound("Dafli Waale Dafli Bajaa.mp3");
    song_names[5].loadSound("Ek Ladki Ko Dekha.mp3");
    song_names[6].loadSound("Jai Jai Shiv Shankar.mp3");
    song_names[7].loadSound("Kora Kagaz Tha Yeh Man Mera.mp3");
    song_names[8].loadSound("Lag Ja Gale Se Phir.mp3");
    song_names[9].loadSound("Le Gayi.mp3");
    song_names[10].loadSound("Likhe Jo Khat Tujhe.mp3");
    song_names[11].loadSound("Pehla Nasha.mp3");
    song_names[12].loadSound("Tayyab Ali Pyar Ka Dushman.mp3");
    song_names[13].loadSound("Uden Jab Jab Zulfen Teri.mp3");
    song_names[14].loadSound("Yaha Ke Hum Sikandar.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide;
}

function draw() {
    image(video,0,0,600,500);
}
