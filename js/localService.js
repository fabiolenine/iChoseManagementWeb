// js/localService.js
angular.module('localService',[])

// super simple service
// each function returns a promise object

.factory('Locals', function($http) {
    return {
        list    : function() {
            return $http.get('/local/list');
        },
        salvar  : function(elemData) {
            return $http.post('/local/salvar', elemData);
        },
        //update  : function(elemData) {
        //    return $http.post('/local/update', elemData);
        //},
        erase   : function(id) {
            return $http.post('/local/erase/' + id);
        }
    }
});