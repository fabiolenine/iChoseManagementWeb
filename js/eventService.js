// js/events.js
angular.module('eventService',[])

// super simple service
// each function returns a promise object

.factory('Events', function($http) {
    return {
        list    : function() {
            return $http.get('/event/list');
        },
        insert  : function(eventData) {
            return $http.post('/event/insert', eventData);
        },
        update  : function(eventData) {
            return $http.post('/event/update', eventData);
        },
        erase   : function(id) {
            return $http.post('/event/erase', + id);
        }
    }
});