angular.module('video-player')

.controller('videoController', ['$scope', '$window', function($scope, $window) {
  $scope.videos = $window.exampleVideoData;
  $scope.video = $window.exampleVideoData[0];
  $scope.onClick = function(video) {
    $scope.video = video;
  
  };

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


