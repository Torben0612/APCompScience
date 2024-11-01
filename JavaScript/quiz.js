var points = 0
var questions = [
  "Question1",
  "Question2",
  "question3",
  "question4",
  "Question5"]
var answers = 
    ["answer1",
     "answer2",
     "answer3",
     "answer4",
     "answer5"]
var result = "Test"
currentQuestionNumber = 0
var question = ""
var answerBox

function setup() {
  createCanvas(400, 400);
  answerBox = createInput("put your answe here");
  answeBox.position()
}

function draw() {
  background(13, 135, 184)
  textSize(25)
  textAlign(CENTER)
  text("Welcome to a Astronomy quiz", 200, 70)
  text(result, 200, 300)
  text("Question #" + currentQuestionNumber + 1, 200, 100)
  textSize(15)
  text(questions[currentQuestionNumber], 200, 200)
}

function keypressed(){
  if (key == ENTER){
    
  }
}
