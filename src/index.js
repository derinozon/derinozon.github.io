
function FadeHello (scrollPos) {
	let lim = document.getElementById("top-img").offsetHeight / 2;
	var x = document.getElementById("h-hello");
	let a = (lim - scrollPos) / lim;
	if (a < 0) return;
	//x.style.opacity = a;
	let info = document.getElementById("info");
	info.style.opacity = a;
}

function HandleContact () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "http://paper.rf.gd/api/", true);
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send("Your JSON Data Here");
}

window.addEventListener("scroll", (event) => {
	FadeHello(this.scrollY);
});

nav = document.getElementById("editor-nav");
btns = nav.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click",() => {
		for (let a = 0; a < btns.length; a++) {
			btns[a].classList.remove("active-editor-btn");
		}
		btns[i].classList.add("active-editor-btn");
	});
}

var btn = btns[0];
btn.classList.add("active-editor-btn");



/*
async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
	  method: 'POST', // *GET, POST, PUT, DELETE, etc.
	  mode: 'cors', // no-cors, *cors, same-origin
	  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	  credentials: 'same-origin', // include, *same-origin, omit
	  headers: {
		'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded',
	  },
	  redirect: 'follow', // manual, *follow, error
	  referrer: 'no-referrer', // no-referrer, *client
	  body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
  }




function ftch () {

	

	try {
		const data = await postData('http://paper.rf.gd/api/');
		console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
	  } catch (error) {
		console.error(error);
	  }
	  
	  
}
*/