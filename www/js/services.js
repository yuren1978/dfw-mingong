(function () {
  'use strict';

  angular
    .module('starter.services', [])
    .factory('Chats', chartService);

  chartService.$inject=['$firebaseArray', 'firebaseDataService'];

  function chartService($firebaseArray) {

    var ref = new Firebase("https://blinding-inferno-2256.firebaseio.com/chats");
    var chats = $firebaseArray(ref);

    var service = {
      all: all,
      remove: remove,
      get: get
    }

    return service;

    function all() {
      return chats;
    }

    function remove(chat) {
      chats.splice(chats.indexOf(chat), 1);
    }

    function get(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].$id === chatId) {
          chats[i].content=chats[i].contents.join('\n');
          return chats[i];
        }
      }
      return null;
    }
  }
})();
