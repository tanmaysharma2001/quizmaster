<script lang="ts">
  interface Question {
    question: string;

    options: string[];

    type: string;

    timeAlotted: number;

    correctResponseIndex: number;
  }
</script>

<svelte:head>
  <title>Question - number</title>
</svelte:head>

<section>
  <div class="top-container">
    <div class="question-container">
      <h3 class="display-6">Timer:</h3>
      <div class="question-form">
        <label class="col-12 question-title" for="questionTitle"
          >Question Title</label
        >

        <div class="row g-3 options-form col-12">
          <div class="option1 col-md-6">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Option 1
            </label>
          </div>

          <div class="option2 col-md-6">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Option 2
            </label>
          </div>

          <div class="option3 col-md-6">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Option 3
            </label>
          </div>

          <div class="option4 col-md-6">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <label class="form-check-label" for="flexRadioDefault4">
              Option 4
            </label>
          </div>
        </div>

        <div class="buttons-container row g-3">
          <div class="col-md-6">
            <button class="btn btn-primary transitionButtons" for="flexRadioDefault1">
              Previous Question
            </button>
          </div>

          <div class="col-md-6">
            <button class="btn btn-primary transitionButtons" for="flexRadioDefault1">
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .top-container {
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    padding-left: 150px;
    background-image: url("$lib/assets/background.jpg");
  }

  .question-form {
    width: 900px;
    background-color: #9dd4ad;
    height: 400px;
    border-radius: 15px;
    padding: 20px;
  }

  .question-title {
    overflow: scroll;
    font-size: 20px;
    background-color: #fcf4ec;
    border-radius: 25px;
    height: 80px;
    padding: 10px;
  }

  .options-form {
    margin: 20px;
  }

  .form-check-input {
    margin-top: 15px;
    margin-right: 5px;
    size: 20px;
    /* background-color: #fcf4ec; */
  }

  .form-check-label {
    height: 50px;
    width: 350px;
    padding: 10px;
    background-color: #fcf4ec;
    border-radius: 40px;
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
