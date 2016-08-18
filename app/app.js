import angular from 'angular';
import uiRouter from 'angular-ui-router';


import account from './modules/account';
import chats from './modules/chats';
import dash from './modules/dash';
import tabs from './modules/tabs';
import login from './modules/login';


let App = angular.module('app', [
  'ionic',
  'ui.router',
  'tabs',
  'account',
  'chats',
  'dash',
  'login'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/login");
}

App.config(config);


function run($ionicPlatform) {
  $ionicPlatform.ready(() => {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}

App.run(run);
