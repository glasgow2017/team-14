// Global
var questionNumber = 1;
var score = 900;
var Persona = Jane;
var smallQuestionNumber = 1;

// set initial question
$('#mainQuestionText').text(Persona.mainQuestion1);
$('#intro').text(Persona.info);


// user input
$("#ans").on('keyup', function (e) {
  if (e.keyCode === 13) {
    // disable input
    $("#ans").prop('disabled', true);
    // TODO store data into DB (or send it somewhere)
    var input = $('#ans').val();
    console.log(input); // store THIS to the DB

    $('<div class="col-md-8 text-right"><h3>' + Persona.smallQuestion + '</h3></div>').insertAfter('#textInput');

    // show hidden questions
    // TODO show 3 questions
    $('#smallOptionGroup1').removeClass('hidden');
  }
});


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
