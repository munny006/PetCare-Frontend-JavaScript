const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle()
{
	nav.classList.toggle("active");
	navToggler.classList.toggle("active");
	//console.log('hi');
}
navToggler.addEventListener("click",navToggle);