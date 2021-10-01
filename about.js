console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted!');
}

function compliment(evt){
	evt.preventDefault();
	let complimentList = document.querySelector("#compliment-list");
	let compliment=complimentList.querySelectorAll('li');
	let randomCompliment=compliment[Math.floor(Math.random()*3)].textContent;
	alert(`${randomCompliment}`)
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let ducky = document.querySelector('#ducky-img');
ducky.addEventListener('mouseenter',compliment )