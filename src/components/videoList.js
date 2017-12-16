angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    clickAgain: '<',
    getYoutube: '<'
  },

  controller: function() {
        
  },
  templateUrl: 'src/templates/videoList.html'
});