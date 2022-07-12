<script lang="ts">
	import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';

	const auth = getAuth();
	const user = auth.currentUser;
	let userEmail;

	if (user !== null) {
		userEmail = user.email;
	}

	let currentIndex: number = 0;

	let userScore: number = 0;

	let gameID: string = '4A6985';
	let timeRemaining: number = 0;

	type Question = {
		questionNumber: number;

		question: string;

		options: string[];

		type: string;

		timeAlotted: number;

		correctResponseIndex: number;
	};

	//alksdnjsakldn

	let Questions: Question[] = [];
	let correctResponses: number[] = [];
	let timeAlotteds: number[] = [];
	let questionsElements = '';
	let questionTitle = '';
	let submitButton = '';

	import QuestionEle from '$lib/question-element.svelte';
	import { goto } from '$app/navigation';

	let userResponses: number[] = [];

	onMount(async () => {
		const db = getFirestore();
		const ref = collection(db, 'questions');
		const snapshot = await getDocs(ref);
		Questions = snapshot.docs.map((doc) => doc.data()) as Question[];
		// console.log(Questions);
		// showQuestions(Questions);
		for (var i = 0; i < Questions.length; i++) {
			correctResponses.push(Questions[i].correctResponseIndex);
			timeAlotteds.push(Questions[i].timeAlotted);
		}
	});

	function showQuestions(Questions: Question[]) {
		var output = [];
		var answers;

		console.log(Questions);

		// for each question...
		for (var i = 0; i < Questions.length; i++) {
			// output.push('<QuestionEle questionNumber={Questions['+i+'].questionNumber} questionTitle={Questions['+i+'].question} options={Questions['+i+'].options} type={Questions['+i+'].type} timeAlotted={Questions['+i+'].timeAlotted} correctResponseIndex={Questions['+i+'].correctResponseIndex} />');

			answers = [];

			// for each available answer to this question...
			for (var j = 0; j < Questions[i].options.length; j++) {
				answers.push(
					'<label>' +
						'<input type="radio" name="question' +
						i +
						'" value="' +
						j +
						'">' +
						j +
						': ' +
						Questions[i].options[j] +
						'</label>'
				);
			}

			output.push(
				'<div class="question">' +
					Questions[i].question +
					'</div>' +
					'<div class="answers">' +
					answers.join('') +
					'</div>'
			);
		}
		questionsElements = output.join('');
	}

	async function showResults(Questions: Question[]) {
		var quizContainer = document.getElementById('quiz');

		var answerContainers = quizContainer.querySelectorAll('.answers');

		// keep track of user's answers
		var userAnswer = 0;
		var numCorrect = 0;

		// for each question...
		for (var i = 0; i < correctResponses.length; i++) {
			var radios = answerContainers[i].querySelectorAll('.inputs');

			for (var j = 0; j < radios.length; j++) {
				if (radios[j].checked) {
					userAnswer = radios[j].value;
					userResponses.push(userAnswer);
				}
			}

			if (userAnswer == correctResponses[i]) {
				numCorrect++;
			} else {
				continue;
			}
		}

		let userScore: number = numCorrect;

		const db = getFirestore();
		const results = collection(db, 'results');
		const newResult = await addDoc(results, {
			userEmail,
			userScore
		});

		alert(numCorrect);

		goto('/result');
	}

	var timer: string = '';

	setTimeout(() => {
		// console.log("Hellow")

		// console.log(Questions);
		// console.log(Questions);

		// let b: number = 0;

		for (let i = 0; i < Questions.length; i++) {
			timeRemaining += Number(Questions[i].timeAlotted) * 60;
		}

		// console.log(timeRemaining + "----");

		var timerID = setInterval(countdown, 1000);

		function convertToMinutes() {
			var min = Math.floor(timeRemaining / 60);
			var seconds = timeRemaining % 60;
			let resu = min + ':' + seconds;
			return resu;
		}

		function countdown() {
			if (timeRemaining == -1) {
				clearTimeout(timeRemaining);
			} else {
				timer = 'Time Remaining: ' + convertToMinutes();
				timeRemaining--;
			}
		}
	}, 3000);
</script>

<svelte:head>
	<title>Quiz Page</title>

	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
		crossorigin="anonymous"
	/>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
</svelte:head>

<section>
	<div class="top-container">
		<div class="row justify-content-between">
			<div class="col-2"><p>Game ID: {gameID}</p></div>
			<div class="col-3">
				<p contenteditable="true" bind:textContent={timer} id="timer" style="text-align: right" />
			</div>
		</div>
	</div>

	<div id="quiz" class="quiz">
		{#each Questions as Ques}
			<p style="text-align:center">Question {Ques.questionNumber} out of {Questions.length}</p>
			<QuestionEle
				questionNumber={Ques.questionNumber}
				questionTitle={Ques.question}
				options={Ques.options}
				type={Ques.type}
				timeAlotted={Ques.timeAlotted}
				correctResponseIndex={Ques.correctResponseIndex}
			/>
		{/each}
	</div>
	<div class="buttons-container">
		<button on:click|preventDefault={showResults} class="result-button btn btn-primary"
			>Finish and Show Results</button
		>
	</div>
	<!-- suidskhfjkdshfkjdsh -->
</section>

<style onload="this.media='all'">
	.top-container {
		margin: 20px 30px;
		font-size: 20px;
		font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
		/* text-align: center; */
	}

	section {
		margin-top: 0px;
		width: 100%;
		height: 90vh;
		font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
		/* text-align: center; */
	}

	.quiz {
		margin: auto;
		/* text-align: center; */
	}

	.question-part {
		/* text-align: center; */
		margin: 100px 300px;
		/* float: right; */
	}

	.buttons-container {
		margin: 20px;
		text-align: center;
	}

	.result-button {
		height: 50px;
		width: 200px;
		padding: 10px;
		border-radius: 40px;
	}
</style>
