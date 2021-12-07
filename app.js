// Globals
var tempResult = 1.01;
let score=0;
let qno=0;
let chkform=true;
function doMath(a, b, c) {
  switch (a) {
    case "+":
      return b + c;
    case "-":
      return b - c;
    case "*":
      return b * c;
    case "/":
      return b / c;
  }
}

function submitAnswer(result) {
  document.querySelector("#mathForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var userAnswer = document.querySelector("#answerInput").value;
    var bool = (result == userAnswer) ? true : false;

    if (bool === true) {
      // Set color to green for success
      score++;
      document.getElementById("score").innerHTML="Score = "+score;
      document.body.style.backgroundColor = "#34a853";
      setTimeout(function() {
        document.body.style.backgroundColor = "#333";
      }, 1000);
      // Clear input field
      document.querySelector("#answerInput").value = "";
      // Ask a new question
      randomCreator();
    } else {
      // Set color to red for failure
      document.body.style.backgroundColor = "#dc3545";
      setTimeout(function() {
        document.body.style.backgroundColor = "#333";
      }, 1000);
      if(chkform==true)
      {document.querySelector("#answerInput").value = "";
      // Ask a new question
      randomCreator();}
    }
  });
}

function randomCreator() {
  // Remove the answer if a hint was used
  if (document.querySelector(".correctAnswer")) {
    document.querySelector(".correctAnswer").remove();
  }

  // Set up the random numbers and operator
  var operators = ["+", "-", "*", "/"];
  var randomIntOne = parseInt((Math.random() * 100), 10);
  var randomIntTwo = parseInt((Math.random() * 100), 10);
  var randomOperator = operators[Math.floor(Math.random() * operators.length)];
  
  // Create the question text and set it in the document
  
  var el = document.querySelector(".questionText");
  el.innerHTML = ("What is ").concat(randomIntOne, " ", randomOperator, " ", randomIntTwo, "?");
  qno++;
  document.getElementById("quest").innerHTML="Q"+qno;
  // Do the math and round floats to two decimals
  var preliminaryResult = doMath(randomOperator, randomIntOne, randomIntTwo);
  var isFloat = (!Number.isInteger(preliminaryResult)) ? true : false;
  var result = (isFloat === true) ? preliminaryResult.toFixed(2) : preliminaryResult;
  tempResult = result;

  // Set event listener for the form based on browser type
  var userAnswerInput = document.querySelector("#answerInput");
  if (userAnswerInput.addEventListener) {
    userAnswerInput.addEventListener("submit", submitAnswer(result), false);
  } else if (userAnswerInput.attachEvent) {
    userAnswerInput.attachEvent("onsubmit", submitAnswer(result));
  }

  return result;
}

function valid()
{
    var x=document.forms["textform"]
    ["subform"].value;
    if(x=="")
    {
        alert("Please enter the answer");
        chkform=false;
        return false;
    }
  else
    {
        chkform=true;
    }
}

function answerHelp() {
  // Make sure the answer isn't already showing
  if (!document.querySelector(".correctAnswer")) {
    
  }
}
