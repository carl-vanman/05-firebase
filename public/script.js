const display = document.querySelector('#displayData')
const fetchButton = document.querySelector('#fetchData')

fetchButton.addEventListener('click', async event => {
	// console.log('Hello world');
	try {
		const response = await fetch('/tools')
		const json = await response.json()

		let text = JSON.stringify(json)
		display.innerHTML = text

	} catch {
		console.log('Something went wrong');
	}
})