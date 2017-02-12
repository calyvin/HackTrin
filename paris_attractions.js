var array = ["Eiffel Tower", "Louvre Museum", "Cathédrale Notre-Dame de Paris","Avenue des Champs-Élysées","Palais Garnier Opera House & the Bibliotèchque-Musée de l'Opera","Place de la Concorde","Arc de Triomphe","Sainte-Chapelle","Luxembourg Gardens","Sacré-Coeur and Quartier Montmartre","Panthéon","Place de Vosges","Place Vendome","Centre Pompidou","Les Invalides","Palais-Royal","Bastille","Place du Châtelet & Tour Saint-Jacques","La Conciergerie","Grand Arche of La Défense","Bustling Boulevards & Legendary Cafés"];

var pick1, pick2, pick3, pick4, pick5;

function Function1(A){
	pick1 = A[Math.floor(Math.random()*A.length)];
	document.getElementById("pick1").innerHTML = pick1;
	console.log(pick1);
}
document.addEventListener('DOMContentLoaded', function() {
  Function1(array); // 2nd
  Function2(array); // 2nd
  Function3(array); // 2nd
  Function4(array);
  Function5(array);
}, true);


function Function2(A){
	do {
		pick2 = A[Math.floor(Math.random()*A.length)];
	}
	while(pick1 == pick2);
	document.getElementById("pick2").innerHTML = pick2;
	console.log(pick2);
}


function Function3(A){
	do{
		pick3 = A[Math.floor(Math.random()*A.length)];
	}
	while(pick3 == pick1 && pick3 == pick2);
	
	document.getElementById("pick3").innerHTML = pick3;
	console.log(pick3);
}


function Function4(A){
	do{
		pick4 = A[Math.floor(Math.random()*A.length)];
	} 	
	while(pick4 == pick3 && pick4 == pick2 && pick4 == pick1);

	document.getElementById("pick4").innerHTML = pick4;
	console.log(pick4);
}


function Function5(A){
	do{
		pick5 = A[Math.floor(Math.random()*A.length)];
	}	
	while(pick5 == pick4 && pick5 == pick3 && pick5 == pick2 && pick5 == pick1);
	document.getElementById("pick5").innerHTML = pick5;
	console.log(pick5);
}



