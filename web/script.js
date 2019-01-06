const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const bg = document.querySelector('#hero');

ham.classList.remove("active");
bg.classList.remove("blur");
function hamClicked() {
	console.log("click");
 if(ham.classList.contains("active")){
 	console.log("Unclicked");
 	ham.classList.remove("active");
 	menu.classList.add("hidden");
 	bg.classList.remove("blur");
 }else{
 	console.log("Clicked");
 	console.log(ham.classList);
 	ham.classList.add("active"); 
 	bg.classList.add("blur");
 	menu.classList.remove("hidden");
 };
}