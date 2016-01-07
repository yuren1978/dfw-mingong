(function() {
  'use strict';

  angular
    .module('starter')
    .factory('firebaseDataService', firebaseDataService);

  firebaseDataService.$inject = ['FIREBASE_URL'];

  function firebaseDataService(FIREBASE_URL  ) {
    var root = new Firebase(FIREBASE_URL);

    var service = {
      root: root,
      chats: root.child('chats'),
      contacts: root.child('contacts'),
      textMessages: root.child('chats')
    };

    return service;
  }

})();
