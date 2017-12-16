angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    videos: '<',
    changeVideo: '<',
    currentVideo: '<',
    selectVideo: '<'
  },
  controller: function() {
    this.changeVideo = function() {
      $ctrl.currentVideo = $ctrl.videos[1];
    };
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
});
