<script lang="ts">
  let totalUsers: number;

  interface result {
    userName: string;
    userNumber: number;
    userID: string;
    userScore: number;
    userRank: number;
  }

  let results: result[] = [
    {
      userName: "John",
      userNumber: 1,
      userID: "64581A",
      userScore: 18,
      userRank: 3,
    },
    {
      userName: "Mark",
      userNumber: 2,
      userID: "64281A",
      userScore: 16,
      userRank: 4,
    },
    {
      userName: "Dwight",
      userNumber: 3,
      userID: "25581A",
      userScore: 19,
      userRank: 2,
    },
    {
      userName: "Jim",
      userNumber: 4,
      userID: "25591A",
      userScore: 20,
      userRank: 1,
    },
  ];
</script>

<svelte:head>
  <title>Result!</title>

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
  <p class="top-heading display-6">Result</p>

  <table class="result-table table table-striped table-bordered">
    <thead class="table-dark">
      <tr>
        <th scope="col">Rank</th>
        <th scope="col">Username</th>
        <th scope="col">Score</th>
      </tr>
    </thead>

    <tbody>
      {#each results as user}
        <tr>
          <th scope="row">{user.userRank}</th>
          <td>{user.userName}</td>
          <td>{user.userScore}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
  .top-heading {
    text-align: center;
    margin: 30px;
  }

  .result-table {
    margin: 80px auto;
    width: 700px;
  }
</style>
