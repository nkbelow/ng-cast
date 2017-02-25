angular.module('video-player')

.controller('videoController', ['$scope', '$window', function($scope, $window) {
  $scope.videos = $window.exampleVideoData;
  $scope.video = $window.exampleVideoData[0];
  $scope.noVideo = {
    snippet: {
      title: 'Please wait',
      description: null,
    }
  };

  $scope.setVideo = function() {
    if ($scope.video === undefined) {
      return false;
    } else {
      return true;
    }
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


