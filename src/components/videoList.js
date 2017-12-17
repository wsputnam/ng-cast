angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    click: '<',
    index: '<'
  },

  templateUrl: 'src/templates/videoList.html'
});