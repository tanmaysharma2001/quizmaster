// import Counter from './Counter.svelte'
import { render, fireEvent } from '@testing-library/svelte';
import Footer from '../src/lib/Footer/footer.svelte';
import Navbar from '../src/lib/Header/Navbar.svelte';
// import loginForm from '../src/lib/loginForm.svelte';

test('test footer', async () => {
	const results = render(Footer);
  expect(() => results.getByText("Copyright ©2022 All rights reserved | Made with ♥ by QuizMaster dev team.")).not.toThrow();
});

// test('test navbar', async () => {
// 	const results = render(Navbar);
//   expect(() => results.getByText("Copyright ©2022 All rights reserved | Made with ♥ by QuizMaster dev team.")).not.toThrow();
// });
