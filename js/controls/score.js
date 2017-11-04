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
    $("#ques").append("<h1>Another Question?</h1>").append("<label for='ans'><input type='text' class='form-control' id='ans'></label>");
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
  questionElement.text((currentQuestion + 1));
}



