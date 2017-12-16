angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    videos: '<',
    changeVideo: '<',
    currentVideo: '<',
    selectVideo: '<',
   
  },
  controller: function() {
   
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
});
