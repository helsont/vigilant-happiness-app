(function() {
  angular
    .module('fast_eats')
    .service('ApiService', ApiService);

  function ApiService($http) {

    var service = {
      get: get,
      image: image,
      getFirstImage: getFirstImage
    };

    function getImages(venueId) {
      return _get('https://api.foursquare.com/v2/venues/' +
        venueId +
        '/photos?oauth_token=10SAXCRJYVWK10VBOZ53CBJHTDOC2P00MXVAGGGU0NRCUUVL&v=20160206');
    }

    function getFirstImage(venue) {
      var venueId = venue.id;
      return getImages(venueId).then(function(response) {
        var list = response.data.response.photos.items;
        var first = list[0];
        var url = first.prefix + '300x300' + first.suffix;
        return {
          venue: venue,
          imageUrl: url
        }
      });
    }

    function _get(url) {
      return new Promise(function(resolve, reject) {
        $http({
          url: url,
          method: 'GET'
        }).then(function(data) {
          resolve(data);
        }, function(err, status) {
          reject(err, status);
        });
      });
    }
    function image(venueId) {
      return new Promise(function(resolve, reject) {
        $http({
          url:'https://vigilant-happiness.herokuapp.com/',
          method: 'GET',
          params: {
            start: start,
            end: end
          }
        })
        .then(function(data) {
          resolve(data);
        }, function(err, status) {
          reject(err, status);
        });
      });
    }

    function get(start, end) {
      return new Promise(function(resolve, reject) {
        $http({
          url:'https://vigilant-happiness.herokuapp.com/',
          method: 'GET',
          params: {
            start: start,
            end: end
          }
        })
        .then(function(data) {
          resolve(data);
        }, function(err, status) {
          reject(err, status);
        });
      });
    };

    return service;
  }
})();
