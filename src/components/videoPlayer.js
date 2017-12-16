angular.module('video-player')

.component('videoPlayer', {
  // TODO
  controller: function() {
    this.data = window.exampleVideoData,
    this.playerUrl = 'https://www.youtube.com/embed/' + window.exampleVideoData[0].id.videoId;
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
