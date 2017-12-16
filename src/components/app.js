angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    video: '<'
  },
  controller: function() {

    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = () => {
      console.log('clicked');
      console.log('first', this.currentVideo);
      this.currentVideo = this.videos[1];
      console.log('this', this.currentVideo);
    };

    this.searchResults = function() {
    
    };


  },
  templateUrl: 'src/templates/app.html'
});

// will use the $watch function here to keep track of changes in specific variables