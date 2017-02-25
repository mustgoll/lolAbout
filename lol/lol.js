(function(angular) {
    'use strict';
    var a = angular.module('game.lol', ['ngRoute', 'game.lol.Jsonp'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/lol', {
                templateUrl: 'lol/lol.html',
                controller: 'lolCtrl'
            })
        }]);
    a.controller('lolCtrl', ['$scope', 'HttpService', function($scope, HttpService) {
        $scope.lolData = [];
        $scope.player = "哥哥霸气侧漏";
        $scope.show = function() {
            HttpService.jsonp("http://api.lolbox.duowan.com/api/v3/player/search/", {
                "player_name_list": $scope.player
            }, function(data) {
                if (data.player_list == "") {
                    alert("该召唤师不存在")
                } else {

                    $scope.lolData = data.player_list;
                }
                $scope.$apply();
            });
        }
        $scope.key = function(e) {
            var keycode = window.even ? e.keyCode : e.which;
            if (keycode == 13) {
                $scope.show();
            }
        }
    }]);
})(angular)
