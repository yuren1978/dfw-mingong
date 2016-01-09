(function () {
  'use strict';

  angular
    .module('starter.services')
    .factory('Contacts', contactService);

  contactService.$inject=['$firebaseArray', 'firebaseDataService'];

  function contactService($firebaseArray,firebaseDataService ) {

    //var ref = new Firebase("https://blinding-inferno-2256.firebaseio.com/contacts");
    var contacts = $firebaseArray(firebaseDataService.contacts);

    var service = {
      all: all,
      remove: remove,
      get: get
    }

    return service;

    function all() {
      return contacts;
    }

    function remove(contact) {
      contacts.splice(contacts.indexOf(contact), 1);
    }

    function get(contactId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].$id === contactId) {
          return contacts[i];
        }
      }
      return null;
    }
  }
})();
