angular.module('video-player')

.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
  };
});


