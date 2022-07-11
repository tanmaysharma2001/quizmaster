<script lang="ts">
  let activeID: number = -1;

  interface Question {
    questionNumber: number;

    question: string;

    options: string[];

    type: string;

    timeAlotted: number;

    correctResponseIndex: number;
  }

  let Questions: Question[] = [];

  function addQuestion() {
    let ques: Question = {
      questionNumber: 0,
      question: "",
      options: [],
      type: "",
      timeAlotted: 0,
      correctResponseIndex: 0,
    };

    ques.questionNumber = Questions.length + 1;

    ques.question = document.getElementById("questionTitle")?.value;

    let i = 1;
    for (; i < 5; i++) {
      let id: string = "option" + i;

      ques.options.push(document.getElementById(id)?.value);
    }

    ques.type = document.getElementById("questionType")?.value;

    ques.timeAlotted = Number(document.getElementById("questionTime")?.value);

    ques.correctResponseIndex =
      document.getElementById("inputState")?.selectedIndex;

    Questions = [...Questions, ques];

    console.log(Questions);
  }

  function displayQuestion(question: Question) {
    if (activeID != -1) {
      var currentElement = document
        .getElementById("question" + activeID)
        ?.classList.remove("active");
    }

    activeID = question.questionNumber;

    document
      .getElementById("question" + question.questionNumber)
      ?.classList.add("active");

    document.getElementById("questionTitle").value = question.question;
    document.getElementById("option1").value = question.options[0];
    document.getElementById("option2").value = question.options[1];
    document.getElementById("option3").value = question.options[2];
    document.getElementById("option4").value = question.options[3];

    document.getElementById("questionType").value = question.type;
    document.getElementById("questionTime").value =
      question.timeAlotted.toString();
    document.getElementById("inputState").selectedIndex =
      question.correctResponseIndex;
  }

  function clearQuestion() {
    if (activeID != -1) {
      var currentElement = document
        .getElementById("question" + activeID)
        ?.classList.remove("active");
      activeID = -1;
    }

    document.getElementById("questionTitle").value = "";
    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("option3").value = "";
    document.getElementById("option4").value = "";

    document.getElementById("questionType").value = "";
    document.getElementById("questionTime").value = "";
    document.getElementById("inputState").selectedIndex = 0;
  }

  function deleteQuestion() {
    let index: number = activeID - 1;
    Questions.splice(index, 1);
    Questions = Questions;
    activeID = -1;
  }

  function saveChanges() {
    let index: number = activeID - 1;
    Questions[index].question = document.getElementById("questionTitle")?.value;

    let i = 1;
    for (; i < 5; i++) {
      let id: string = "option" + i;

      Questions[index].options[i - 1] = document.getElementById(id)?.value;
    }

    Questions[index].type = document.getElementById("questionType")?.value;

    Questions[index].timeAlotted = Number(
      document.getElementById("questionTime")?.value
    );

    Questions[index].correctResponseIndex =
      document.getElementById("inputState")?.selectedIndex;

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

<section>
  <div class="quiz-create-container">
    <div class="top-container">
      <!-- Question-Entries -->

      <div class="question-container">
        <div class="questions-entries">
          <h1 class="display-4">Questions List</h1>

          <div class="list-group">
            {#each Questions as ques}
              <button
                on:click|preventDefault={displayQuestion(ques)}
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

      <div class="quiz-form">
        <form method="get" class="row g-3 question-form">
          <!-- Question Title -->
          <div class="col-12">
            <label for="questionTitle" class="form-label">Question Title</label>
            <input
              type="text"
              class="form-control"
              id="questionTitle"
              placeholder="Enter your question here..."
            />
          </div>

          <!-- Options -->

          <div class="col-md-6">
            <label for="option1" class="form-label">Option 1</label>
            <input type="text" class="form-control" id="option1" />
          </div>
          <div class="col-md-6">
            <label for="option2" class="form-label">Option 2</label>
            <input type="text" class="form-control" id="option2" />
          </div>
          <div class="col-md-6">
            <label for="option3" class="form-label">Option 3</label>
            <input type="text" class="form-control" id="option3" />
          </div>
          <div class="col-md-6">
            <label for="option4" class="form-label">Option 4</label>
            <input type="text" class="form-control" id="option4" />
          </div>

          <!-- Type and Time -->
          <div class="col-md-6">
            <label for="questionType" class="form-label">Question Type:</label>
            <input type="text" class="form-control" id="questionType" />
          </div>
          <div class="col-md-6">
            <label for="questionTime" class="form-label"
              >Time to allot(in minutes):</label
            >
            <input type="text" class="form-control" id="questionTime" />
          </div>

          <!-- Correct Response -->
          <div class="col-md-4">
            <label for="inputState" class="form-label">Correct Response:</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option value="1" id="1response">1st response</option>
              <option value="2" id="2response">2nd response</option>
              <option value="3" id="3response">3rd response</option>
              <option value="4" id="4response">4th response</option>
            </select>
          </div>
          <div class="buttons-form col-12">
            <button
              on:click|preventDefault={addQuestion}
              type="submit"
              class="btn btn-primary">Add Question</button
            >
            <button
              on:click|preventDefault={clearQuestion}
              type="submit"
              class="btn btn-primary">Clear Question</button
            >
            <button
              on:click|preventDefault={deleteQuestion}
              type="submit"
              class="btn btn-primary">Delete This Question</button
            >
            <button
              on:click|preventDefault={saveChanges}
              type="submit"
              class="btn btn-primary">Save Changes</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .top-container {
    width: 100%;
    height: 100vh;
    /* background-color: purple; */
    display: flex;
    /* padding-right: 150px; */
    background-image: url("$lib/assets/background.jpg");
  }

  .top-container > div {
    margin-right: 150px;
    margin-left: 50px;
    margin-top: 40px;
    padding: 10px;
  }

  .buttons {
    text-align: center;
    margin: 40px;
  }

  .buttons-form {
    text-align: center;
  }

  .question-container {
    /* border: 1px solid; */
    width: 530px;
    height: 600px;
  }

  .questions-entries {
    overflow: scroll;
    width: 450px;
    /* border: 1px solid; */
    height: 500px;
  }

  .quiz-form {
    /* border: 5px solid green; */
    border-radius: 10px;
    background-color: #9dd4ad;
    width: 700px;
    height: 500px;
    /* margin: auto; */
    /* margin-top: 40px; */
    /* padding: 10px; */
  }
</style>
