angular.module('starter.controllers', [])

.controller("lista", function ($scope, $http, $ionicPopup, $location) {
    $scope.url = $location.path();
    $scope.url2 = $scope.url.replace("/app/lista", "");

    $scope.start = function () {
        $http.get("daneJSON"+$scope.url2+".JSON").
                then(odpowiedzSerwer, onError);
    }

    var odpowiedzSerwer = function (response) {
        $scope.user = response.data;
    }

    var onError = function (reason) {
        $scope.error = $ionicPopup.alert({
            title: 'Nie można załadować danych!',
            template: 'Spróbuj ponownie uruchomić aplikację.'
        })
    }

    $scope.showPopup = function (user) {
        $scope.myPopup = $ionicPopup.show({
            template:
     '<div class="list">'
    +   '<a class="item item-icon-left">'
    +       '<i class="icon ion-ios-home"></i>'
    +       user.jednostka
    +   '</a>'
    +   '<a class="item item-icon-left">'
    +       '<i class="icon ion-person"></i>'
    +       user.rola
    +   '</a>'
    +   '<a class="item item-icon-left" href="mailto:'+user.email+'">'
    +       '<i class="icon ion-email"></i>'
    +       user.email
    +   '</a>'
    +   '<a class="item item-icon-left item-icon-right" href="tel:'+user.mobile+'">'
    +       '<i class="icon ion-chatbubble-working"></i>'
    +       user.mobile
    +       '<i class="icon ion-ios-telephone-outline"></i>'
    +   '</a>'
    + '</div>',
            scope: $scope,
            buttons: [
                { text: 'Powrót' }
            ]
        })
    }

    $scope.stworzyl = function () {
        $scope.myPopup = $ionicPopup.show({
            template:
      '<div class="list">'
    +   '<a class="item item-icon-left">'
    +       '<i class="icon ion-social-angular"></i>'
    +       'Łukasz Burczyk'
    +   '</a>'
    +   '<a class="item item-icon-left">'
    +       '<i class="icon ion-ios-home"></i>'
    +       'Orange/IT'
    +   '</a>'
    +   '<a class="item item-icon-left">'
    +       '<i class="icon ion-person"></i>'
    +       'Programista Aplikacji Mobilnych'
    +   '</a>'
    +   '<a class="item item-icon-left" href="mailto:lukasz.burczyk@outlook.com">'
    +       '<i class="icon ion-email"></i>'
    +       'lukasz.burczyk@outlook.com'
    +   '</a>'
    +   '<a class="item item-icon-left item-icon-right" href="tel:+48 791360579">'
    +       '<i class="icon ion-chatbubble-working"></i>'
    +       '+48 791360579'
    +       '<i class="icon ion-ios-telephone-outline"></i>'
    +   '</a>'
    + '</div>',
            scope: $scope,
            buttons: [
                { text: 'Powrót' }
            ]
        })
    }

    $scope.zamknijPopup = function () {
        $scope.myPopup.close();
    }

    $scope.isEmpty = function (obj) {
        for (var i in obj) if (obj.hasOwnProperty(i)) return true;
        return false;
    }
});