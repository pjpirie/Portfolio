const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const blur = document.querySelector('[blurable]');

ham.classList.remove("active");
console.log(document.stylesheet);
function hamClicked() {

	toggleClass(document.querySelector('.hamburger'), "active");
	toggleClass(document.querySelector('.menu'), "hidden");
	toggleAllClass(document.querySelectorAll('[blurable]'), "blur");
	// toggleClassAllSelector(document.querySelector('.blurable'), "blur");

 // if(ham.classList.contains("active")){
 // 	ham.classList.remove("active");
 // 	menu.classList.add("hidden");
 // 	toggleClassAllSelector();
 // }else{
 // 	ham.classList.add("active"); 
 // 	blur.classList.add("blur");
 // 	menu.classList.remove("hidden");
 // };
}


function toggleAllClass(target, classToToggle){
 console.log(target.length);
	 for(let i = 0; i<target.length;i++){
	 	toggleClass(target[i], classToToggle);
	 	console.log('Modified : ' + target[i] + ' Toggled : ' + classToToggle);
	 }	
}

function toggleClass(target, classToToggle){
	if(target.classList.contains(classToToggle)){
 		target.classList.remove(classToToggle);
	 }else{
	 	target.classList.add(classToToggle); 
	 };
}