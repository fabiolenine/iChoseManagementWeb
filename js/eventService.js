// js/events.js
angular.module('eventService',[])

// super simple service
// each function returns a promise object

.factory('Controllers', function($http) {
    return {
        list                : function() {
            return $http.get('/event/list');
        },
        estadoscidadeslista : function() {
            return $http.get('/estadosecidades/list');
        },
        salvar              : function(elemData) {
            return $http.post('/event/salvar', elemData);
        },
        erase               : function(id) {
            return $http.post('/event/erase/' + id);
        }
    }
});