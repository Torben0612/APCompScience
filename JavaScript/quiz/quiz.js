var points = 0
var questions = [
  "which jupiter moon was detected to \nhave liquid water under the icy surface",
  "What is the tallest mountian \nin the solar system",
  "The name of the biggest \nasteroid in our solar system is",
  "About how many light years \nacross is the Milky Way?",
  "Which planet has a moon almost \nas big as the planet itself? "]
var answers = 
    ["europa",
     "olympus mons",
     "ceres",
     "100000",
     "pluto"]
var result = ""
var currentQuestionNumber = 1
var currentIndex = 0
var question = ""
var answerBox
var logo

function setup() {
  createCanvas(400, 400);
  answerBox = createInput();

  answerBox.position(100, 200)
  logo = loadImage("background.png")
}

function draw() {
  image(logo, 0,0, 400,400)
  textSize(20)
  textAlign(CENTER)
  rect(50,50,300,100)
  text("Welcome to the astronomy quiz", 200, 70)
  textSize(15)
  text(result, 200, 300)
  textSize(20)
  text("Question #" + currentQuestionNumber, 200, 100)
  textSize(15)
  text(questions[currentIndex], 200, 120)
  rect(170, 265, 60, 20)
  text("Score " + points, 200, 280,)
  
}

function keyPressed(){
  if (keyCode === ENTER){
    if(answerBox.value() === answers[currentIndex]){
      points += 1
      result = "Correct you gained 1 point"
      currentIndex += 1
      currentQuestionNumber += 1
    } else{
      result = "Incorrect the correct answer was " + answers[currentIndex]
      currentQuestionNumber += 1
      currentIndex += 1
}
  }
}
