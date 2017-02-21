


$(document).ready(function() {


var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;

var number = 10;

var intervalId;

/*switches*/

questionOneTimer = true;
questionTwoTimer = false;
questionThreeTimer = false;
questionFourTimer = false;
questionFiveTimer = false;


/*end switches*/


/*on click of the startGame button, game will start with the button being hidden, and the trivia content popping up
*/

$(".btn-start").click(function(){
    $(".btn-start").hide();
    $("p").hide();
   	triviaQuestion1();

});

$(".btn-start").click(run);


/*When the game starts, a countdown timer will begin with the first question and possible answers 
being displayed*/
	


function run() {
	intervalId = setInterval(decrement, 1000);
	console.log(number);
}

function stop() {
	clearInterval(intervalId);
}

function decrement() {

	number--;

	$(".timer-content").html("<div class='timer'>" + number +  "</div>");

	if (number === 0 && questionOneTimer) {
				triviaQuestion2();
				number = 10;
				unanswered += 1;
				questionOneTimer = false;
				questionTwoTimer = true;
			}
	if (number === 0 && questionTwoTimer) {
				triviaQuestion3();
				number = 10;
				unanswered += 1;
				questionTwoTimer = false;
				questionThreeTimer = true;
			}
	if (number === 0 && questionThreeTimer) {
				triviaQuestion4();
				number = 10;
				unanswered += 1;
				questionThreeTimer = false;
				questionFourTimer = true;
			}
	if (number === 0 && questionFourTimer) {
				triviaQuestion5();
				number = 10;
				unanswered += 1;
				questionFourTimer = false;
				questionFiveTimer = true;
			}
	if (number === 0 && questionFiveTimer) {
		unanswered += 1;
				finalResults();
			}
	
}


triviaQuestion1 = function() {
	
			$(".question-content").html("How many children did Nedd Stark biologically have?");
			$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary wrongAnswer'> Seventeen </button> <br>" +  
				"<button class='btn btn-primary wrongAnswer'> Six  </button><br>" +
				"<button class='btn btn-primary rightAnswer'> Four </button><br>" +
				"<button class='btn btn-primary wrongAnswer'> Five </button><br> </div>");	
			$(".wrongAnswer").click(function(){
				console.log("wrong Answer");
				incorrectAnswer += 1;
				triviaQuestion1Answer("Sorry, the correct answer was Four!");
			});
			$(".rightAnswer").click(function(){
				console.log("right Answer");
				correctAnswer += 1;
				console.log(correctAnswer);
				triviaQuestion1Answer("Correct!");
			});

			
		
}

triviaQuestion2 = function() {
	number = 10;
	$(".gif-content").hide();
	$(".question-content").html("Which one is <i>not</i> one of Khal Drogo's Bloodriders");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary rightAnswer'> Aggo </button> <br>" +  
		"<button class='btn btn-primary wrongAnswer'> Haggo </button><br>" +
		"<button class='btn btn-primary wrongAnswer'> Cohollo</button><br>" +
		"<button class='btn btn-primary wrongAnswer'> Qotho </button><br> </div>");	
	$(".wrongAnswer").click(function(){
		console.log("wrong Answer");
		incorrectAnswer += 1;
		triviaQuestion2Answer("Sorry, the correct answer was Aggo!");
	});
	$(".rightAnswer").click(function(){
		console.log("right Answer");
		correctAnswer += 1;
		console.log(correctAnswer);
		triviaQuestion2Answer("Correct!");
	});
	
}

triviaQuestion3 = function(x) {
	number = 10;
	$(".gif-content").hide();
	$(".question-content").html("What is the name of Daenerys' largest dragon?");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary wrongAnswer'> Rhaegal </button> <br>" +  
		"<button class='btn btn-primary wrongAnswer'>  Viserion </button><br>" +
		"<button class='btn btn-primary wrongAnswer'> Aegon </button><br>" +
		"<button class='btn btn-primary rightAnswer'> Drogon </button><br> </div>");	
	$(".wrongAnswer").click(function(){
		console.log("wrong Answer");
		incorrectAnswer += 1;
		triviaQuestion3Answer("Sorry, the correct answer was Aggo!");
	});
	$(".rightAnswer").click(function(){
		console.log("right Answer");
		correctAnswer += 1;
		console.log(correctAnswer);
		triviaQuestion3Answer("Correct!");
	});
}

triviaQuestion4 = function(x) {
	number = 10;
	$(".gif-content").hide();
	$(".question-content").html("What is the name of House Tarly's Valyrian steel sword?");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary wrongAnswer'> Longclaw </button> <br>" +  
		"<button class='btn btn-primary rightAnswer'>  Heartsbane </button><br>" +
		"<button class='btn btn-primary wrongAnswer'> Ice </button><br>" +
		"<button class='btn btn-primary wrongAnswer'> Hearteater </button><br> </div>");	
	$(".wrongAnswer").click(function(){
		console.log("wrong Answer");
		incorrectAnswer += 1;
		triviaQuestion4Answer("Sorry, the correct answer was Aggo!");
	});
	$(".rightAnswer").click(function(){
		console.log("right Answer");
		correctAnswer += 1;
		console.log(correctAnswer);
		triviaQuestion4Answer("Correct!");
	});
}

triviaQuestion5 = function(x) {
	number = 10;
	$(".gif-content").hide();
	$(".question-content").html("What was the name of Jorah Mormont's father?");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary wrongAnswer'> Brahn </button> <br>" +  
		"<button class='btn btn-primary wrongAnswer'>  Geor </button><br>" +
		"<button class='btn btn-primary rightAnswer'> Jeor </button><br>" +
		"<button class='btn btn-primary wrongAnswer'> Aemon </button><br> </div>");	
	$(".wrongAnswer").click(function(){
		console.log("wrong Answer");
		incorrectAnswer += 1;
		triviaQuestion5Answer("Sorry, the correct answer was Aggo!");
	});
	$(".rightAnswer").click(function(){
		console.log("right Answer");
		correctAnswer += 1;
		console.log(correctAnswer);
		triviaQuestion5Answer("Correct!");
	});
}

/*When the user clicks on an answer it will tell you whether the answer was right or not, what the correct 
answer was, and an image or gif to give it more pizzaz. Then, 5 seconds later (with no user actions) it will 
go to the next question*/

triviaQuestion1Answer = function(x) {
	number = 10;
	$(".timer-content").html("<div class='timer'>" + x +  "</div>");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary'> Four </button></div>");
	$(".gif-content").html("<div class='gif-content'><img src='https://media.giphy.com/media/pWqNzqge6cKJy/giphy.gif' alt='Nedd Stark' style='width:400px;height:400px;'></div>");
	
	setTimeout(triviaQuestion2, 5000);
}



triviaQuestion2Answer = function(x) {
	number = 10;
	$(".timer-content").html("<div class='timer'>" + x +  "</div>");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary'> Aggo </button></div>");
	$(".gif-content").html("<div class='gif-content'><img src='https://media.giphy.com/media/7ItqE84cZH7Ne/source.gif' alt='Nedd Stark' style='width:400px;height:400px;'></div>");
	$(".gif-content").show();
	setTimeout(triviaQuestion3, 5000);
}

triviaQuestion3Answer = function(x) {
	number = 10;
	$(".timer-content").html("<div class='timer'>" + x +  "</div>");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary'> Drogon </button></div>");
	$(".gif-content").html("<div class='gif-content'><img src='https://media.giphy.com/media/Mi0Cx2dIYKxa/giphy.gif' alt='Nedd Stark' style='width:400px;height:400px;'></div>");
	$(".gif-content").show();
	setTimeout(triviaQuestion4, 5000);
}

triviaQuestion4Answer = function(x) {
	number = 10;
	$(".timer-content").html("<div class='timer'>" + x +  "</div>");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary'> Heartsbane </button></div>");
	$(".gif-content").html("<div class='gif-content'><img src='https://media.giphy.com/media/iU7QUbHXVsS2s/giphy.gif' alt='Nedd Stark' style='width:400px;height:400px;'></div>");
	$(".gif-content").show();
	setTimeout(triviaQuestion5, 5000);
}

triviaQuestion5Answer = function(x) {
	number = 10;
	$(".timer-content").html("<div class='timer'>" + x +  "</div>");
	$(".trivia-content").html("<div class='answer-content'> <button class='btn btn-primary'> Jeor </button></div>");
	$(".gif-content").html("<div class='gif-content'><img src='https://media.giphy.com/media/9DZC4EswebYas/giphy.gif' alt='Nedd Stark' style='width:400px;height:400px;'></div>");
	$(".gif-content").show();
	setTimeout(finalResults, 5000);
}



/*Once the user goes through all the questions, it should display "how they did" and show them their incorrect 
answers, their correct answers, and their unanswered answers.  Then, it should give them a button to start over.
which resets the game from the beginning.*/

finalResults = function() {

	stop()
	$(".question-content").html("The Trivia Masters send their regards.");
	$(".timer-content").html("<div class='timer'>" + "How'd you do?" +  "</div>");
	$(".trivia-content").html("<div class='answer-content'> <br><br><br><p>  Correct: " + correctAnswer + "</p><br>" +
	  " <div class='answer-content'> <br><br><br><p>  Incorrect: " + incorrectAnswer + "</p><br>" +
	  "<div class='answer-content'> <br><br><br><p>  Unanswered: " + unanswered + "</button><br> </p>");
	$(".gif-content").html("<div class='gif-content'><img src='https://media.giphy.com/media/LrN9NbJNp9SWQ/giphy.gif' alt='Nedd Stark' style='width:400px;height:400px;'></div>");
	$(".gif-content").show();

}






});