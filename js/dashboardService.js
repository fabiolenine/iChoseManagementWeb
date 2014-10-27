// js/dashboardService.js
angular.module('dashboardService',[])

// super simple service
// each function returns a promise object

.factory('DashBoards', function($http) {
    return {
        eventcount          : function() {
            return $http.get('/dashboard/eventcount');
        },
        saccount            : function() {
            return $http.get('/dashboard/saccount');
        },
        usermobilecount     : function() {
            return $http.get('/dashboard/usermobilecount');
        },
        emailveraocount     : function() {
            return $http.get('/dashboard/emailveraocount');
        }
    }
});