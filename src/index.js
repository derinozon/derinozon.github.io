const hello = document.getElementById("h-hello");

function FadeHello () {
	let opacity = 1 - window.pageYOffset / 300;
	if (opacity < 0) opacity = 0;
	
	hello.style.opacity = opacity;
}

window.addEventListener("scroll", () => {
	FadeHello();
});

function SendMail () {
	let content = document.getElementById("mailtext").value;
	
	if (content === '') return;
	window.open('mailto:derinozon@gmail.com?subject=Hello&body='+content);
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