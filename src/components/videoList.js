angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller: function() {
    this.onClick = function() {
      console.log('works');
    };
    
  },
  templateUrl: 'src/templates/videoList.html'
});