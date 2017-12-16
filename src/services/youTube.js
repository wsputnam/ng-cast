angular.module('video-player')
.service('youTube', function() {
  // Simple GET request example:
  $http({
    method: 'GET',
    url: '/someUrl',
    q: 'query',
    dataType: 'json',
    maxResults: 5,
    key: 'youtube key',
    videoEmbeddable: true
  }).then(function successCallback(response, callback) {
    console.log('success');
    callback(response.items);
  }, function errorCallback(response) {
    console.log('ERROR!!!');
  });

});
