angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    video: '<'
  },
  controller: function() {

    this.selectVideo = function() {
      console.log('top');
    };
    this.searchResults = function() {

    };
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];

  },
  templateUrl: 'src/templates/app.html'
});

// will use the $watch function here to keep track of changes in specific variables