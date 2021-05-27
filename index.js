var readLineSync = require("readline-sync")
var chalk = require("chalk")

var score = 0;
var highScores = [
  {
    name: 'Ratan',
    score: 5
  },
  {
    name: 'Ashwin',
    score: 4
  }
]

function play(question, answer){
  userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Congrats, It's the right answer"));
    score = score + 1;
  }
  else{
    console.log(chalk.red("Ohhh noo, It's wrong!"));
  }
}

questions = [
  {
    question: "Who scored the most goals in LaLiga 20-21 season? ",
    answer: "Messi"
  },
  {
    question: "Who scored the most goals in Seria A 20-21 season? ",
    answer: "Ronaldo"
  },
  {
    question: "Which team won the ligue 1 this season? ",
    answer: "Lille"
  },
  {
    question: "Who has the most assists in laliga 20-21? ",
    answer: "Aspas"
  },
  {
    question: "Which country won the Euro 2016? ",
    answer: "Portugal"
  }
]

var userName = readLineSync.question('May I ask your name? ');
var welcomeMsg = "Welcome "+userName + " to the football trivia\nHere starts the quiz:";
console.log(chalk.bgBlue(welcomeMsg));

for(var i = 0; i<questions.length; i++){
  var q = questions[i];
  play(q.question, q.answer);
}

console.log(chalk.black.bgGreen('Your final score is ')+chalk.black.bgGreen.bold(score));

console.log('The current high socre are: ');
console.log('----------------------------')
for(var i = 0; i<highScores.length; i++){
  console.log(highScores[i].name + ' - ' + highScores[i].score);
}
console.log('----------------------------')
console.log('If you scored higher than this send the screenshot');