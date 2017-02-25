angular.module('video-player')

.directive('videoList', function() {
  return {
    scope: {
      ourVideos: '<'
    },
    templateUrl: 'src/templates/videoList.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
  };
});
