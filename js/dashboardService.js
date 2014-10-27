// js/dashboardService.js
angular.module('dashboardService',[])

// super simple service
// each function returns a promise object

.factory('DashBoards', function($http) {
    return {
        eventcount          : function() {
            return $http.get('/dashboard/eventcount');
        },
        list                : function() {
            return $http.get('/dashboard/userlist');
        },
        list                : function() {
            return $http.get('/dashboard/userlist');
        }
    }
});