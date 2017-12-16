angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    video: '<'
  },
  controller: function() {
    this.youTubeSearchText = '';
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };

    this.searchResults = (searchText) => {
      // call our youtube search function with searchtext data from query
      // receive response items
      // set videos equal to search results and pass data down to children
      console.log('clicked');
      console.log('text', searchText);
      this.videos = items;
      this.currentVideo = this.videos[0];
    };


  },
  templateUrl: 'src/templates/app.html'
});

// will use the $watch function here to keep track of changes in specific variables