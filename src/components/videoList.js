angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    click: '<',
    getYoutube: '<',
    selectVideo: '<',
    index: '<',
    switchVideo: '<'
  },

  controller: function() {
        
  },
  templateUrl: 'src/templates/videoList.html'
});