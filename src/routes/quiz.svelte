<script lang="ts">
	import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';

	const auth = getAuth();
	const user = auth.currentUser;
	let userEmail: string|null;
	let questionNum = 1;
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
		for (let i = 0; i < Questions.length; i++) {
			correctResponses.push(Questions[i].correctResponseIndex);
			timeAlotteds.push(Questions[i].timeAlotted);
		}
	});

	function showQuestions(Questions: Question[]) {
		let output = [];
		let answers;

		console.log(Questions);

		// for each question...
		for (let i = 0; i < Questions.length; i++) {
			// output.push('<QuestionEle questionNumber={Questions['+i+'].questionNumber} questionTitle={Questions['+i+'].question} options={Questions['+i+'].options} type={Questions['+i+'].type} timeAlotted={Questions['+i+'].timeAlotted} correctResponseIndex={Questions['+i+'].correctResponseIndex} />');

			answers = [];

			// for each available answer to this question...
			for (let j = 0; j < Questions[i].options.length; j++) {
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
		let quizContainer = document.getElementById('quiz');

		let answerContainers = quizContainer!.querySelectorAll('.answers');

		// keep track of user's answers
		let userAnswer = 0;
		let numCorrect = 0;

		// for each question...
		for (let i = 0; i < correctResponses.length; i++) {
			let radios = answerContainers[i].querySelectorAll('.inputs');
			
			for (let j = 0; j < radios.length; j++) {
				let item = radios[j] as HTMLInputElement;
				if (item.checked) {
					userAnswer = parseInt(item.value);
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

	let timer: string = '';

	setTimeout(() => {
		for (let i = 0; i < Questions.length; i++) {
			timeRemaining += Number(Questions[i].timeAlotted) * 60;
		}

		// console.log(timeRemaining + "----");

		let timerID = setInterval(countdown, 1000);

		function convertToMinutes() {
			let min = Math.floor(timeRemaining / 60);
			let seconds = timeRemaining % 60;
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

<section class="CreateQuizzes">
	<div class="row justify-content-between quizHeader">
		<div class="col-6"><p>Game ID: {gameID}</p></div>
		<div class="col-6">
			<p contenteditable="true" bind:textContent={timer} id="timer" style="text-align: right" />
		</div>
	</div>
	<div id="quiz" class="quiz">
		{#each Questions as Ques, i}
		    <div class="q col-md-8">
				<p class="header"> Question {questionNum+i} out of {Questions.length}</p>
				<QuestionEle
					questionNumber={Ques.questionNumber}
					questionTitle={Ques.question}
					options={Ques.options}
					type={Ques.type}
					timeAlotted={Ques.timeAlotted}
					correctResponseIndex={Ques.correctResponseIndex}/>
			</div>
		{/each}
	</div>
	<button on:click|preventDefault={() => showResults} class="result-button btn btn-primary"
			>Finish and Show Results</button
		>
</section>

<style lang="scss">
	.CreateQuizzes{
		margin: 0 auto;
		width: 100vw;
		min-height: 100vh;
		font-family: Montserrat;
		position: relative;
		.quizHeader{
			width: 100vw;
			background-color: black;
			color: white;
			padding: 10px;
			margin: 0px;
			margin-bottom: 20px;
			position: sticky;
			top: 0;
			z-index: 20;
		}
		.quiz{
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			.q{
				margin: 20px 0px;	
				background-color: rgba(212, 212, 212, 0.438);
				padding: 20px;
				border-radius: 3px;
				.header{
					font-size: 0.75rem;
					font-weight: 100;
				}
			}
		}
		.result-button{
			display: block;
			margin: 30px auto;
		}
	}
</style>