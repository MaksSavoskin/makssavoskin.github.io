var time1 = new Date();

function ready() {

	var time2 = new Date();
	document.getElementById("time").innerHTML = `Время загрузки: ${time2 - time1}`;
}

document.addEventListener("DOMContentLoaded", ready);
