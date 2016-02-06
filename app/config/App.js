angular.module('fast_eats')
.config(function(angularBingMapsProvider) {
  angularBingMapsProvider.setDefaultMapOptions({
      credentials: 'AsdaxrvLRHyT6eEvSGDY81S2y3_ifh10egwFAMzIOLtxv0ZlwkPE2yG7jMzXzVkp',
      enableClickableLogo: false
  });
});
