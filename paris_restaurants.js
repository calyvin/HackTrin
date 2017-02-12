var array2 = ["Le Cinq", "Pierre Gagnaire", "Septime", "Clamato", "Le Jules Verne", "Frenchie", "Restaurant Lasserre", "Verjus", "Epicure", "Le Trin Bleu"];

var r1 ="";
var r2, r3, r4, r5;
document.addEventListener('DOMContentLoaded', function() {
	r1 = array2[Math.floor(Math.random()*array2.length)];
		document.getElementById("r1").innerHTML = r1;
		array2.splice(array2.indexOf(r1), array2.indexOf(r1)+1);
		console.log(array2);

	r2 = array2[Math.floor(Math.random()*array2.length)];
		document.getElementById("r2").innerHTML = r2;
		array2.splice(array2.indexOf(r2), array2.indexOf(r2)+1);
		console.log(array2);

	r3 = array2[Math.floor(Math.random()*array2.length)];
		document.getElementById("r3").innerHTML = r3;
		array2.splice(array2.indexOf(r3), array2.indexOf(r3)+1);
		console.log(array2);

	r4 = array2[Math.floor(Math.random()*array2.length)];
		document.getElementById("r4").innerHTML = r4;
		array2.splice(array2.indexOf(r4), array2.indexOf(r4)+1);
		console.log(array2);

	r5 = array2[Math.floor(Math.random()*array2.length)];
		document.getElementById("r5").innerHTML = r5;
		array2.splice(array2.indexOf(r5), array2.indexOf(r5)+1);
		console.log(array2);

}, true);