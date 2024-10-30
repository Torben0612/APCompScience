var textBox;
var output
const d = new Date().getFullYear();

function setup() {
  createCanvas(400, 400);
  textBox = createInput();
  textBox.position(100, 80);
  
}

function draw() {
  background(252, 98, 3);
  textSize(20);
  text("Age from Birthdate", 100, 40);
  textSize(10)
  text("Enter your Birth Year", 100, 70)
  textSize(20)
  text("You are: ", 100,120)
  text(output + " Years Old", 200, 120)
}

function keyPressed(){
  if (keyCode === ENTER){
    output = String(d - Number(textBox.value()))
    console.log(d)
    console.log(output)
  }
}
