// Global
var questionNumber = 1;
var score = parseInt($('#score').text());
var Persona = Jane;

$('button').prop('disabled', true);

// set initial question
$('#mainQuestionText').text(Persona.mainQuestion1);
$('#intro').text(Persona.info);
setAnswerButtons1();


// user input
$("#ans").on('keyup', function (e) {
  if (e.keyCode === 13) {
    $('button').prop('disabled', false);

    // disable input
    $("#ans").prop('disabled', true);
    // TODO store data into DB (or send it somewhere)
    var input = $('#ans').val();
    console.log(input); // store THIS to the DB

    $('#followup').remove();
    $('<div class="col-md-8 text-right col-md-push-4"><p class="well" id="followup">' + Persona.smallQuestion + '</p></div>').insertAfter('#textInput');

    // show hidden questions
    // TODO show 3 questions
    // $('#smallOptionGroup1').removeClass('hidden');
    q(Persona.opt11, Persona.opt12, Persona.opt13);
  }
});

function showButtons(opt1, opt2, opt3) {
  var buttons = '<div class="col-md-8 col-md-push-1" id="smallOptionGroup1"><div class="btn-group-vertical"><button type="button" style="margin-left: 0;" class="btn btn-primary" id="smallOpt1" onclick="b1()">' + opt1 + '</button><button type="button" class="btn btn-primary" id="smallOpt2" onclick="b2()">' + opt2 + '</button> <button type="button" class="btn btn-primary" id="smallOpt3" onclick="b3()">' + opt3 + '</button> </div> </div>';
  $('#chat').append(buttons);
}

// MAIN ANSWERS
$('#ansOpt1').click(function () {
  if (getCorrectAnswer() === 1) {
    score += 100;
    var selector = '.Q' + questionNumber;
    $(selector).parent().css("background-color", "green");
  } else {
    score -= 100;
    var selector = '.Q' + questionNumber;
    $(selector).parent().css("background-color", "red");

  }
  updateQuestionNumber();
});


$('#ansOpt2').click(function () {
  if (getCorrectAnswer() === 2) {
    score += 100;
    var selector = '.Q' + questionNumber;
    $(selector).parent().css("background-color", "green");
  } else {
    score -= 100;
    var selector = '.Q' + questionNumber;
    $(selector).parent().css("background-color", "red");

  }
  updateQuestionNumber();
});

$('#ansOpt3').click(function () {
  if (getCorrectAnswer() === 3) {
    score += 100;
    var selector = '.Q' + questionNumber;
    $(selector).parent().css("background-color", "green");
  } else {
    score -= 100;
    var selector = '.Q' + questionNumber;
    $(selector).parent().css("background-color", "red");

  }
  updateQuestionNumber();
});


// SMALL Questions
var smallOpt11 = false;
$('#smallOpt1').click(function () {
  if (!smallOpt11) {
    $('#chat').append('<div class="col-md-8 text-right"><h3>' + Persona.opt1small + '</h3></div>');
    $(this).removeClass('btn-primary').addClass('btn-info disabled');
    $("#smallOpt2").prop('disabled', true);
    $("#smallOpt3").prop('disabled', true);
  }
  smallOpt11 = true;
});


var smallOpt12 = false;
$('#smallOpt2').click(function () {
  if (!smallOpt12) {
    $('#chat').append('<div class="col-md-8 text-right"><h3>' + Persona.opt1smal2 + '</h3></div>');
    $(this).removeClass('btn-primary');
    $(this).addClass('btn-info disabled');
    $("#smallOpt1").prop('disabled', true);
    $("#smallOpt3").prop('disabled', true);
  }
  smallOpt12 = true;
});

var smallOpt13 = false;
$('#smallOpt3').click(function () {
  if (!smallOpt13) {
    $('#chat').append('<div class="col-md-8 text-right"><h3>An answer to small question</h3></div>');
    $(this).removeClass('btn-primary');
    $(this).addClass('btn-info disabled');
    $("#smallOpt1").prop('disabled', true);
    $("#smallOpt2").prop('disabled', true);
  }
  smallOpt13 = true;
});

var count = 0;
var selected = [0, 0, 0];

function b1() {
  count++;
  selected[0] = 1;
  $('#smallOptionGroup1').remove();
  $('#chat').append('<div class="col-md-6 well que">' + Persona.opt11 + '</div>');
  $('#chat').append('<div class="col-md-8 well col-md-push-4 ans">' + Persona.opt11ans + '</div>');
  if (count < 2) {
    q();
  }
  disableButtons();
}

function b2() {
  count++;
  selected[1] = 1;
  $('#smallOptionGroup1').remove();
  $('#chat').append('<div class="col-md-8 well que">' + Persona.opt12 + '</div>');
  $('#chat').append('<div class="col-md-8 well col-md-push-4 ans">' + Persona.opt12ans + '</div>');
  if (count < 2) {
    q();
  }
  disableButtons();
}

function b3() {
  count++;
  selected[2] = 1;
  $('#smallOptionGroup1').remove();
  $('#chat').append('<div class="col-md-8 well que">' + Persona.opt13 + '</div>');
  $('#chat').append('<div class="col-md-8 well col-md-push-4 ans">' + Persona.opt13ans + '</div>');
  if (count < 2) {
    q();
  }
  disableButtons();
}

function disableButtons() {
  for (var i = 0; i < selected.length; i++) {
    if (selected[i]) {
      var id = '#smallOpt' + (i + 1);
      $(id).prop('disabled', true);
    } else {
      var id = '#smallOpt' + (i + 1);
      $(id).prop('disabled', false);
    }
  }
}


function setAnswerButtons1() {
  switch (questionNumber % 3) {
    case 0:

      $('#ansOpt1').text(Persona.ans3A);
      $('#ansOpt2').text(Persona.ans3B);
      $('#ansOpt3').text(Persona.ans3C);
      return;
    case 1:
      $('#ansOpt1').text(Persona.ans1A);
      $('#ansOpt2').text(Persona.ans1B);
      $('#ansOpt3').text(Persona.ans1C);
      return;
    case 2:
      $('#ansOpt1').text(Persona.ans2A);
      $('#ansOpt2').text(Persona.ans2B);
      $('#ansOpt3').text(Persona.ans2C);
      return;
  }
}

function q() {
  switch (questionNumber % 3) {
    case 0:
      showButtons(Persona.opt31, Persona.opt32, Persona.opt33);
      return;
    case 1:
      showButtons(Persona.opt11, Persona.opt12, Persona.opt13);
      return;
    case 2:
      showButtons(Persona.opt21, Persona.opt22, Persona.opt23);
      return;
  }
}
