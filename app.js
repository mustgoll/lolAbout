'use strict';
angular.module('game', ['ngRoute', 'game.lol'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/lol' });
    }])
