// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
    })
    .state('app.lista1', {
        url: '/lista1',
        views: {
            'lista1': {
                templateUrl: 'templates/lista1.html',
                controller: 'lista'
            }
        }
    })
    .state('app.lista2', {
        url: '/lista2',
        views: {
            'lista2': {
                templateUrl: 'templates/lista2.html',
                controller: 'lista'
            }
        }
    })
    .state('app.lista3', {
        url: '/lista3',
        views: {
            'lista3': {
                templateUrl: 'templates/lista3.html',
                controller: 'lista'
            }
        }
    });
    $urlRouterProvider.otherwise('/app/lista1');
})
