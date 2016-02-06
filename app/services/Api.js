(function() {
  angular
    .module('fast_eats')
    .service('ApiService', ApiService);

  function ApiService($http) {

    var venues = [
     {
         "id": "430d0a00f964a5203e271fe3",
         "name": "Brooklyn Bridge Park",
         "contact": {
             "phone": "2128033822",
             "formattedPhone": "(212) 803-3822",
             "twitter": "nycparks",
             "facebook": "104475634308",
             "facebookUsername": "BartowPell",
             "facebookName": "Bartow-Pell Mansion Museum"
         },
         "location": {
             "address": "Main St",
             "crossStreet": "Plymouth St",
             "lat": 40.70227697066692,
             "lng": -73.9965033531189,
             "distance": 389,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Main St (Plymouth St)",
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d163941735",
                 "name": "Park",
                 "pluralName": "Parks",
                 "shortName": "Park",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": true,
         "stats": {
             "checkinsCount": 39415,
             "usersCount": 24020,
             "tipCount": 278
         },
         "url": "http://nyc.gov/parks",
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": [
             {
                 "id": "556df7e1a7c82e6b724d822e"
             }
         ]
     },
     {
         "id": "42377700f964a52024201fe3",
         "name": "Brooklyn Heights Promenade",
         "contact": {},
         "location": {
             "address": "Columbia Heights",
             "crossStreet": "btwn Remsen & Orange",
             "lat": 40.69829137715981,
             "lng": -73.99663209915161,
             "distance": 342,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Columbia Heights (btwn Remsen & Orange)",
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d163941735",
                 "name": "Park",
                 "pluralName": "Parks",
                 "shortName": "Park",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 21209,
             "usersCount": 10397,
             "tipCount": 180
         },
         "url": "http://nyharborparks.org/visit/brhe.html",
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4c3c76bd7f49c9b65de16be3",
         "name": "Michael’s Food Cart",
         "contact": {
             "phone": "7189029951",
             "formattedPhone": "(718) 902-9951"
         },
         "location": {
             "address": "South Street",
             "crossStreet": "Corner of South St and Wall St",
             "lat": 40.70013381479425,
             "lng": -73.99983798076666,
             "distance": 20,
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "South Street (Corner of South St and Wall St)",
                 "New York, NY",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d1cb941735",
                 "name": "Food Truck",
                 "pluralName": "Food Trucks",
                 "shortName": "Food Truck",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/food/streetfood_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 51,
             "usersCount": 40,
             "tipCount": 0
         },
         "allowMenuUrlEdit": true,
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "51eabef6498e10cf3aea7942",
         "name": "Brooklyn Bridge Park - Pier 2",
         "contact": {},
         "location": {
             "address": "Furman St",
             "crossStreet": "Brooklyn Bridge Park Greenway",
             "lat": 40.699511638395514,
             "lng": -73.99813359642076,
             "distance": 166,
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Furman St (Brooklyn Bridge Park Greenway)",
                 "Brooklyn, NY",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d163941735",
                 "name": "Park",
                 "pluralName": "Parks",
                 "shortName": "Park",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 2418,
             "usersCount": 1803,
             "tipCount": 18
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4ebac60a0cd6904066e4108f",
         "name": "Brookyn Bridge Park Greenway",
         "contact": {},
         "location": {
             "address": "Fulton Ferry Landing to Atlantic Ave.",
             "lat": 40.70025980212479,
             "lng": -73.99698615074158,
             "distance": 255,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Fulton Ferry Landing to Atlantic Ave.",
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d163941735",
                 "name": "Park",
                 "pluralName": "Parks",
                 "shortName": "Park",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 660,
             "usersCount": 428,
             "tipCount": 1
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "53ff2935498e161412b3e871",
         "name": "Brooklyn Bridge Park - Pier 2 Yoga Court",
         "contact": {},
         "location": {
             "lat": 40.699657951708524,
             "lng": -73.99976911704667,
             "distance": 42,
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Brooklyn, NY",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d102941735",
                 "name": "Yoga Studio",
                 "pluralName": "Yoga Studios",
                 "shortName": "Yoga Studio",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/gym_yogastudio_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 8,
             "usersCount": 5,
             "tipCount": 0
         },
         "allowMenuUrlEdit": true,
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4a43bcb7f964a520bba61fe3",
         "name": "Brooklyn Bridge",
         "contact": {
             "twitter": "nyc_dot",
             "facebook": "166279802886",
             "facebookUsername": "NYCDOT",
             "facebookName": "NYC DOT"
         },
         "location": {
             "address": "Brooklyn Bridge",
             "lat": 40.705953265881305,
             "lng": -73.99656772613525,
             "distance": 723,
             "postalCode": "10038",
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Brooklyn Bridge",
                 "New York, NY 10038",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d1df941735",
                 "name": "Bridge",
                 "pluralName": "Bridges",
                 "shortName": "Bridge",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/bridge_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": true,
         "stats": {
             "checkinsCount": 149321,
             "usersCount": 85509,
             "tipCount": 715
         },
         "url": "http://www.nyc.gov/dot",
         "specials": {
             "count": 0,
             "items": []
         },
         "storeId": "",
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": [
             {
                 "id": "556a2f99a7c8957d73d43f24"
             }
         ]
     },
     {
         "id": "4f2c1bbae4b0ccfb1d99b510",
         "name": "kk hair salon",
         "contact": {},
         "location": {
             "lat": 40.69956588745117,
             "lng": -74.00108337402344,
             "distance": 103,
             "cc": "US",
             "state": "New York",
             "country": "United States",
             "formattedAddress": [
                 "New York",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d110951735",
                 "name": "Salon / Barbershop",
                 "pluralName": "Salons / Barbershops",
                 "shortName": "Salon / Barbershop",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "allowMenuUrlEdit": true,
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4dddd2f0d22d28453eb33cc3",
         "name": "Taxi 9M12",
         "contact": {},
         "location": {
             "lat": 40.699055,
             "lng": -73.999791,
             "distance": 106,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d130951735",
                 "name": "Taxi",
                 "pluralName": "Taxis",
                 "shortName": "Taxi",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/taxi_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 3,
             "usersCount": 3,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "53af4e97498e0bd7ae45c926",
         "name": "Brooklyn Bridge Park Skating Rink",
         "contact": {},
         "location": {
             "address": "Pier 2",
             "lat": 40.69974994036211,
             "lng": -73.998409053504,
             "distance": 137,
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Pier 2",
                 "Brooklyn, NY",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "52e81612bcbc57f1066b79e9",
                 "name": "Roller Rink",
                 "pluralName": "Roller Rinks",
                 "shortName": "Roller Rink",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/default_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 160,
             "usersCount": 150,
             "tipCount": 1
         },
         "url": "http://www.brooklynbridgepark.org/activities/roller-skating",
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4d9788e5daec224b4642333e",
         "name": "Dr Shur",
         "contact": {},
         "location": {
             "address": "140 Elgar Pl",
             "lat": 40.698978,
             "lng": -74.00043,
             "distance": 119,
             "postalCode": "10475",
             "cc": "US",
             "city": "Bronx",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "140 Elgar Pl",
                 "Bronx, NY 10475",
                 "United States"
             ]
         },
         "categories": [],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4dac4c974df01c19b1b0fc82",
         "name": "Internal Medicine Associates",
         "contact": {},
         "location": {
             "address": "530 1st Ave",
             "crossStreet": "30th street",
             "lat": 40.698978,
             "lng": -74.00043,
             "distance": 119,
             "postalCode": "10016",
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "530 1st Ave (30th street)",
                 "New York, NY 10016",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d177941735",
                 "name": "Doctor's Office",
                 "pluralName": "Doctor's Offices",
                 "shortName": "Doctor's Office",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/building/medical_doctorsoffice_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 2,
             "usersCount": 2,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "5054eb43e4b04ed4f0dd1b30",
         "name": "La cabana",
         "contact": {},
         "location": {
             "lat": 40.69875,
             "lng": -73.99953,
             "distance": 144,
             "cc": "US",
             "state": "New York",
             "country": "United States",
             "formattedAddress": [
                 "New York",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d154941735",
                 "name": "Cuban Restaurant",
                 "pluralName": "Cuban Restaurants",
                 "shortName": "Cuban",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cuban_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 5,
             "usersCount": 5,
             "tipCount": 1
         },
         "allowMenuUrlEdit": true,
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4d2cb2c677a2a1cd02c387b7",
         "name": "QBE",
         "contact": {},
         "location": {
             "address": "80 Pine St",
             "crossStreet": "Water St",
             "lat": 40.698978,
             "lng": -74.00043,
             "distance": 119,
             "postalCode": "10005",
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "80 Pine St (Water St)",
                 "New York, NY 10005",
                 "United States"
             ]
         },
         "categories": [],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4cb92bdc7148f04d9336d5ab",
         "name": "Livys apartment !",
         "contact": {},
         "location": {
             "address": "95 Wall St",
             "crossStreet": "Water st",
             "lat": 40.700249,
             "lng": -74.001442,
             "distance": 124,
             "postalCode": "10005",
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "95 Wall St (Water st)",
                 "New York, NY 10005",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d1a3941735",
                 "name": "College Residence Hall",
                 "pluralName": "College Residence Halls",
                 "shortName": "Residence Hall",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/education/residencehall_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4fd4c996e4b0b569195f4ebc",
         "name": "Pocket Park",
         "contact": {},
         "location": {
             "lat": 40.70337677001953,
             "lng": -74.00190734863281,
             "distance": 408,
             "cc": "US",
             "state": "New York",
             "country": "United States",
             "formattedAddress": [
                 "New York",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d163941735",
                 "name": "Park",
                 "pluralName": "Parks",
                 "shortName": "Park",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4fc62feee4b0bf27803674ed",
         "name": "VonChurch",
         "contact": {
             "twitter": "vonchurch"
         },
         "location": {
             "address": "198 Columbia Hts Apt 4",
             "crossStreet": "btwn Pierrepont & Clark Street",
             "lat": 40.69719853060808,
             "lng": -73.99673335012453,
             "distance": 416,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "198 Columbia Hts Apt 4 (btwn Pierrepont & Clark Street)",
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d125941735",
                 "name": "Tech Startup",
                 "pluralName": "Tech Startups",
                 "shortName": "Tech Startup",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 27,
             "usersCount": 4,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4ec2a71749014076e7fd61ec",
         "name": "32b",
         "contact": {},
         "location": {
             "address": "63 Water St, New York, NY 10041",
             "lat": 40.7042505,
             "lng": -74.0003203,
             "distance": 473,
             "postalCode": "10041",
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "63 Water St, New York, NY 10041",
                 "New York, NY 10041",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d130941735",
                 "name": "Building",
                 "pluralName": "Buildings",
                 "shortName": "Building",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4ecf2c3b29c223f92766fc79",
         "name": "Cab 7H91",
         "contact": {},
         "location": {
             "lat": 40.7020263671875,
             "lng": -73.9993667602539,
             "distance": 231,
             "cc": "US",
             "state": "New York",
             "country": "United States",
             "formattedAddress": [
                 "New York",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d130951735",
                 "name": "Taxi",
                 "pluralName": "Taxis",
                 "shortName": "Taxi",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/taxi_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4eb496fadab4fe51114c551a",
         "name": "Eastland Car Service",
         "contact": {},
         "location": {
             "lat": 40.6955333,
             "lng": -73.9980333,
             "distance": 524,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d130951735",
                 "name": "Taxi",
                 "pluralName": "Taxis",
                 "shortName": "Taxi",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/taxi_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 4,
             "usersCount": 4,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "50397c85e4b0b7a03bc9f5d5",
         "name": "swallow",
         "contact": {},
         "location": {
             "lat": 40.7007111,
             "lng": -74.0019946,
             "distance": 186,
             "cc": "US",
             "state": "New York",
             "country": "United States",
             "formattedAddress": [
                 "New York",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d1db931735",
                 "name": "Tapas Restaurant",
                 "pluralName": "Tapas Restaurants",
                 "shortName": "Tapas",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/food/tapas_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 4,
             "usersCount": 3,
             "tipCount": 0
         },
         "allowMenuUrlEdit": true,
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4cfc2f09c671721e1e74c718",
         "name": "Deep Net",
         "contact": {},
         "location": {
             "lat": 40.697052,
             "lng": -73.997217,
             "distance": 403,
             "cc": "US",
             "state": "New York",
             "country": "United States",
             "formattedAddress": [
                 "New York",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d124941735",
                 "name": "Office",
                 "pluralName": "Offices",
                 "shortName": "Office",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 8,
             "usersCount": 2,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "501d4a16e4b00e1d08cc25ab",
         "name": "Free Kayaking In Brooklyn Meetup",
         "contact": {},
         "location": {
             "address": "Pier 1 @ Brooklyn Bridge Park",
             "lat": 40.700836696191175,
             "lng": -73.99682516986726,
             "distance": 283,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Pier 1 @ Brooklyn Bridge Park",
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4eb1d4dd4b900d56c88a45fd",
                 "name": "River",
                 "pluralName": "Rivers",
                 "shortName": "River",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/river_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 8,
             "usersCount": 8,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4e7f84356da1185e298b1aed",
         "name": "Trailer Park",
         "contact": {},
         "location": {
             "address": "61 Pearl St",
             "crossStreet": "Front St",
             "lat": 40.701013482649444,
             "lng": -73.99598731308397,
             "distance": 356,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "61 Pearl St (Front St)",
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4d4b7105d754a06377d81259",
                 "name": "Outdoors & Recreation",
                 "pluralName": "Outdoors & Recreation",
                 "shortName": "Outdoors & Recreation",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 4,
             "usersCount": 4,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4edf95ab8231abf7c269aa8e",
         "name": "Trans-Fast Remittance LLC",
         "contact": {
             "phone": "2123822828",
             "formattedPhone": "(212) 382-2828"
         },
         "location": {
             "address": "110 Wall St, New York, NY 10005",
             "lat": 40.70206149009705,
             "lng": -74.0014842018679,
             "distance": 261,
             "postalCode": "10005",
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "110 Wall St, New York, NY 10005",
                 "New York, NY 10005",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d10a951735",
                 "name": "Bank",
                 "pluralName": "Banks",
                 "shortName": "Bank",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/financial_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 7,
             "usersCount": 5,
             "tipCount": 0
         },
         "allowMenuUrlEdit": true,
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "50131cf2e4b06a7cda4c600b",
         "name": "Metropolitan Opera Summer Recital Series",
         "contact": {
             "twitter": "metopera"
         },
         "location": {
             "address": "Brooklyn Bridge Park",
             "lat": 40.69795191386013,
             "lng": -73.9974047809779,
             "distance": 316,
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Brooklyn Bridge Park",
                 "Brooklyn, NY",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d1f1931735",
                 "name": "General Entertainment",
                 "pluralName": "General Entertainment",
                 "shortName": "Entertainment",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/default_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 13,
             "usersCount": 12,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4f981fdde4b09751c0a4bbd8",
         "name": "144 Willow St",
         "contact": {},
         "location": {
             "address": "144 Willow St",
             "lat": 40.696505635376084,
             "lng": -73.99634885447396,
             "distance": 496,
             "postalCode": "11201",
             "cc": "US",
             "city": "Brooklyn",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "144 Willow St",
                 "Brooklyn, NY 11201",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d1a3941735",
                 "name": "College Residence Hall",
                 "pluralName": "College Residence Halls",
                 "shortName": "Residence Hall",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/education/residencehall_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 37,
             "usersCount": 5,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4fd91ce8e4b0a8dbd1eddc69",
         "name": "SS Gawker",
         "contact": {},
         "location": {
             "lat": 40.69900610889219,
             "lng": -74.00171450760502,
             "distance": 182,
             "cc": "US",
             "state": "New York",
             "country": "United States",
             "formattedAddress": [
                 "New York",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d12d951735",
                 "name": "Boat or Ferry",
                 "pluralName": "Boats or Ferries",
                 "shortName": "Boat / Ferry",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/boat_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 15,
             "usersCount": 8,
             "tipCount": 1
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "4d29ff9055a8b60c949fdbc0",
         "name": "Tok Stok",
         "contact": {},
         "location": {
             "address": "Barra da Tijuca",
             "lat": 40.7025558,
             "lng": -73.997896,
             "distance": 335,
             "cc": "US",
             "city": "Rio de Janeiro",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "Barra da Tijuca",
                 "Rio de Janeiro, NY",
                 "United States"
             ]
         },
         "categories": [],
         "verified": false,
         "stats": {
             "checkinsCount": 1,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     },
     {
         "id": "508450fee4b0354c5a99d4a8",
         "name": "L.K. Wong",
         "contact": {},
         "location": {
             "lat": 40.70185470581055,
             "lng": -73.99667358398438,
             "distance": 348,
             "postalCode": "10004",
             "cc": "US",
             "city": "New York",
             "state": "NY",
             "country": "United States",
             "formattedAddress": [
                 "New York, NY 10004",
                 "United States"
             ]
         },
         "categories": [
             {
                 "id": "4bf58dd8d48988d177941735",
                 "name": "Doctor's Office",
                 "pluralName": "Doctor's Offices",
                 "shortName": "Doctor's Office",
                 "icon": {
                     "prefix": "https://ss3.4sqi.net/img/categories_v2/building/medical_doctorsoffice_",
                     "suffix": ".png"
                 },
                 "primary": true
             }
         ],
         "verified": false,
         "stats": {
             "checkinsCount": 2,
             "usersCount": 1,
             "tipCount": 0
         },
         "specials": {
             "count": 0,
             "items": []
         },
         "hereNow": {
             "count": 0,
             "summary": "Nobody here",
             "groups": []
         },
         "referralId": "v-1454750461",
         "venueChains": []
     }
  ];
    var service = {
      get: get
    };

    function get() {
      return new Promise(function(resolve, reject) {
        resolve(venues);
      });
      //
      // return new Promise((resolve, reject) => {
      //   $http.get('apiPath').success((data) => {
      //     resolve(data);
      //   }).error((err, status) => {
      //     reject(err, status);
      //   });
      // });
    };

    return service;
  }
})();
