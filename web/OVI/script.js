
const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.menu-item:nth-child(1)>p');
const about = document.querySelector('.menu-item:nth-child(2)>p');
const service = document.querySelector('.menu-item:nth-child(3)>p');
const work = document.querySelector('.menu-item:nth-child(4)>p');
const contact = document.querySelector('.menu-item:nth-child(5)>p');
const homeAfter =	document.querySelector('.menu-item:nth-child(1)>span');
const aboutAfter =	document.querySelector('.menu-item:nth-child(2)>span');
const serviceAfter =	document.querySelector('.menu-item:nth-child(3)>span');
const workAfter =	document.querySelector('.menu-item:nth-child(4)>span');
const contactAfter =	document.querySelector('.menu-item:nth-child(5)>span');
console.log("%c \r\n  _____            _   _____ _      _      \r\n |  __ \\          | | |  __ (_)    (_)     \r\n | |__) |_ _ _   _| | | |__) | _ __ _  ___ \r\n |  ___\/ _` | | | | | |  ___\/ | \'__| |\/ _ \\\r\n | |  | (_| | |_| | | | |   | | |  | |  __\/\r\n |_|   \\__,_|\\__,_|_| |_|   |_|_|  |_|\\___|\r\n  _____           _    __      _ _       \r\n |  __ \\         | |  \/ _|    | (_)      \r\n | |__) |__  _ __| |_| |_ ___ | |_  ___  \r\n |  ___\/ _ \\| \'__| __|  _\/ _ \\| | |\/ _ \\ \r\n | |  | (_) | |  | |_| || (_) | | | (_) |\r\n |_|   \\___\/|_|   \\__|_| \\___\/|_|_|\\___\/ \r\n  _                     _          _   \r\n | |                   | |        | |  \r\n | |     ___   __ _  __| | ___  __| |  \r\n | |    \/ _ \\ \/ _` |\/ _` |\/ _ \\\/ _` |  \r\n | |___| (_) | (_| | (_| |  __\/ (_| |_ \r\n |______\\___\/ \\__,_|\\__,_|\\___|\\__,_(_)","font-family:monospace");
// alert("This Website Is Still A Work In Progress.")

function init(){
	if(!hasClass(hamburger, "active")){
		console.log("This Website Is Still A Work In Progress.");
		setMargin(homeAfter,getYOff(home));
		setMargin(aboutAfter,getYOff(about));
		setMargin(serviceAfter,getYOff(service));
		setMargin(workAfter,getYOff(work));
		setMargin(contactAfter,getYOff(contact));
		console.log("Resize");
	}
}
hamburger.classList.remove("active");
console.log('X:'+getX(hamburger)+' Y:'+getY(hamburger)+' !X:'+getXOff(hamburger)+' !Y:'+getYOff(hamburger)+' W:'+getHeight(hamburger)+' H:'+getHeight(hamburger));

function hamClicked() {
	init()
	toggleClass(hamburger, "active");
	toggleClass(document.querySelector('.menu'), "hidden");
	toggleAllClass(document.querySelectorAll('[blurable]'), "blur");
}

function toggleAllClass(target, classToToggle){
 console.log(target.length);
	 for(let i = 0; i<target.length;i++){
	 	toggleClass(target[i], classToToggle);
	 	console.log('Modified : ' + target[i] + ' Toggled : ' + classToToggle);
	 }	
}

function toggleClass(target, classToToggle){
	if(hasClass(target,classToToggle)){
 		target.classList.remove(classToToggle);
	 }else{
	 	target.classList.add(classToToggle); 
	 }
}

function getX(ele){
	return ele.getBoundingClientRect().left+'px';
}
function getY(ele){
	return ele.getBoundingClientRect().top+'px';
}
function getXOff(ele){
	return ele.getBoundingClientRect().left + ele.getBoundingClientRect().width+'px';
}
function getYOff(ele){
	return ele.getBoundingClientRect().top + ele.getBoundingClientRect().height+'px';
}
function getWidth(ele){
	return ele.getBoundingClientRect().width+'px';
}
function getHeight(ele){
	return ele.getBoundingClientRect().height+'px';
}
function setWidth(ele, n){
	ele.style.width = n;
}
function setHeight(ele, n){
	ele.style.height = n;
}
function setX(ele, n){
	ele.style.left = n;
}
function setY(ele, n){
	ele.style.top = n;
}
function setMargin(ele, n){
	ele.style.marginTop = n;
}
function smoothScrollTo(ele){
	ele.scrollIntoView({behavior: 'smooth'});
	hamClicked();
}
function hasClass(ele, c){
	if(ele.classList.contains(c)){
		return true;
	}else{
		return false;
	}
}








// EVENTS

window.addEventListener('load', init);
window.addEventListener('resize', init);
window.addEventListener('keydown', function (e){
	if(e.key == "f"){
		window.location = "http://www.paulpirie.com/OLDDESIGN/";
	}
});

home.addEventListener('mouseover', function (e) {setWidth(homeAfter,getWidth(home))});
about.addEventListener('mouseover', function (e) {setWidth(aboutAfter,getWidth(about))});
service.addEventListener('mouseover', function (e) {setWidth(serviceAfter,getWidth(service))});
work.addEventListener('mouseover', function (e) {setWidth(workAfter,getWidth(work))});
contact.addEventListener('mouseover', function (e) {setWidth(contactAfter,getWidth(contact))});

home.addEventListener('mouseout', function (e) {setWidth(homeAfter,0)});
about.addEventListener('mouseout', function (e) {setWidth(aboutAfter,0)});
service.addEventListener('mouseout', function (e) {setWidth(serviceAfter,0)});
work.addEventListener('mouseout', function (e) {setWidth(workAfter,0)});
contact.addEventListener('mouseout', function (e) {setWidth(contactAfter,0)});

home.addEventListener('click', function (e) {smoothScrollTo(document.querySelector('#home'))});
about.addEventListener('click', function (e) {smoothScrollTo(document.querySelector('#about'))});
service.addEventListener('click', function (e) {smoothScrollTo(document.querySelector('#service'))});
work.addEventListener('click', function (e) {smoothScrollTo(document.querySelector('#work'))});
contact.addEventListener('click', function (e) {smoothScrollTo(document.querySelector('#contact'))});