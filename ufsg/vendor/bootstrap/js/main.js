//Form code based on https://www.youtube.com/watch?v=C7NsIRhoWuE//
document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#btn').onclick= check;

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "1909") {
		correct++;
}
	if (question2 == "fbk") {
		correct++;
}
	if (question3 == "unite") {
		correct++;
	}

	var messages = ["You know so much, but you can always learn more! Check out the rest of the site to be even more informed.", "Not too bad! Top off your UF SG knowledge by checking out the rest of this website.", "You seem to be new to this- no problem! That's exactly why this website exists. Look around and get informed!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

});
