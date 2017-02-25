angular.module('video-player')

.controller('videoController', ['$scope', '$window', function($scope, $window) {
  $scope.videos = $window.exampleVideoData;
}])

.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html ', 
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    }
  };
});


