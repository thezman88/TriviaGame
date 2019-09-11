$(document).ready(function(){

  // event listeners
  $("#remaining-time").hide();
  $("#start").on('click', trivia.startGame);
  $(document).on('click' , '.option', trivia.guessChecker);

})
var trivia = {
  // trivia properties
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 15,
  timerOn: false,
  timerId : '',
  // questions options and answers data
  questions: {
    q1: 'Who is the assistant to the regional manager?',
    q2: 'What kind of farm does Dwight own?',
    q3: 'Which office employee did Michael hit with his car?',
    q4: 'What is the name of the company that bought out Dunder Mifflin?',
    q5: "What type of car does Dwight drive?",
    q6: 'Whose mother does Michael date?',
    q7: "What is Scranton's nickname?"
  },
  options: {
    q1: ['Jim', 'Dwight', 'Pam', 'Oscar'],
    q2: ['Corn', 'Apple', 'Beat', 'Orange'],
    q3: ['Meredith', 'Kevin', 'Creed', 'Stanley'],
    q4: ['Staples', 'Office Max', 'Sabre', 'PaperNet'],
    q5: ['BMW M3','Ford F-150','Honda Accord','Pontiac Trans Am'],
    q6: ['Pam','Kelly','Phyllis','Angela'],
    q7: ['The Big Apple', 'The Electric City', 'The Windy City','The Green City ']
  },
  answers: {
    q1: 'Dwight',
    q2: 'Beat',
    q3: 'Meredith',
    q4: 'Sabre',
    q5: 'Pontiac Trans Am',
    q6: 'Pam',
    q7: 'The Electric City'
  },
