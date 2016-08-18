import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';


let login = angular.module('login', []);

login.config(config);
login.controller(controller);
login.service('UserService', service)

export default login;
