angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    searchText: '<',
    searchResults: '<',
    changeVideo: '<'
  },
  controller: function() {

  },
  templateUrl: 'src/templates/search.html'
});
