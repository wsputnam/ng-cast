angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    // videos: '=',
    item: '<'
  },
  controller: function() {
    // this.changePlayer = function() {
    //   console.log('works');
    // };
  },

  templateUrl: 'src/templates/videoListEntry.html'
});

// this.videoUrl = 'https://www.youtube.com/embed/' + window.exampleVideoData[0].id.videoId;
// this.videoTitle = window.exampleVideoData[0].snippet.title;
// this.videoDescription = window.exampleVideoData[0].snippet.description;
