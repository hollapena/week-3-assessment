function favoriteColor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is BLUE!');
}
function favoritePlace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is Germany!');
}
function favoriteRitual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is my morning quiet time, when I get to journal!');
}

const colorBtn=document.querySelector('#color');
colorBtn.addEventListener('click', favoriteColor);

const placeBtn=document.querySelector('#place');
placeBtn.addEventListener('click',favoritePlace);

const ritualBtn=document.querySelector('#ritual');
ritualBtn.addEventListener('click',favoriteRitual);
