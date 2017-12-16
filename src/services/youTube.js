angular.module('video-player')
  .service('youTube', function() {
    // this.searchResults = (searchText, callback) => {
    //   $http({
    //     method: 'GET',
    //     url: 'https://www.googleapis.com/youtube/v3/search',
    //     params: {
    //       key: window.YOUTUBE_API_KEY,
    //       type: 'video',
    //       maxResults: 5,
    //       part: 'id,snippet',
    //       q: searchText,
    //       videoEmbeddable: true
    //     }
    //   }).then(function (response) {
    //     console.dir(response.data.items);
    //     console.log('clicked');
    //     callback()
    //     console.log('text', searchText);
    //     $rootScope.getYoutube(response.data.items);
    //     // this.searchResults(response.data.items);

    //   });
    // };
  });
