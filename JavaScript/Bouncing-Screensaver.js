var centerX = 200
var centerY = 200
var velX = 1		//change in x per ‘tick’ of the system
var velY = 1.2	//change in y per ‘tick’ of the system


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('green');
  fill(0, 0, 255)
  circle(centerX, centerY, 50)
  moveCircle()
}
function moveCircle() {
  	centerX = centerX + velX
    centerY = centerY + velY
    if (centerX + velX + 25 >= 400 || centerX + velX - 25 <= 0){
    		velX = -1 * velX
  	}
    if (centerY + velY + 25 >= 400 || centerY + velY - 25 <= 0){
    		velY = -1 * velY
  	}
}
