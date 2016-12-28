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
.controller("listaGit", function ($scope, $http) {
    $scope.username = "Microsoft";        

    var odpowiedzSerwer = function (response) {
        $scope.user = response.data;

        $http.get($scope.user.repos_url).
        then(onRepos, onError);
    }

    var onRepos = function (response) {
        $scope.repos = response.data;
    }

    var onError = function (reason) {
        $scope.error = "Nie można pobrać informacji"
    }

    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username).
        then(odpowiedzSerwer, onError);

    }
})