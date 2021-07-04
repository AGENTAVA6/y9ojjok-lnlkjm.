function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800,400)
	video.parent('game_console')
	poseNet = ml5.poseNet(video, modeloaded)
	poseNet.on('pose', gotPoses)
}

function draw() {
	game()
}
function modeloaded(){
  console.log("bhlvcyrdcvbgvfdfghgfdsazsxdcvbngfrertyjukjhgvcfghjkmjhygtfrdfghnjmhgfrdfghjhgflosbajahigfdsedklhkjhxgzr")
}
function gotPoses(results){

  if(results.length > 0){
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log(results)
  }
}




