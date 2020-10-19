L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';

var map = L.mapbox.map('map', 'mapbox.light')
  .setView([38, -77], 9)
  .addControl(L.mapbox.geocoderControl('mapbox.places'));

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',


    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: "Toy Story (1995)<br>Toy Story 2 (1999)</br><br>Toy Story 3 (2010)</br>",
            description:'Small Ohio town<br><img src="https://bit.ly/3jbmcnl" class="popupimage" /></br> ',
            'marker-color': '#3333FF',
            'marker-size': 'large',
            'marker-symbol': 'playground',
        },
        geometry: {
            type: 'Point',
            coordinates: [-82.907123,40.417287]
        }
        
    },
    
    {
        type: 'Feature',
        properties: {
            title: "A Bug's Life (1998)",
            description: 'Texas/Mexico Border<br><img src="https://bit.ly/3kcbVZB" class="popupimage" /></br> ',
            'marker-color': '#00B800',
            'marker-size': 'large',
            'marker-symbol': 'garden',
        },
        geometry: {
            type: 'Point',
            coordinates: [-97.997572,26.099748]
        }
        
    },
    
    {
        type: 'Feature',
        properties: {
            title: "Monster's, Inc (2001)",
            description:'Alternate Universe<br><img src="https://bit.ly/348jdYA" class="popupimage"/></br>',
            'marker-color': '#00E6E6',
            'marker-size': 'large',
            'marker-symbol': 'industrial',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.284003,37.832860]
        }
     },

    {
        type: 'Feature',
        properties: {
            title: "Finding Nemo (2003)",
            description: 'Great Barrier Reef<br><img src="https://bit.ly/35fqc1a" class="popupimage" /> </br>',
            'marker-color': '#008AB8',
            'marker-size': 'large',
            'marker-symbol': 'wetland',
        },
        geometry: {
            type: 'Point',
            coordinates: [145.817162,-16.447536]
        }
        
    },
    
    {
        type: 'Feature',
        properties: {
            title: 'The Incredibles (2004)',
            description: 'Midwest,Chicago<br><img src="https://bit.ly/358lzWU" class="popupimage" /> </br>',
            'marker-color': '#B80000',
            'marker-size': 'large',
            'marker-symbol': 'pitch',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.935059,41.748920]
        }
        
    },
    
     {
        type: 'Feature',
        properties: {
            title: 'Cars (2006)',
            description:'Route 66, Arizona<br><img src="https://bit.ly/37liMfM" class="popupimage"/></br> ',
            'marker-color': '#FF3300',
            'marker-size': 'large',
            'marker-symbol': 'car',
        },
        geometry: {
            type: 'Point',
            coordinates: [-96.370346,35.898082]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Ratatouille (2007)",
            description:'Paris, France<br><img src="https://bit.ly/2TjG2CF" class="popupimage"/></br>',
            'marker-color': '#9966FF',
            'marker-size': 'large',
            'marker-symbol': 'restaurant',
        },
        geometry: {
            type: 'Point',
            coordinates: [2.352222,48.856614]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "WALL-E (2008)",
            description:'Future Earth/Space<br><img src="https://bit.ly/34ckazk" class="popupimage"/></br>',
            'marker-color': '#6E2525',
            'marker-size': 'large',
            'marker-symbol': 'rocket',
        },
        geometry: {
            type: 'Point',
            coordinates: [-119.417932,36.778261]
        }
     },

     {
        type: 'Feature',
        properties: {
            title: "Up (2009)",
            description:'Angel Falls,Venezuela<br><img src="https://bit.ly/3lTb5RM" class="popupimage"/></br>',
            'marker-color': '#00CC99',
            'marker-size': 'large',
            'marker-symbol': 'suitcase',
        },
        geometry: {
            type: 'Point',
            coordinates: [-62.535556,5.967500]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Cars 2 (2011)",
            description:'Tokyo, Japan<br><img src="https://bit.ly/3kdFlq5" class="popupimage"/></br>',
            'marker-color': '#FF3300',
            'marker-size': 'large',
            'marker-symbol': 'car',
        },
        geometry: {
            type: 'Point',
            coordinates: [139.731992,35.709026]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Cars 2 (2011)",
            description:'Porto Corsa,Italy<br><img src="https://bit.ly/3kdFlq5" class="popupimage"/></br>',
            'marker-color': '#FF3300',
            'marker-size': 'large',
            'marker-symbol': 'car',
        },
        geometry: {
            type: 'Point',
            coordinates: [9.078961,9.078961]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Cars 2 (2011)",
            description:'England<br><img src="https://bit.ly/3kdFlq5" class="popupimage"/></br>',
            'marker-color': '#FF3300',
            'marker-size': 'large',
            'marker-symbol': 'car',
        },
        geometry: {
            type: 'Point',
            coordinates: [-0.127758,51.507351]
        }
     },
     
       {
        type: 'Feature',
        properties: {
            title: "Brave (2012)",
            description:'Scotland<br><img src="https://bit.ly/3kaKMWJ" class="popupimage"/></br>',
            'marker-color': '#006666',
            'marker-size': 'large',
            'marker-symbol': 'village',
        },
        geometry: {
            type: 'Point',
            coordinates: [-4.202646,56.490671]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Monsters University (2013)",
            description:'Parallel world but university was inspired by Harvard University and many other Ivy League Schools<br><img src="https://bit.ly/3o5SaFe" class="popupimage"/></br>',
            'marker-color': '#990099',
            'marker-size': 'large',
            'marker-symbol': 'monument',
        },
        geometry: {
            type: 'Point',
            coordinates: [-71.116660,42.377003]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Inside Out (2015)",
            description:'San Francisco, California<br><img src="https://bit.ly/3lZmEXB" class="popupimage"/></br>',
            'marker-color': '#FF33CC',
            'marker-size': 'large',
            'marker-symbol': 'city',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.419416,37.774929]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Inside Out (2015)",
            description:'Minnesota<br><img src="https://bit.ly/3lZmEXB" class="popupimage"/></br>',
            'marker-color': '#FF33CC',
            'marker-size': 'large',
            'marker-symbol': 'building',
        },
        geometry: {
            type: 'Point',
            coordinates: [-94.685900,46.729553]
        }
     }

    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
