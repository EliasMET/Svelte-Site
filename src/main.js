import App from './components/sessions.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;