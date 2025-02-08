document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([35.83811188799166, -115.0966740592097], 9); 

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(map);

    var geojson = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Name": "Good Springs"
            },
            "geometry": {
              "coordinates": [
                -115.43558379320969,
                35.831943168989795
              ],
              "type": "Point"
            },
            "id": 1
          },
          {
            "type": "Feature",
            "properties": {
              "Name": "primm"
            },
            "geometry": {
              "coordinates": [
                -115.3871209356343,
                35.61206524124357
              ],
              "type": "Point"
            },
            "id": 2
          },
          {
            "type": "Feature",
            "properties": {
              "Name": "(NCR) Military base",
              "marker-color": "#ffea00",
              "marker-size": "medium",
              "marker-symbol": "circle"
            },
            "geometry": {
              "coordinates": [
                -115.45746327853576,
                35.46641861776483
              ],
              "type": "Point"
            },
            "id": 3
          },
          {
            "type": "Feature",
            "properties": {
              "Name": "Nipton",
              "marker-size": "medium",
              "marker-symbol": "circle"
            },
            "geometry": {
              "coordinates": [
                -115.27119048855272,
                35.46765576359705
              ],
              "type": "Point"
            },
            "id": 4
          },
          {
            "type": "Feature",
            "properties": {
              "Name": "(NCR) Camp Searchlight",
              "marker-color": "#fbff00",
              "marker-size": "medium",
              "marker-symbol": "circle"
            },
            "geometry": {
              "coordinates": [
                -114.91941490143462,
                35.46511727834424
              ],
              "type": "Point"
            },
            "id": 5
          }
        ]
      }


L.geoJSON(geojson).bindPopup(function(layer){
    return layer.feature.properties.Name
})
.addTo(map);





});

