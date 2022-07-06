<script lang="ts">
  interface Question {
    question: string;

    options: string[];

    type: string;

    timeAlotted: number;

    correctResponseIndex: number;
  }

  let Questions: Question[] = [];
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
  <div class="top-container">
    
    
    <div class="questions-entries">
      <h1 class="display-4">Questions List</h1>

      <div class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Question 1
        </button>
        <button type="button" class="list-group-item list-group-item-action"
          >Question 2</button
        >
      </div>
    </div>

    <div class="quiz-form">
      <form class="row g-3 question-form">
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
            <option id="1response">1st response</option>
            <option id="2response">2nd response</option>
            <option id="3response">3rd response</option>
            <option id="4response">4th response</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add Question</button>
        </div>
      </form>
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

  .questions-entries {
    width: 500px;
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
