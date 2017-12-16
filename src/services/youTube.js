angular.module('video-player')
.service('youTube', function(searchText, callback) {
  // Simple GET request example:
    //params.q = query
    //params.dataType: 'json'
    //params.maxResults: 5
  $http({
    method: 'GET',
    url: '/someUrl',
    q: 'query',
    dataType: 'json',
    maxResults: 5,
    key: window.YOUTUBE_API_KEY,
    videoEmbeddable: true
  }).then(function successCallback(response, callback) {
    console.log('success');
    callback(response.items);
  }, function errorCallback(response) {
    console.log('ERROR!!!');
  });

});
