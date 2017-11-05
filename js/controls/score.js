// Global
var questionNumber = 1;
var score = 900;
var Persona = Katie;

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

    $('<div class="col-md-8 text-right"><h3>' + Persona.smallQuestion + '</h3></div>').insertAfter('#textInput');

    // show hidden questions
    // TODO show 3 questions
    $('#smallOptionGroup1').removeClass('hidden');
    showButtons();
  }
});

function showButtons() {
  var buttons = '<div class="col-md-8 col-md-push-1" id="smallOptionGroup1"><div class="btn-group-vertical"><button type="button" class="btn btn-primary" id="smallOpt1" onclick="b1()">' + Persona.opt1 + '</button><button type="button" class="btn btn-primary" id="smallOpt2" onclick="b2()">' + Persona.opt2 + '</button> <button type="button" class="btn btn-primary" id="smallOpt3" onclick="b3()">' + Persona.opt3 + '</button> </div> </div>';
  $('#chat').append(buttons);
}

// MAIN ANSWERS
$('#ansOpt1').click(function () {
  var ans = getCorrectAnswer() === 1;
  console.log(ans);
  updateQuestionNumber();
});


$('#ansOpt2').click(function () {
  var ans = getCorrectAnswer() === 2;
  console.log(ans);
  updateQuestionNumber();
});

$('#ansOpt3').click(function () {
  var ans = getCorrectAnswer() === 3;
  console.log(ans);
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
    $(this).prop('disabled', true);
    $(this).removeClass('btn-primary');
    $(this).addClass('btn-info');
    $("#smallOpt1").prop('disabled', true);
    $("#smallOpt3").prop('disabled', true);
  }
  smallOpt12 = true;
});

var smallOpt13 = false;
$('#smallOpt3').click(function () {
  if (!smallOpt13) {
    $('#chat').append('<div class="col-md-8 text-right"><h3>An answer to small question</h3></div>');
    $(this).prop('disabled', true);
    $(this).removeClass('btn-primary');
    $(this).addClass('btn-info');
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
  $('#chat').append('<div class="col-md-8">' + Persona.opt1 + '</div>');
  $('#chat').append('<div class="col-md-8 col-md-push-4">' + Persona.opt1ans + '</div>');
  if (count < 2) {
    showButtons();
  }
  disableButtons();
}

function b2() {
  count++;
  selected[1] = 1;
  $('#smallOptionGroup1').remove();
  $('#chat').append('<div class="col-md-8">' + Persona.opt2 + '</div>');
  $('#chat').append('<div class="col-md-8 col-md-push-4">' + Persona.opt2ans + '</div>');
  if (count < 2) {
    showButtons();
  }
  disableButtons();
}

function b3() {
  count++;
  selected[2] = 1;
  $('#smallOptionGroup1').remove();
  $('#chat').append('<div class="col-md-8">' + Persona.opt3 + '</div>');
  $('#chat').append('<div class="col-md-8 col-md-push-4">' + Persona.opt3ans + '</div>');
  if (count < 2) {
    showButtons();
  }
  disableButtons();
}

function disableButtons() {
  for (var i = 0; i < selected.length; i++) {
    if (selected[i]) {
      var id = '#smallOpt' + (i + 1);
      $(id).prop('disabled', true);
    }
  }
}


function setAnswerButtons1() {
  $('#ansOpt1').text(Persona.ans1A);
  $('#ansOpt2').text(Persona.ans1B);
  $('#ansOpt3').text(Persona.ans1C);
}
