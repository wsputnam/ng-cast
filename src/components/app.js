angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    video: '<',
    searchResults: '<'
  },
  controller: function($scope, $http) {
    this.youTubeSearchText = '';
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
  
  

    this.getYoutube = (searchText) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          type: 'video',
          maxResults: 5,
          part: 'id,snippet',
          q: searchText,
          videoEmbeddable: true
        }
      }).then(function (response) {
        console.dir(response.data.items);
        console.log('clicked');
        console.log('text', searchText);
        this.videos = response.data.items;
        console.log(this.videos);
        this.currentVideo = this.videos[0];
        console.log(this.currentVideo);


        // youTube.searchResults();
        // this.searchResults(response.data.items);
        // console.log($scope.videos);
      });
    };

    // this.getYoutube = (data) => {
    //   this.videos = data;
    //   this.currentVideo = data[0];
    // };
 
 

    // $scope.searchResults = () => {
    //   // call our youtube search function with searchtext data from query
    //   // receive response items
    //   // set videos equal to search results and pass data down to children
    //   // console.log('text', searchText);
    //   this.videos = app.get();
    //   this.currentVideo = this.videos[0];
    // };


  },
  templateUrl: 'src/templates/app.html'
});

// will use the $watch function here to keep track of changes in specific variables