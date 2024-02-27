//togle class active
const navbarnav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
navbarnav.classList.toggle('active');
};

//click diluar menghilangkan navbar-nav
const menu = document.querySelector('#menu');
document.addEventListener('click', function(e){
	if(!menu.contains(e.target) && !navbarnav.contains(e.target)){
		navbarnav.classList.remove('active');
	}
});