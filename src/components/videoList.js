angular.module('video-player')
.component('videoList', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.onClick = function() {
      console.log('works');
    };
    
  },
  templateUrl: 'src/templates/videoList.html'
});