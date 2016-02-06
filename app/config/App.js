angular.module('fast_eats')
.run(function() {

})
.config(function(angularBingMapsProvider) {
  angularBingMapsProvider.setDefaultMapOptions({
      credentials: 'AsdaxrvLRHyT6eEvSGDY81S2y3_ifh10egwFAMzIOLtxv0ZlwkPE2yG7jMzXzVkp',
      enableClickableLogo: false
  });
});
