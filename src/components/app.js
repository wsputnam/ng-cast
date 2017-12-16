angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    video: '<',
    searchResults: '<'
  },
  controller: function($http, youTube) {
    this.youTubeSearchText = '';
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (obj) => {
      this.videos = obj;
      this.currentVideo = this.videos[0];
    };

    this.changeVideo = () => {
      youTube.searchResults('surfer', this.selectVideo); 
    }; 

  },
  templateUrl: 'src/templates/app.html'
});

// will use the $watch function here to keep track of changes in specific variables