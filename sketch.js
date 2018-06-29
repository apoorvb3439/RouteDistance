let start;
let end;

function calcRoute(){
	start=document.getElementById('start').value;
	end=document.getElementById('end').value;
	let url='http://maps.googleapis.com/maps/api/distancematrix/json?origins='+start+'&destinations='+end+'&mode=driving&language=en-EN&sensor=false';
	loadJSON(url,printData);
}

function printData(data){
	console.log(data);
	document.getElementById('distance').value=data.rows[0].elements[0].distance.value;
	document.getElementById('duration').value=data.rows[0].elements[0].duration.text;

	document.getElementById('startAddr').value=data.origin_addresses;
	document.getElementById('endAddr').value=data.destination_addresses;
}
