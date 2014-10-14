// js/events.js
angular.module('eventService',[])

// super simple service
// each function returns a promise object

.factory('Events', function($http) {
    return {
        list    : function() {
            return $http.get('/event/list');
        },
        insert  : function(elemData) {
            return $http.post('/event/insert', elemData);
        },
        update  : function(elemData) {
            return $http.post('/event/update', elemData);
        },
        erase   : function(id) {
            return $http.post('/event/erase', + id);
        }
    }
});