angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    video: '<'
  },
  controller: function() {
    this.video = window.exampleVideoData[0];
    this.videoUrl = 'https://www.youtube.com/embed/' + window.exampleVideoData[0].id.videoId;
  },
  templateUrl: 'src/templates/app.html'
});
