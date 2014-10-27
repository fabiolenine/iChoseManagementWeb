// js/dashboardController.js
angular.module('dashboardController',[])

    //inject the Event service factory into our controller
    .controller('dashboardCTRL', function($scope, $http, DashBoards) {
        
        $scope.reset = function() {            
            $scope.formData         = {};
        };
    
        $scope.reset();
        
        // List ===================================================================================
        // When landing on the page, get all events and show them
        // use the service to get all the events
        DashBoards.eventcount()
            .success(function(data) {
                console.log(data);
                $scope.vieweventcount = data;
            });
          
    });