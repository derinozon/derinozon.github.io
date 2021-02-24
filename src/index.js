const hello = document.getElementById("h-hello");

function FadeHello (scrollPos) {
	let lim = hello.offsetHeight / 2;
	
	let a = (lim - scrollPos) / lim;
	if (a < 0) return;
	
	hello.style.opacity = a;
}

window.addEventListener("scroll", (event) => {
	FadeHello(this.scrollY);
});