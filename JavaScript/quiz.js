var points = 0
var questions = [
  "which jupiter moon was detected to \nhave liquid water under the icy surface",
  "What is the tallest mountian in th solar system",
  "The name of the biggest asteroid in our solar system is",
  "question4",
  "Question5"]
var answers = 
    ["europa",
     "olympus mons",
     "ceres",
     "answer4",
     "answer5"]
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
  text("Welcome to the Space Flight quiz", 200, 70)
  textSize(15)
  text(result, 200, 300)
  textSize(20)
  text("Question #" + currentQuestionNumber, 200, 100)
  textSize(15)
  text(questions[currentIndex], 200, 120)
  text("Score " + points, 200,)
}

function keyPressed(){
  if (keyCode === ENTER){
    if ((answerBox.Value) == answers[currentIndex]){
      points =+ 1
      result = "Correct you gained 1 point"
      
    } else {
      result = "Incorrect the correct answer was " + answers[currentIndex]
      currentQuestionNumber += 1
      currentIndex += 1
    }
  }
}
