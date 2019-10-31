
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