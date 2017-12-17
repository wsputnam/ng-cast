angular.module('video-player')

.component('search', {
  bindings: {
    searchText: '<',
    searchResults: '<',
    changeVideo: '<'
  },
  controller: function() {

  },
  templateUrl: 'src/templates/search.html'
});
