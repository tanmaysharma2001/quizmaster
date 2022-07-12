<script lang="ts">
  import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';
  let activeID: number = -1;

  type Question = {
    questionNumber: number;

    question: string;

    options: string[];

    type: string;

    timeAlotted: number;

    correctResponseIndex: number;
  }

  let Questions: Question[] = [];

  let questionNumber: number = 0;
  let question: string = "";
  let options: string[] = [];
  let type:string = "";
  let timeAlotted: number = 0;
  let correctResponseIndex: number = 0;
  let questionListHeading:string = "Questions List";

  async function addQuestion() {
    let ques: Question = {
      questionNumber: 0,
      question: "",
      options: [],
      type: "",
      timeAlotted: 0,
      correctResponseIndex: 0,
    };

    ques.questionNumber = Questions.length + 1;

    questionNumber = Questions.length + 1;

    ques.question = question;

    ques.options[0] = options[0];
    ques.options[1] = options[1];
    ques.options[2] = options[2];
    ques.options[3] = options[3];

    ques.type = type;

    ques.timeAlotted = timeAlotted;

    ques.correctResponseIndex = correctResponseIndex;

    const db = getFirestore();
    const questions = collection(db, 'questions');
    const newQues = await addDoc(questions, {
      questionNumber,
      question,
      options,
      type,
      timeAlotted,
      correctResponseIndex,
      uid: question,
    });

    Questions = [...Questions, ques];

    console.log(Questions);
  }

  function displayQuestion(Ques: Question) {

    if (activeID != -1) {
      var currentElement = document
        .getElementById("question" + activeID)
        ?.classList.remove("active");
    }

    activeID = Ques.questionNumber;

    document
      .getElementById("question" + Ques.questionNumber)
      ?.classList.add("active");

    question = Ques.question;
    options[0] = Ques.options[0];
    options[1] = Ques.options[1];
    options[2] = Ques.options[2];
    options[3] = Ques.options[3];

    type = Ques.type;
    timeAlotted = Ques.timeAlotted;
    correctResponseIndex = Ques.correctResponseIndex;
  }

  function clearQuestion() {
    if (activeID != -1) {
      var currentElement = document
        .getElementById("question" + activeID)
        ?.classList.remove("active");
      activeID = -1;
    }

    question = "";
    options[0] = "";
    options[1] = "";
    options[2] = "";
    options[3] = "";

    type = "";
    timeAlotted = 0;
    correctResponseIndex = 0;
  }

  function deleteQuestion() {
    let index: number = activeID - 1;
    Questions.splice(index, 1);
    Questions = Questions;
    activeID = -1;
  }

  function saveChanges() {
    let index: number = activeID - 1;
    Questions[index].question = question;

    Questions[index].options[0] = options[0];
    Questions[index].options[1] = options[1];
    Questions[index].options[2] = options[2];
    Questions[index].options[3] = options[3];

    Questions[index].type = type;

    Questions[index].timeAlotted = timeAlotted;

    Questions[index].correctResponseIndex = correctResponseIndex;

    Questions = Questions;
  }

  function clearQuestionList() {
    Questions.splice(0, Questions.length);
    Questions = Questions;
    activeID = -1;
  }
</script>

<svelte:head>
  <title>Create Your Own Quiz! - Username</title>

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap"
    rel="stylesheet"
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section class="createQuiz">
  <div class="d1" />
	<div class="d2" />
  <div class="container">
    <div class="row">

      <!-- Question-Entries -->
      <div class="question-container col-md-6">
        <div class="questions-entries">
          <h1 contenteditable="true" bind:innerHTML={questionListHeading} class="display-4"></h1>
          <p class="filler"> Create a quiz now !</p>
          <div class="list-group">
            {#each Questions as ques}
              <button
                on:click|preventDefault={() => displayQuestion(ques)}
                id={"question" + ques.questionNumber}
                type="button"
                class="list-group-item list-group-item-action"
                >Question {ques.questionNumber}</button
              >
            {/each}
          </div>
        </div>

        <div class="buttons">
          <button
            on:click|preventDefault={clearQuestionList}
            type="submit"
            class="btn btn-primary">Clear Questions List</button
          >
          <a href="/quiz">
            <button type="submit" class="btn btn-primary">Start the Quiz</button
            >
          </a>
        </div>
      </div>

      <!-- Quiz Form -->
      <div class="quiz-form row col-md-6">
        <form method="get" class="row g-3 question-form">
          <!-- Question Title -->
          <div class="col-12">
            <label for="questionTitle" class="form-label">Question Title</label>
            <input
            bind:value={question}
              type="text"
              class="form-control"
              id="questionTitle"
              placeholder="Enter your question here..."
            />
          </div>

          <!-- Options -->

          <div class="col-md-6">
            <label for="option1" class="form-label">Option 1</label>
            <input bind:value={options[0]} type="text" class="form-control" id="option1" />
          </div>
          <div class="col-md-6">
            <label for="option2" class="form-label">Option 2</label>
            <input bind:value={options[1]} type="text" class="form-control" id="option2" />
          </div>
          <div class="col-md-6">
            <label for="option3" class="form-label">Option 3</label>
            <input bind:value={options[2]} type="text" class="form-control" id="option3" />
          </div>
          <div class="col-md-6">
            <label for="option4" class="form-label">Option 4</label>
            <input bind:value={options[3]} type="text" class="form-control" id="option4" />
          </div>

          <!-- Type and Time -->
          <div class="col-md-12">
            <label for="questionType" class="form-label">Question Type</label>
            <input bind:value={type} type="text" class="form-control" id="questionType" />
          </div>
          <div class="col-12">
            <label for="questionTime" class="form-label">Time to allot(in minutes)</label>
            <input bind:value={timeAlotted} type="number" class="form-control" id="questionTime" />
          </div>

          <!-- Correct Response -->
          <div class="col-12">
            <label for="inputState" class="form-label">Correct Response</label>
            <select bind:value={correctResponseIndex} id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option value="1" id="1response">1<sup>st</sup> response</option>
              <option value="2" id="2response">2<sup>nd</sup> response</option>
              <option value="3" id="3response">3<sup>rd</sup> response</option>
              <option value="4" id="4response">4<sup>th</sup> response</option>
            </select>
          </div>
          <div class="btn-group col-12 row">
            <button 
              on:click|preventDefault={addQuestion}
              type="submit"
              class="btn btn-primary col-sm-6">Add Question</button>
            <button
              on:click|preventDefault={clearQuestion}
              type="submit"
              class="btn btn-primary col-sm-6">Clear Question</button>
            <button
              on:click|preventDefault={deleteQuestion}
              type="submit"
              class="btn btn-primary btn-block">Delete This Question</button>
            <button
              on:click|preventDefault={saveChanges}
              type="submit"
              class="btn btn-primary col-sm-6">Save Changes</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>

<style lang="scss">
  .createQuiz{
		width: 100vw;
		min-height: calc(100vh - 66px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 40px;
		font-size: 18px;
		background-color: rgba(245, 245, 245, 0.712);
		.d1 {
			width: 500px;
			height: 500px;
			background-color: #d8d8d831;
			position: fixed;
			top: -166px;
			right: -166px;
			transform: rotate(45deg);
		}
		.d2 {
			width: 800px;
			height: 800px;
			background-color: #d8d8d831;
			position: fixed;
			bottom: -200px;
			left: -200px;
			z-index: 0;
			border-radius: 50%;
			transform: rotate(-45deg);
		}
    .container{
      .row{
        margin: 0px !important;
        justify-content: space-between !important;
      }
      position: relative;
      line-height: 40px;
      form{
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        z-index: 2;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        min-width: 300px;
        display: flex;
        
        label {
          font-size: 15px;
          font-family: Montserrat;
          font-weight: bold;
          margin-bottom: 0px;
        }
        input{
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          padding: 5px;
          margin-bottom: 5px;
        }
        .btn-group{
          margin-top: 20px !important;
        }
        .btn{
          border: 2px solid white !important;
          border-radius: 0px !important;
          height: 50px;
          font-size: 13px;
          font-family: Montserrat;
        }
      }
      .filler{
        font-size: 15px;
        color: rgba(0, 0, 0, 0.575);
        font-family: Montserrat;
        margin: 10px;
      }
    }
  }
</style>
