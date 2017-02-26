angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      searchResults: '<'
    },
    templateUrl: 'src/templates/search.html',
    controller: function($scope) {
      console.log($scope);
    },
    controllerAs: 'ctrl',
    bindToController: true
  };
});
