export default ({ route, redirect }) => {
	console.log('process.server ========= ', process.server);
	if (process.server) return;

	const arr = ['index', 'user-login'];
	const user = window.localStorage.getItem('USER')

	if (arr.indexOf(route.name) === -1 && user === null) {
		redirect('/user/login');
	}
}