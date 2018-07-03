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
            description:'Small Ohio town<br><img src="https://lh3.googleusercontent.com/-Z8O0m_Pfxds/Uy1erzcmnzI/AAAAAAAApzw/wzQOhF0owew/w1280-h1024/TOY-STORY_3.jpg" class="popupimage" /></br> ',
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
            description: 'Texas/Mexico Border<br><img src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409" class="popupimage" /></br> ',
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
            title: "Finding Nemo (2003)",
            description: 'Great Barrier Reef<br><img src="https://vignette.wikia.nocookie.net/disney/images/8/86/Finding-nemo-poster.jpg/revision/latest?cb=20160421022556" class="popupimage" /> </br>',
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
            description: 'Midwest,Chicago<br><img src="https://upload.wikimedia.org/wikipedia/en/8/88/IncredibleFamily.jpg" class="popupimage" /> </br>',
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
            description:'Route 66, Arizona<br><img src="http://images2.fanpop.com/images/photos/8300000/Cars-disney-pixar-cars-8366302-458-422.jpg" class="popupimage"/></br> ',
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
            title: "Ratatouille",
            description:'Paris, France<br><img src="http://i.ytimg.com/vi/4bq2gHKMRx0/maxresdefault.jpg" class="popupimage"/></br>',
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
            title: "Up (2009)",
            description:'Angel Falls,Venezuela<br><img src="http://3.bp.blogspot.com/_vApvcGhPPsQ/SwSg5FAUogI/AAAAAAAAARk/H8sdsglUZVw/s1600/UP27.jpg" class="popupimage"/></br>',
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
            description:'Tokyo, Japan<br><img src="http://static01.nyt.com/images/2011/06/19/arts/CARS2-6/CARS2-6-popup.jpg" class="popupimage"/></br>',
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
            description:'Porto Corsa,Italy<br><img src="https://wahyuyuwono.files.wordpress.com/2014/05/2011_cars_2-wide.jpg" class="popupimage"/></br>',
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
            description:'England<br><img src="http://images.spoilertv.com/cache/movies/cars-2/posters/cars2_1sheet_l200triptychtxt_l_FULL.jpg" class="popupimage"/></br>',
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
            description:'Scotland<br><img src="https://goo.gl/SJHk6d" class="popupimage"/></br>',
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
            description:'Parallel world but university was inspired by Harvard University and many other Ivy League Schools<br><img src="https://harveysaura.files.wordpress.com/2013/05/final1.jpg?w=778" class="popupimage"/></br>',
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
            description:'San Francisco, California<br><img src="http://is5.mzstatic.com/image/thumb/Video7/v4/85/20/1d/85201dc0-4b0e-e20a-1255-4aabdb773cad/source/1200x630bb.jpg" class="popupimage"/></br>',
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
            description:'Minnesota<br><img src="http://p9.storage.canalblog.com/95/89/1278281/104988754_o.jpg" class="popupimage"/></br>',
            'marker-color': '#FF33CC',
            'marker-size': 'large',
            'marker-symbol': 'building',
        },
        geometry: {
            type: 'Point',
            coordinates: [-94.685900,46.729553]
        }
     },
     
     {
        type: 'Feature',
        properties: {
            title: "Monsters, Inc (2001)",
            description:'Alternate Universe<br><img src="http://media.melty.fr/article-919536-ajust_930/ils-sont-de-retour.jpg" class="popupimage"/></br>',
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
            title: "WALL-E (2008)",
            description:'Future Earth/Space<br><img src="http://images.alphacoders.com/112/112463.jpg" class="popupimage"/></br>',
            'marker-color': '#6E2525',
            'marker-size': 'large',
            'marker-symbol': 'rocket',
        },
        geometry: {
            type: 'Point',
            coordinates: [-119.417932,36.778261]
        }
     },

    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
