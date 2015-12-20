(function () {
  'use strict';

  angular
    .module('starter.services', [])
    .factory('Chats', chartService);

  function chartService() {

    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }];

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
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})();
