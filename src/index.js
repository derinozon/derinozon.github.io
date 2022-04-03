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

const userAction = async () => {
	console.log("getting data");
	let l1 = 'http://dev.revolando.com/api/mail.php?msg=hello';
	let l2 = 'https://dero-mailapi.herokuapp.com/index.php?msg=hello';
	const response = await fetch(l2);
	
	alert(response.ok);
}

async function SendMailServer () {
	let content = document.getElementById("mailtext").value;
	if (content === '') return;

	let sender = document.getElementById("mailsender").value;
	if (sender === '') sender = "example@gmail.com";

	let l2 = 'https://dero-mailapi.herokuapp.com/index.php?msg=' + content + "&sender=" + sender;
	const response = await fetch(l2);

	if (!response.ok) {
		alert("You can't send two mails at the same day");
	}
	else {
		alert("Your mail has been sent successfully");
	}
}

let proj_index = 0;

function SwitchProject (i) {
	const pimg = document.getElementById("project-image");
	const ph = document.getElementById("project-header");
	const pp = document.getElementById("project-description");
	let img_arr = ["res/img/me.jpg", "res/img/MoM.jpg", "res/img/house-dev.jpg"];

	var list = JSON.parse( `[{
		"img": "res/img/catch_me.png",
		"header": "CatchMe!",
		"info": "Made a game together with Aydın Özön in a week for Nokia 3310 Jam 3. Developed a 2D Game Engine from scratch in C++ for this game jam resulting in a lightweight and fast game that is less than 1MB"
	  },
	  {
		"img": "res/img/kopia.png",
		"header": "Kopia",
		"info": "Frauma Entertainments submission on ATOM Game Jam 2 scoring #1 in popularity in 407 entries. Coded an exam cheating simulator with an AI teacher that tracks your behaviour using optimised methods in 72 hours."
	  },
	  {
		"img": "res/img/cyp.png",
		"header": "CYP Auto",
		"info": "Worked as an app developer for Revolando and b4bynd. Developed and built the Android/IOS port of the web based automobile sales platform CYP Auto in a week"
	  },
	  {
		"img": "res/img/vloop.png",
		"header": "Virtual Loop",
		"info": "Simulated a physics bending non euclidian world using tricks such as portals in Frauma Entertainments submission of 72 hour Mağara Jam 3."
	  },
	  {
		"img": "res/img/this2.png",
		"header": "This Website",
		"info": "Coded this lightweight staticly served website from scratch with modern HTML CSS and JS without using any frameworks or external resources."
	  }
	]` );
	proj_index += i;

	if (proj_index < 0) {
		proj_index = list.length-1;
	}
	if (proj_index >= list.length) {
		proj_index = 0;
	}

	pimg.src = list[proj_index].img;
	ph.innerHTML = list[proj_index].header;
	pp.innerHTML = list[proj_index].info;
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