(function() {
  'use strict';

angular
  .module('starter.controllers', [])
  .controller('DashCtrl', function($scope) {})
  .controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();

})
  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ContactsCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
})

  .controller('ContactDetailCtrl', function($scope, $stateParams, Contacts) {
    $scope.contact = Contacts.get($stateParams.contactId);
  })

;

})();
