<script lang="ts">
	import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	type Result = {
		userEmail: string;
		userScore: number;
	}

	let results: Result[] = [];

	onMount(async () => {
		const db = getFirestore();
		let collectionName: string = localStorage.resultsID;
		const ref = collection(db, collectionName);
		const snapshot = await getDocs(ref);
		results = snapshot.docs.map((doc) => doc.data()) as Result[];
	});

	let totalUsers: number;
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

	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
</svelte:head>

<section>
	<p class="top-heading display-6">Result</p>

	<table class="result-table table table-striped table-bordered">
		<thead class="table-dark">
			<tr>
				<th scope="col">User Email</th>
				<th scope="col">Score</th>
			</tr>
		</thead>

		<tbody>
			{#each results as user}
				<tr>
					<th scope="row">{user.userEmail}</th>
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
