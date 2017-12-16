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
    this.currentVideo = {};
    this.videos = exampleVideoData;

  },
  templateUrl: 'src/templates/app.html'
});

// will use the $watch function here to keep track of changes in specific variables