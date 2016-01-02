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
      users: root.child('chats'),
      emails: root.child('employees'),
      textMessages: root.child('employees')
    };

    return service;
  }

})();
