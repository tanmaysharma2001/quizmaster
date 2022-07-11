<script lang="ts">
  let currentIndex: number = 0;

  let userScore: number = 0;

  let gameID: string = "4A6985";
  let timeRemaining: number = 0;

  interface Question {
    questionNumber: number;

    question: string;

    options: string[];

    type: string;

    timeAlotted: number;

    correctResponseIndex: number;
  }

  let Questions: Question[] = [];

  for (let i = 0; i < Questions.length; i++) {
    timeRemaining += Questions[i].timeAlotted * 60;
  }

  var timerID = setInterval(countdown, 1000);

  function convertToMinutes() {
    var min = Math.floor(timeRemaining / 60);
    var seconds = timeRemaining % 60;
    let resu = min + ":" + seconds;
    return resu;
  }

  function countdown() {
    if (timeRemaining == -1) {
      clearTimeout(timeRemaining);
    } else {
      document.getElementById("timer").innerHTML =
        "Time Remaining: " + convertToMinutes();
      timeRemaining--;
    }
  }

  //sadsad

  import QuestionEle from "$lib/question-element.svelte";

  let userResponses: number[] = [];

  function finishQuiz() {
    if (document.getElementById("flexRadioDefault1")?.checked) {
      userResponses.push(1);
    } else if (document.getElementById("flexRadioDefault2")?.checked) {
      userResponses.push(2);
    } else if (document.getElementById("flexRadioDefault3")?.checked) {
      userResponses.push(3);
    } else if (document.getElementById("flexRadioDefault4")?.checked) {
      userResponses.push(4);
    } else {
      userResponses.push(0);
    }

    for (let i = 0; i < Questions.length; i++) {
      console.log(userResponses[i] + " " + Questions[i].correctResponseIndex);
      if (userResponses[i] === Questions[i].correctResponseIndex) {
        userScore++;
      }
    }

    document.getElementById("finishButton").style.visibility = "hidden";

    document.getElementById("result").style.visibility = "visible";
  }

  function nextQuestion() {
    if (document.getElementById("flexRadioDefault1")?.checked) {
      userResponses.push(1);
    } else if (document.getElementById("flexRadioDefault2")?.checked) {
      userResponses.push(2);
    } else if (document.getElementById("flexRadioDefault3")?.checked) {
      userResponses.push(3);
    } else if (document.getElementById("flexRadioDefault4")?.checked) {
      userResponses.push(4);
    } else {
      userResponses.push(0);
    }

    if (currentIndex === Questions.length - 2) {
      document.getElementById("nextButton").style.visibility = "hidden";
      document.getElementById("finishButton").style.visibility = "visible";
    }

    if (currentIndex === Questions.length - 1) {
      console.log("This is this last question.");
    } else {
      currentIndex++;
    }

    console.log(userResponses);
  }

  function previousQuestion() {
    if (currentIndex === 0) {
      console.log("This is the first question.");
    } else {
      currentIndex--;
    }
  }
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

  <link
    href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section>
  <div class="top-container">
    <div class="row justify-content-between">
      <div class="col-2"><p>Game ID: {gameID}</p></div>
      <div class="col-3">
        <p id="timer" style="text-align: right" />
      </div>
    </div>
  </div>

  <div class="question-part">
    <p style="font-size: 20px;">
      Question {currentIndex + 1} out of {Questions.length}
      <br />
    </p>

    <p style="visibility: hidden;" id="result">Your Result: {userScore}</p>

    <QuestionEle
      questionNumber={Questions[currentIndex].questionNumber}
      questionTitle={Questions[currentIndex].question}
      options={Questions[currentIndex].options}
      type={Questions[currentIndex].type}
      timeAlotted={Questions[currentIndex].timeAlotted}
      correctResponseIndex={Questions[currentIndex].correctResponseIndex}
    />

    <div class="buttons-container row g-3">
      <div class="col-md-6">
        <a
          on:click={finishQuiz}
          href="/result"
          id="finishButton"
          class="btn btn-primary transitionButtons"
          style="visibility:hidden"
        >
          Finish Quiz!
        </a>

        <!-- <button
          on:click|preventDefault={finishQuiz}
          class="btn btn-primary transitionButtons"
          for="flexRadioDefault1"
          id="finishButton"
          style="visibility: hidden"
        >
        Finish Quiz!
        </button> -->
      </div>

      <div class="col-md-6 align-self-center">
        <button
          on:click={nextQuestion}
          class="btn btn-primary transitionButtons"
          for="flexRadioDefault1"
          id="nextButton"
        >
          Next Question
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .top-container {
    margin: 20px 30px;
    font-size: 20px;
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
    /* text-align: center; */
  }

  section {
    margin-top: 0px;
    width: 100%;
    height: 90vh;
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
    background-image: url("$lib/assets/background.jpg");
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

  .transitionButtons {
    height: 50px;
    width: 200px;
    padding: 10px;
    /* background-color: #fcf4ec; */
    border-radius: 40px;
  }
</style>
