const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle()
{
	nav.classList.toggle("active");
	navToggler.classList.toggle("active");
	//console.log('hi');
}
navToggler.addEventListener("click",navToggle);


//theme

function themeLightDark(){
const switcherBtn = document.querySelector(".js-switcher-btn");
const icon = switcherBtn.querySelector("i");

function changeIcon(){
	if(document.body.classList.contains("dark")){
		icon.classList.remove("fa-moon-o");
		icon.classList.add("fa-sun-o");
	}
	else{
		icon.classList.remove("fa-sun-o");
		icon.classList.add("fa-moon-o");
	}
}
switcherBtn.addEventListener("click",()=>{
	document.body.classList.toggle("dark");
	changeIcon();
	if(document.body.classList.contains("dark")){
		IconStorage.setItem("theme","dark");
	}
	else{
		IconStorage.setItem("theme","light");
	}
});
changeIcon();
}
themeLightDark();