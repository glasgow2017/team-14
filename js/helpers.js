function updateQuestionNumber() {
  count = 0;
  selected = [0, 0, 0];
  updateScore();


  // get current question
  var questionElement = $('#questionNumber');
  var currentQuestion = parseInt(questionElement.text());


  if ((currentQuestion + 1) > 3) {
    Persona = Ava;
    $('#personaName').text('Ava');
    $('#mainImg').attr('src', 'images/Ava.png');
  }
  if ((currentQuestion + 1) > 6) {
    Persona = Katie;
    $('#personaName').text('Katie');
    $('#mainImg').attr('src', 'images/Katie.png');
  }
  if (currentQuestion + 1 < 10) {
    questionElement.text((currentQuestion + 1));
    questionNumber = currentQuestion + 1;
    updateMainQuestion();
    updateMessageBoard();
    setAnswerButtons1();
    showFacts();
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
      $('#mainQuestionText').text(Ava.mainQuestion1);
      return;
    case 5:
      $('#mainQuestionText').text(Ava.mainQuestion2);
      return;
    case 6:
      $('#mainQuestionText').text(Ava.mainQuestion3);
      return;
    case 7:
      $('#mainQuestionText').text(Katie.mainQuestion1);
      return;
    case 8:
      $('#mainQuestionText').text(Katie.mainQuestion2);
      return;
    case 9:
      $('#mainQuestionText').text(Katie.mainQuestion3);
      return;
  }
}


// get correct answer {1,2,3} based on question id {0-9}
function getCorrectAnswer() {
  switch (questionNumber) {
    case 1:
      return 1;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 1;
    case 6:
      return 3;
    case 7:
      return 3;
    case 8:
      return 1;
    case 9:
      return 2;
  }
}

function endGame() {
  alert('GameOver! Your total score is ' + score);
  window.location = "data.html";

}

function updateMessageBoard() {
  $('#intro').text('');
  $('#intro').removeClass('well');

  $('#ans').prop('disabled', false).addClass('hidden');
  $('#smallOptionGroup1').remove();
  $('.que').remove();
  $('.ans').remove();

  if (questionNumber === 4 || questionNumber === 7) {
    $('#intro').text(Persona.info);
    $('#intro').addClass('well');
    $('#ans').removeClass('hidden');
    $('#ans').val('');

    $('.col-md-8.text-right>h3').text('');
    $('button').prop('disabled', true);
  } else {
    $('.col-md-8.text-right>h3').text('Is there anything you want to ask me?');
    showMessageOptions();
  }


}

function updateScore() {
  $('#score').text(score);
}

function showFacts() {
  switch (questionNumber) {
    case 2:
      $('#fact1').text(Persona.fact1);
      return;
    case 3:
      $('#fact2').text(Persona.fact2);
      return;
    case 5:
      $('#fact1').text(Persona.fact1);
      return;
    case 6:
      $('#fact2').text(Persona.fact2);
      return;
    case 8:
      $('#fact1').text(Persona.fact1);
      return;
    case 9:
      $('#fact2').text(Persona.fact2);
      return;
    default:
      $('#fact1').text('');
      $('#fact2').text('');
      return;
  }
}
