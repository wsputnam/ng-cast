angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    video: '<',
    searchResults: '<',
    click: '<'
  },
  controller: function(youTube) {
    this.youTubeSearchText = '';
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    console.log('old videos', this.videos);

    this.selectVideo = (obj, index) => {
      this.videos = obj;
      this.currentVideo = this.videos[0];
      console.log('new videos:' + this.videos);
      console.log('object', obj);
      console.log('new currentVideo:' + this.currentVideo);
    };

    this.changeVideo = (searchText) => {
      youTube.searchResults(searchText, this.selectVideo); 
      // console.dir('videos :' + this.videos[1].snippet.title);
      // console.dir('currentVideo: ' + this.currentVideo.snippet.title);
    }; 

    this.switchVideo = (item) => {
      this.currentVideo = item;
      console.log('clicked', this.currentVideo);
    };

  },
  templateUrl: 'src/templates/app.html'
});

// will use the $watch function here to keep track of changes in specific variables