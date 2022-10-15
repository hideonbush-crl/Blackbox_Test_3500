function iterateRecords(results) {
    setTimeout(function() {
        $(".map-body").addClass("loaded");
    }, 2000);
	// Setup the map as per the Leaflet instructions:
	// https://leafletjs.com/examples/quick-start/
	var map = L.map('map').setView([-27.4975, 153.0134], 19);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
    	attribution: '© OpenStreetMap'
	}).addTo(map);

	var circle1 = L.circle([-27.4975, 153.0134], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 5
	}).addTo(map);
	circle1.bindPopup('<b><strong>Music style:</strong> Electronic Music</b><br><b><strong>Music Name:</strong> XXXXX<br><b><strong><a href="https://open.spotify.com/">Click</a> listen together</strong><br><b><strong><a href="chat.html">Chat</a> with him/her</strong>');

    var circle2 = L.circle([-27.4974, 153.0125], {
		color: 'yellow',
		fillColor: '#FBE90B',
		fillOpacity: 0.5,
		radius: 5
	}).addTo(map);
	circle2.bindPopup('<b><strong>Music style:</strong> Pop Music</b><br><b><strong>Music Name:</strong> XXXXX<br><b><strong><a href="https://open.spotify.com/">Click</a> listen together</strong><br><b><strong><a href="chat.html">Chat</a> with him/her</strong>');

    var circle3 = L.circle([-27.4971, 153.0138], {
		color: 'grey',
		fillColor: '#858584',
		fillOpacity: 0.5,
		radius: 5
	}).addTo(map);
	circle3.bindPopup('<b><strong>Music style:</strong> Rock Music</b><br><b><strong>Music Name:</strong> XXXXX<br><b><strong><a href="https://open.spotify.com/">Click</a> listen together</strong><br><b><strong><a href="chat.html">Chat</a> with him/her</strong>');

    var circle4 = L.circle([-27.4978, 153.0129], {
		color: 'black',
		fillColor: '#171716',
		fillOpacity: 0.5,
		radius: 5
	}).addTo(map);
	circle4.bindPopup('<b><strong>Music style:</strong> Hiphop Music</b><br><b><strong>Music Name:</strong> XXXXX<br><b><strong><a href="https://open.spotify.com/">Click</a> listen together</strong><br><b><strong><a href="chat.html">Chat</a> with him/her</strong>');

    var circle5 = L.circle([-27.4977, 153.0137], {
		color: 'blue',
		fillColor: '#3D9DDC',
		fillOpacity: 0.5,
		radius: 5
	}).addTo(map);
	circle5.bindPopup('<b><strong>Music style:</strong> R&B Music</b><br><b><strong>Music Name:</strong> XXXXX<br><b><strong><a href="https://open.spotify.com/">Click</a> listen together</strong><br><b><strong><a href="chat.html">Chat</a> with him/her</strong>');
	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);
	}

	map.on('click', onMapClick);

}

$(document).ready(function() {

	var data = {
		resource_id: "35ea936d-083e-4ad6-beab-e0fede2cd3a6",
		limit: 100
	}

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp",
		cache: true,
		success: function(results) {
			iterateRecords(results);
		}
	});

});