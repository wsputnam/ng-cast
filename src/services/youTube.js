angular.module('video-player')

  .service('youTube', function($http) {

    this.searchResults = (query, callback) => {

      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          type: 'video',
          maxResults: 5,
          part: 'id,snippet',
          q: query,
          videoEmbeddable: true
        }
      }).then(function (response) {
        callback(response.data.items);

      });
    };
  });
