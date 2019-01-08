
const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.menu-item:nth-child(1)>p');
const about = document.querySelector('.menu-item:nth-child(2)>p');
const service = document.querySelector('.menu-item:nth-child(3)>p');
const work = document.querySelector('.menu-item:nth-child(4)>p');
const homeAfter =	document.querySelector('.menu-item:nth-child(1)>span');
const aboutAfter =	document.querySelector('.menu-item:nth-child(2)>span');
const serviceAfter =	document.querySelector('.menu-item:nth-child(3)>span');
const workAfter =	document.querySelector('.menu-item:nth-child(4)>span');


function init(){
	setMargin(homeAfter,getYOff(home));
	setMargin(aboutAfter,getYOff(about));
	setMargin(serviceAfter,getYOff(service));
	setMargin(workAfter,getYOff(work));
}

hamburger.classList.remove("active");
console.log('X:'+getX(hamburger)+' Y:'+getY(hamburger)+' !X:'+getXOff(hamburger)+' !Y:'+getYOff(hamburger)+' W:'+getHeight(hamburger)+' H:'+getHeight(hamburger));

function hamClicked() {
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
	if(target.classList.contains(classToToggle)){
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








// EVENTS

window.addEventListener('load', init);

home.addEventListener('mouseover', function (e) {setWidth(homeAfter,getWidth(home))});
about.addEventListener('mouseover', function (e) {setWidth(aboutAfter,getWidth(about))});
service.addEventListener('mouseover', function (e) {setWidth(serviceAfter,getWidth(service))});
work.addEventListener('mouseover', function (e) {setWidth(workAfter,getWidth(work))});

home.addEventListener('mouseout', function (e) {setWidth(homeAfter,0)});
about.addEventListener('mouseout', function (e) {setWidth(aboutAfter,0)});
service.addEventListener('mouseout', function (e) {setWidth(serviceAfter,0)});
work.addEventListener('mouseout', function (e) {setWidth(workAfter,0)});
