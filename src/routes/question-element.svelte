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
    for(let i = 0; i < options.length; i++) {
      if(options[i] === opn) {
        return i+1;
      }
    }
    return -1;
  }

</script>

<svelte:head>
  <title>Question - number</title>
</svelte:head>

<section>
  <div class="question-form">
    <label class="col-12 question-title" for="questionTitle"
      >{questionTitle}</label
    >

    <div class="row g-3 options-form col-12">
      {#each options as opn}
        <div class={"option" + indexOf(opn) + " col-md-6"}>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={"flexRadioDefault" + indexOf(opn)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {opn}
          </label>
        </div>
      {/each}
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
    height: 300px;
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
