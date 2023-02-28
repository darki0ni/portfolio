const circles = document.querySelectorAll(".progress");
const numbers = document.querySelectorAll(".middle");

const cir = 472;

function circling() {
circles.forEach((circle, index) => {
    let counter = 0;
    const val = circle.getAttribute("data-value");
    setInterval(() => {
        if (counter == val) {
            clearInterval();
        } else {
            counter += 1;
            circle.style.strokeDashoffset = (cir - (cir / 100) * val);
            numbers[index].innerHTML = counter;
        }
    }, 10);
});
}


const animation_circling = document.querySelectorAll('.progressBar');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			circling();
            observer.unobserve(entry.target);
		}
	})
}, {
	threshold: 1
});

for (let i = 0; i < animation_circling.length; i++) {
	const el = animation_circling[i];

	observer.observe(el);
}