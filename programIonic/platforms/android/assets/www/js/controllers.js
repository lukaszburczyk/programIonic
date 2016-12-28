angular.module('starter.controllers', [])
.controller("wiadomosc", function ($scope) {
    $scope.witaj = "Witaj w aplikacji! Wybierz przycisk!";

})

.controller("lokalizacja", function ($scope, $location) {
    $scope.go = function (path) {
        $location.path(path);
    };
})

.controller("lista", function ($scope) {
    $scope.elementy = [
        { name: "jeden" },
        { name: "dwa" },
        { name: "trzy" },
        { name: "cztery" }
    ];
})
.controller("listaGit", function ($scope, $http, $rootScope) {

    $rootScope.x = 0;

    $scope.listaP = function () {
        if ($scope.x > 49) {
            $scope.x = $scope.x - 50;
            $scope.start();
        };
    }

    $scope.listaN = function () {
        $scope.x = $scope.x + 50;
        $scope.start();
    }

    $rootScope.odswierz = function () {
        $rootScope.repos = null;
    }

    $rootScope.start = function () {
        //var x = 0;
        $http.get("https://api.github.com/users?since=" + $scope.x).
                then(odpowiedzSerwerr, onError);
    }

    var odpowiedzSerwerr = function (response) {
        $rootScope.userr = response.data;
    }

    var odpowiedzSerwer = function (response) {
        $rootScope.user = response.data;

        $http.get($scope.user.repos_url).
        then(onRepos, onError);
    }

    var onRepos = function (response) {
        $rootScope.repos = response.data;
    }

    var onError = function (reason) {
        $scope.error = "Nie można pobrać informacji"
    }

    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username).
        then(odpowiedzSerwer, onError);
        $rootScope.name = username;

    }

})

.controller('szczeP', function ($scope, $http, $rootScope, $location) {

    $scope.test = function () {
        $scope.start();
    }
    $scope.uzytkownik = $scope.user;
    $scope.url = $location.path();
    $scope.url2 = $scope.url.replace("/app/listaGit/", "");
    $scope.projekt = function () {
        $http.get("https://api.github.com/repos/" + $scope.name + "/" + $scope.url2).
            then(odpowiedzSerwe, onErrorr);
    }
    var onErrorr = function (reason) {
        $scope.error = "Nie można pobrać informacji"
    }
    var odpowiedzSerwe = function (response) {
        $scope.projektt = response.data;
    }
    $scope.projekt();

})
.controller("wyslijEmail", function ($scope, $http) {
    $scope.sukcess = "Czekam";
    $scope.imie = "Jan";
    $scope.nazwisko = "Kowalski";
    $scope.adresEmail = "jan.kowalski@gmail.com";

    var data = ({
        imie: this.imie,
        nazwisko: this.nazwisko,
        adresEmail: this.adresEmail
    })

    $scope.wyslij = function () {
        $http.post("https://api.github.com/repos/", data)
            .then(sukces,blad);
    }
    var sukces = function (reason) {
        $scope.sukcess = "Poprawnie";
    }
    var blad = function (reason) {
        //$scope.sukcess = data.imie;
        $scope.sukcess = "Blad";
    }
});