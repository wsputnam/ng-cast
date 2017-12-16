angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    videos: '<',
    changeVideo: '<',
    currentVideo: '<',
    selectVideo: '<',
    getYoutube: '<'
  },
  controller: function() {
    this.changeVideo = function() {
      $ctrl.currentVideo = $ctrl.videos[0];
    };
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
});
