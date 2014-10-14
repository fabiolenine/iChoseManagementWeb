// js/localController.js
angular.module('localController',[])

    //inject the Event service factory into our controller
    .controller('localCTRL', function($scope, $http, Locals) {
        $scope.formData = {};
        
        // List ===================================================================================
        // When landing on the page, get all events and show them
        // use the service to get all the events
        Locals.list()
            .success(function(data) {
                $scope.locals = data;
            });
        
        // Insert =================================================================================
        // When submitting the add form, send the text to the node API
        $scope.insert = function() {
            
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same event anymore
            
            if(!$.isEmptyObject($scope.formData)) {
                
                // call the insert function from our service (returns a promise object)
                
                Events.insert($scope.formData)
                
                // if successful creation, call our get function to get all the new events
                
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.locals = data; // assign our new list of events
                });
            }
        };

        // Update ==================================================================================
        // Update a event after checking it
        $scope.update = function() {
            Events.update($scope.formData)
                //if successful insert, call our list function to list all the new events
            .success(function(data) {
                $scope.locals = data;
            });
        };
        
        // Erase ==================================================================================
        // delete a event after checking it
        $scope.erase = function(id) {
            Events.erase(id)
                //if successful insert, call our list function to list all the new events
            .success(function(data) {
                $scope.locals = data;
            });
        };
    });