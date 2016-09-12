var num = 50;
var loc = [num];
var r;
var create = 0;
var state;
var slider;
var opacity;
var clickmusic;
var backmusic;
var clickmusic = document.getElementById('clickm');
var text;

// function preload() {
//   backmusic = loadSound('sound/summer-night.mp3');
//   clickmusic = loadSound('sound/water drop.mp3');

// }

function setup() {
  frameRate(1);
  createCanvas(screen.width,screen.height);
  slider = createSlider(0, 255);
  slider.position(0, 0);
  noStroke();
  opacity = map(slider.value(), 0, 255, 100, 0);
  for (var i = 0; i < num; i++) {
    loc[i] = new Make(width / 2, height / 2);
  }
}

function draw() {
  background(slider.value());
  move();
  // if(slider.value()>240)
  // {
  //   text = createDiv('Good Morning');
  //   text.position(screen.width/2,screen.height/2);
  //   text.style("font-family", "Arial");
  //   text.style("color", "#ffb3b3");
  //   text.style("font-size", "18pt");
  // }
}

function Make(x, y) {
  this.position = createVector(x, y);
  this.acceleration = createVector(0, 0.03);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
}

function mousePressed() {
 clickmusic.play();
  opacity = map(slider.value(), 0, 255, 255, 0);
  if (create < num) {
    loc[create].x = touchX;
    loc[create].y = touchY;
    fill(255, 255, 0, opacity);
    r = random(5,12);
    ellipse(loc[create].x, loc[create].y, r + 4, r + 4);
    fill(255, 191, 0, opacity);
    ellipse(loc[create].x, loc[create].y, r, r);
    create++;
  }
}

function move() {
  opacity = map(slider.value(), 0, 255, 255, 0);
  for (var i = 0; i < create; i++) {
    loc[i].x += random(-30, 30);
    loc[i].y += random(-30, 30);
  }

  if (state == 0) {
    for (var i = 0; 3 * i < create; i++) {
      r = random(5,12);
      fill(255, 255, 0, opacity);
      ellipse(loc[2 * i].x, loc[2 * i].y, r + 4, r + 4);
      fill(255, 191, 0, opacity);
      ellipse(loc[2 * i].x, loc[2 * i].y, r, r);
    }
    state = 1;
  } else {
    for (var i = 0; 3 * i < create; i++) {
      r = random(5,12);
      fill(255, 255, 0, opacity);
      ellipse(loc[3 * i ].x, loc[3 * i ].y, r + 4, r + 4);
      fill(255, 191, 0, opacity);
      ellipse(loc[3 * i].x, loc[3 * i].y, r, r);
    }
    state = 0;
  }
}