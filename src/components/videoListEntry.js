angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    item: '<',
    click: '<', 
    searchText: '<',
    index: '<',
  },

  templateUrl: 'src/templates/videoListEntry.html'
});

