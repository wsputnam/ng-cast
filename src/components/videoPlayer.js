angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '<'
  },
  controller: function() {
    this.video = window.exampleVideoData[0];
    this.videoTitle = window.exampleVideoData[0].snippet.title;
    this.videoDescription = window.exampleVideoData[0].snippet.description;
    this.videoUrl = 'https://www.youtube.com/embed/' + window.exampleVideoData[0].id.videoId; 
    this.videoThumbnail = window.exampleVideoData[0].snippet.thumbnails.default.url;
    // this.currentVideo = windows.exampleVideoData[0];
  },
  // controller: function() {
  //   this.video = app.video;
  //   this.videoUrl = 'https://www.youtube.com/embed' + app.video.id.videoId;

  templateUrl: 'src/templates/videoPlayer.html'
});
