const hello = document.getElementById("h-hello");
const video = document.getElementsByTagName("video")[0];

function FadeHello () {
	let opacity = 1 - window.pageYOffset / 300;
	hello.style.opacity = opacity < 0 ? 0 : opacity;
}

function FadeVideo () {
	let opacity = 1 - window.pageYOffset / window.innerHeight;
	video.style.display = opacity < 0 ? "none" : "initial";
}

window.addEventListener("scroll", () => {
	FadeHello();
	FadeVideo();
});

let proj_index = 0;
const pimg = document.getElementById("project-image");
const ph = document.getElementById("project-header");
const pp = document.getElementById("project-description");
const list = JSON.parse(`[
	{
		"img": "res/img/tumor.png",
		"header": "Brain Tumor Detector",
		"link": "_",
		"info": "University project developed with Aw Thura that detects if an MRI scan contains a tumor or not using Random Forest Classifier"
	},
	{
		"img": "res/img/catch_me.png",
		"header": "CatchMe!",
		"link": "https://derinozon.itch.io/catchme",
		"info": "Made a game together with Aydın Özön in a week for Nokia 3310 Jam 3. Developed a 2D Game Engine from scratch in C++ for this game jam resulting in a lightweight and fast game that is less than 1MB"
	},
	{
		"img": "res/img/vloop.png",
		"header": "Virtual Loop",
		"link": "https://frauma.itch.io/virtualloop",
		"info": "Simulated a physics bending non euclidian world using tricks such as portals in Frauma Entertainments submission of 72 hour Mağara Jam 3."
	},
	{
		"img": "res/img/cyp.png",
		"link": "_",
		"header": "CYP Auto",
		"info": "Worked as an app developer for Revolando and b4bynd. Developed and built the Android/IOS port of the web based automobile sales platform CYP Auto in a week"
	},
	{
		"img": "res/img/kopia.png",
		"link": "https://derinozon.itch.io/kopia",
		"header": "Kopia",
		"info": "Frauma Entertainments submission on ATOM Game Jam 2 scoring #1 in popularity in 407 entries. Coded an exam cheating simulator with an AI teacher that tracks your behaviour using optimised methods in 72 hours."
	},
	{
		"img": "res/img/housein.png",
		"header": "ArchViz Demo 2019",
		"link": "https://www.youtube.com/watch?v=NxP5cp1gnN8",
		"info": "Did the level design and programming on this ArchViz demo in highschool"
	},
	{
		"img": "res/img/this2.png",
		"header": "This Website",
		"link": "_",
		"info": "Coded this lightweight staticly served website from scratch with modern HTML CSS and JS without using any frameworks or external resources."
	}
]`);

function SwitchProject (i) {
	pimg.src = "res/static.gif";
	proj_index += i;
	
	window.setInterval( () => {
		if (proj_index < 0) {
			proj_index = list.length-1;
		}
		if (proj_index >= list.length) {
			proj_index = 0;
		}
		
		pimg.src = list[proj_index].img;
		if (list[proj_index].link == '_') {
			pimg.parentElement.style.pointerEvents = "none";
		}
		else {
			pimg.parentElement.style.pointerEvents = "auto";
			pimg.parentElement.href = list[proj_index].link;
		}
		ph.innerHTML = list[proj_index].header;
		pp.innerHTML = list[proj_index].info;

	}, 1000);
}

function SendMail () {
	let content = document.getElementById("mailtext").value;
	if (content === '') return;

	let sender = document.getElementById("mailsender").value;
	if (sender === '') sender = "Subject";

	window.location.href = 'mailto:derinozon@gmail.com?subject='+sender+'&body='+content;
}

// Terminal FX //

const con = document.getElementById('console');
const target = document.getElementById('text');

function consoleText(words, colors) {
	if (colors === undefined) colors = ['#fff'];

	var letterCount = 1;
	var x = 1;
	var waiting = false;

	target.setAttribute('style', 'color:' + colors[0])
	window.setInterval(() => {
		var waitTime = 800;

		if (letterCount === 0 && waiting === false) {
			waiting = true;
	    	target.innerHTML = words[0].substring(0, letterCount);	

			window.setTimeout(() => {
				colors.push(colors.shift());
				words.push(words.shift());

				x = 1;
				target.setAttribute('style', 'color:' + colors[0])
				letterCount += x;
				waiting = false;
			}, waitTime)
	  	}
		else if (letterCount === words[0].length + 1 && waiting === false) {
			waiting = true;
			window.setTimeout(() => {
				x = -1;
				letterCount += x;
				waiting = false;
			}, waitTime)
		}
		else if (waiting === false) {
			target.innerHTML = words[0].substring(0, letterCount)
			letterCount += x;
		}
	}, 100)

  	// Blink //
	window.setInterval(
		() => con.className = (con.className === '') ? 'hidden' : ''
	, 400)
}

consoleText(['Python', 'Node JS', 'C++', 'C#', 'Java FX'], ['lightblue','yellow','magenta', 'green', 'brown']);
SwitchProject(0);