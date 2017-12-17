angular.module('video-player')

.component('app', {
 
  controller: function(youTube) {
    this.youTubeSearchText = '';
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (obj) => {
      this.videos = obj;
      this.currentVideo = this.videos[0];
    };

    this.changeVideo = (searchText) => {
      youTube.searchResults(searchText, this.selectVideo); 
    }; 

    this.switchVideo = (item) => {
      this.currentVideo = item;
    };

  },
  templateUrl: 'src/templates/app.html'
});

