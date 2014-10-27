// js/dashboardController.js
angular.module('dashboardController',[])

    //inject the Event service factory into our controller
    .controller('dashboardCTRL', function($scope, $http, DashBoards) {
        
        // List ===================================================================================
        DashBoards.eventcount()
            .success(function(data) {
                console.log(data);
                $scope.vieweventcount = data;
            });

        DashBoards.saccount()
            .success(function(data) {
                console.log(data);
                $scope.viewsaccount = data;
            });

        DashBoards.usermobilecount()
            .success(function(data) {
                console.log(data);
                $scope.viewusermobilecount = data;
            });

        DashBoards.emailveraocount()
            .success(function(data) {
                console.log(data);
                $scope.viewemailveraocount = data;
            });

    });