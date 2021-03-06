'use strict';

var helloExpress = angular.module('helloExpress',['ngRoute'])
  .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider
      .when('/matches',{
        templateUrl: 'js/angular/templates/matches/matches.html',
        controller: 'MatchesCtrl'
      })
      .when('/matches/create',{
       templateUrl: 'js/angular/templates/matches/create.html',
       controller: 'MatchCtrl'
      })
      .when('/signin',{
        templateUrl: 'js/angular/templates/signin.html',
        controller: 'LoginCtrl'
      })
      .when('/home',{templateUrl: 'js/angular/templates/home.html'})
      .when('/signup',{
        templateUrl: 'js/angular/templates/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/',{
        templateUrl: 'js/angular/templates/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({rediredtTo: '/'});
  }]);
