<script lang="ts">
	interface Question {
		questionNumber: number;

		question: string;

		options: string[];

		type: string;

		timeAlotted: number;

		correctResponseIndex: number;
	}

	export let questionNumber: number;
	export let questionTitle: string;
	export let options: string[];
	export let type: string;
	export let timeAlotted: number;
	export let correctResponseIndex: number;

	function indexOf(opn: string) {
		for (let i = 0; i < options.length; i++) {
			if (options[i] === opn) {
				return i + 1;
			}
		}
		return -1;
	}
</script>

<svelte:head>
	<title>Question - number</title>
</svelte:head>

<section class="quizPage">
	<div class="d1" />
	<div class="d2" />
	<div class="question-form row">
		<div class="question col-12 question-title" for="questionTitle">{questionTitle}</div>
		<div class="answers row g-3 options-form col-12">
			{#each options as opn}
				<div class="col-sm-3">
					<input
						class="inputs form-check-input"
						type="radio"
						name={'question' + questionNumber}
						value={indexOf(opn)}
					/>
					<label class="form-check-label" for="flexRadioDefault1">{opn}</label>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.quizPage{
		.question-form {
			position: relative;
			justify-content: center;
			align-items: center;
			.row{
				margin: 0 !important;
			}
			.col-sm-3{
				text-align: center !important;
			}
			.col-12{
				font-size: 1.5rem;
				font-weight: bold;
				text-align: left !important;
			}
			.question{
				font-size: 1.5rem;
				font-weight: bold;
				text-align: center;
			}
			.options-form{
				display: flex;
				flex-direction: row;
				.form-check-label{
					font-size: 15px;
					font-weight: 100;
				}
				.question-title{
					font-size: 1.5rem;
					font-weight: bold;
					text-align: center;
				}

			}
		}	
	}
</style>
