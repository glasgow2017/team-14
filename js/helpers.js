function updateQuestionNumber() {
  count=0;
  selected = [0, 0, 0];


  // get current question
  var questionElement = $('#questionNumber');
  var currentQuestion = parseInt(questionElement.text());

  var selector = '.Q' + currentQuestion;
  $(selector).parent().css("background-color", "green");

  if ((currentQuestion + 1) > 3){
    Persona = Ava;
  }
  if ((currentQuestion + 1) > 6){
    Persona = Katie;
  }
  if (currentQuestion + 1 < 10) {
    questionElement.text((currentQuestion + 1));
    questionNumber = currentQuestion + 1;
    updateMainQuestion();
    updateMessageBoard();
    setAnswerButtons1();
  } else {
    endGame();
  }
}

function updateMainQuestion() {
  switch (questionNumber) {
    case 2:
      $('#mainQuestionText').text(Jane.mainQuestion2);
      return;
    case 3:
      $('#mainQuestionText').text(Jane.mainQuestion3);
      return;
    case 4:
      $('#mainQuestionText').text(Jane.mainQuestion3);
      return;
    case 5:
      $('#mainQuestionText').text(Jane.mainQuestion3);
      return;
    case 6:
      $('#mainQuestionText').text(Jane.mainQuestion3);
      return;
    case 7:
      $('#mainQuestionText').text(Jane.mainQuestion3);
      return;
    case 8:
      $('#mainQuestionText').text(Jane.mainQuestion3);
      return;
    case 9:
      $('#mainQuestionText').text(Jane.mainQuestion3);
      return;
  }
}


// get correct answer {1,2,3} based on question id {0-9}
// btw, all hardcoded :)
function getCorrectAnswer() {
  switch (questionNumber) {
    case 1:
      return 3;
    case 2:
      return 2;
    case 3:
      return 2;
    case 4:
      return 1;
    case 5:
      return 1;
    case 6:
      return 2;
    case 7:
      return 3;
    case 8:
      return 1;
    case 9:
      return 3;
  }
}

function endGame() {
  alert('GameOver! Your total score is ' + score);
}

function updateMessageBoard() {
  $('#intro').text('');
  $('#ans').prop('disabled', false).addClass('hidden');
  $('.col-md-8.text-right>h3').text('Is there anything you want to ask me?');
  $('#smallOptionGroup1').remove();
  $('.que').remove();
  $('.ans').remove();
  q();

}
