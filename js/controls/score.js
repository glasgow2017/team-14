// Global
// var score = $('span#score').text();


$("#usr").on('keyup', function (e) {
  if (e.keyCode === 13) {
    var input = $('#usr').val();
    console.log(input);
  }
});

$("#ans").on('keyup', function (e) {
  if (e.keyCode === 13) {
    var input = $('#ans').val();
    console.log(input);
    $("#ans").prop('disabled', true);
    // add new question or answer
    $('<div class="col-md-8 text-right"><h3>' + input + '</h3></div>').insertAfter('#textInput');

    // show hidden questions
    $('#smallOptionGroup1').removeClass('hidden');
  }
});


$('#ansOpt1').click(function () {
  var questionNum = parseInt($('#questionNumber').text());
  var ans = correctAnswer(questionNum);
  if (ans === 1) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }

  updateQuestion();
});


$('#ansOpt2').click(function () {
  var questionNum = parseInt($('#questionNumber').text());
  var ans = correctAnswer(questionNum);
  if (ans === 2) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }
  updateQuestion();
});

$('#ansOpt3').click(function () {
  var questionNum = parseInt($('#questionNumber').text());
  var ans = correctAnswer(questionNum);
  if (ans === 3) {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }
  updateQuestion();

});


// get correct answer {1,2,3} based on question id {0-9}
// btw, all hardcoded :)
function correctAnswer(questionId) {
  switch (questionId) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 1;
    case 4:
      return 2;
    case 5:
      return 1;
    case 6:
      return 3;
    case 7:
      return 2;
    case 8:
      return 1;
    case 9:
      return 2;
  }
}


function updateQuestion() {
  // get current question
  var questionElement = $('#questionNumber');
  var currentQuestion = parseInt(questionElement.text());
  questionElement.text(currentQuestion + 1);
}


var smallOpt11 = false;
$('#smallOpt1').click(function () {
  if (!smallOpt11) {
    $('#chat').append('<div class="col-md-8 text-right"><h3>An answer to small question</h3></div>');
    $(this).prop('disabled', true);
    $(this).removeClass('btn-primary');
    $(this).addClass('btn-info');
    $("#smallOpt2").prop('disabled', true);
    $("#smallOpt3").prop('disabled', true);
  }
  smallOpt11 = true;
});


var smallOpt12 = false;
$('#smallOpt2').click(function () {
  if (!smallOpt12) {
    $('#chat').append('<div class="col-md-8 text-right"><h3>An answer to small question</h3></div>');
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
