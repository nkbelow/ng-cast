angular.module('video-player')

.controller('videoController', ['$scope', '$window', 'youTube', function($scope, $window, youTube) {
  $scope.videos = $window.exampleVideoData;
  $scope.video = $window.exampleVideoData[0];
  $scope.onClick = function(video) {
    $scope.video = video;
  };
  

  // $scope.searchResults = this.youTube.getYouTube(query, function (query) {
  //   $scope.videos = query;
  //   $scope.video = query[0];
  // }).bind(this);

  // $scope.inputValue = null;

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


