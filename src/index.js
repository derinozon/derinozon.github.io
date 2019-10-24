
function FadeHello (scrollPos) {
	let lim = document.getElementById("top-img").offsetHeight / 2;
	var x = document.getElementById("h-hello");
	let a = (lim - scrollPos) / lim;
	if (a < 0) return;
	x.style.opacity = a;
}

window.addEventListener("scroll", (event) => {
	FadeHello(this.scrollY);
});

var btns = document.getElementsByClassName("editor-btn");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click",() => {
		for (let a = 0; a < btns.length; a++) {
			btns[a].classList.remove("active-editor-btn");
		}
		btns[i].classList.add("active-editor-btn");
	});
}

var btn = document.getElementsByClassName("editor-btn")[0];
btn.classList.add("active-editor-btn");