(function() {
  var questions = [
    {
        question: "What does HTML stand for?",
        choices: [

            "Hyper Tag Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language"
        ],
        correctAnswer: 1,
    },
    {
        question: "What does CSS stand for?",
        choices: [
            "Computing Style Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Creative Styling Sheet"
        ],
        correctAnswer: 2,
    },
    {
        question: "Where should a CSS file be referenced in a HTML file?",
        choices: [
            "Before any HTML code",
            "After all HTML code",
            "Inside the head section",
            "Inside the body section"
        ],
        correctAnswer: 2,
    },
    {
        question:
            "What is the correct format for aligning written content to the center of the page in CSS?",
        choices: [
            "Text-align:center;",
            "Font-align:center;",
            "Text:align-center;",
            "Font:align-center;"
        ],
        correctAnswer: 0,
    },
    {
        question:
            "What is the correct format for changing the background colour of a div in CSS?",
        choices: [
            "Bg-color:red;",
            "bg:red;",
            "Background-colour:red;",
            "Background-color:red;"
        ],
        correctAnswer: 3,
    },
    {
        question: "Which is the correct CSS syntax?",
        choices: [
            "Body {color: black}",
            "{body;color:black}",
            "{body:color=black(body}",
            "body:color=black"
        ],
        correctAnswer: 0,
    },
    {
        question: "Select the correct HTML tag to make a text italic?",
        choices: ["Italic", "II", "IT", "I"],
        correctAnswer: 3,
    },
    {
        question: "Select the correct HTML tag to make a text bold.",
        choices: ["bo", "bb", "b", "bold"],
        correctAnswer: 2,
    },
];

var questionCounter = 0;
var selections = []; 
var quiz = $('#quiz'); 

displayNext();

$('#next').on('click', function (e) {
 e.preventDefault();

 if(quiz.is(':animated')) {
   return false;
 }
 choose();

 if (isNaN(selections[questionCounter])) {
   alert('Please make a selection!');
 } else {
   questionCounter++;
   displayNext();
 }
});

$('#prev').on('click', function (e) {
 e.preventDefault();

 if(quiz.is(':animated')) {
   return false;
 }
 choose();
 questionCounter--;
 displayNext();
});

$('#start').on('click', function (e) {
 e.preventDefault();

 if(quiz.is(':animated')) {
   return false;
 }
 questionCounter = 0;
 selections = [];
 displayNext();
 $('#start').hide();
});

$('.button').on('mouseenter', function () {
 $(this).addClass('active');
});
$('.button').on('mouseleave', function () {
 $(this).removeClass('active');
});

function createQuestionElement(index) {
 var qElement = $('<div>', {
   id: 'question'
 });

 var header = $('<h2>Question ' + (index + 1) + ':</h2>');
 qElement.append(header);

 var question = $('<p>').append(questions[index].question);
 qElement.append(question);

 var radioButtons = createRadios(index);
 qElement.append(radioButtons);

 return qElement;
}

function createRadios(index) {
 var radioList = $('<ul>');
 var item;
 var input = '';
 for (var i = 0; i < questions[index].choices.length; i++) {
   item = $('<li>');
   input = '<input type="radio" name="answer" value=' + i + ' />';
   input += questions[index].choices[i];
   item.append(input);
   radioList.append(item);
 }
 return radioList;
}

function choose() {
 selections[questionCounter] = +$('input[name="answer"]:checked').val();
}

function displayNext() {
 quiz.fadeOut(function() {
   $('#question').remove();

   if(questionCounter < questions.length){
     var nextQuestion = createQuestionElement(questionCounter);
     quiz.append(nextQuestion).fadeIn();
     if (!(isNaN(selections[questionCounter]))) {
       $('input[value='+selections[questionCounter]+']').prop('checked', true);
     }

     if(questionCounter === 1){
       $('#prev').show();
     } else if(questionCounter === 0){

       $('#prev').hide();
       $('#next').show();
     }
   }else {
     var scoreElem = displayScore();
     quiz.append(scoreElem).fadeIn();
     $('#next').hide();
     $('#prev').hide();
     $('#start').show();
   }
 });
}

function displayScore() {
 var score = $('<p>',{id: 'question'});

 var numCorrect = 0;
 for (var i = 0; i < selections.length; i++) {
   if (selections[i] === questions[i].correctAnswer) {
     numCorrect++;
   }
 }

 score.append('You got ' + numCorrect + ' questions out of ' +
              questions.length + ' right!!!');
 return score;
}
})();
