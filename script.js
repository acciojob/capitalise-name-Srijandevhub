//your JS code here. If required.
document.getElementById("fname").addEventListener("blur", (e) => {
	e.target.value = e.target.value.toUpperCase();
})