angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },    
  };
});


// Testing both cat element and js video element
// expect(catElement.find('iframe').first().attr('src')).to.contain(`https://www.youtube.com/embed/${fakeVideoData[0].id.videoId}`);
// expect(jsElement.find('iframe').first().attr('src')).to.contain(`https://www.youtube.com/embed/${moreFakeVideoData[0].id.videoId}`);