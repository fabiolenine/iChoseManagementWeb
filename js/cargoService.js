// js/cargoService.js
angular.module('cargoService',[])

// super simple service
// each function returns a promise object

.factory('Controllers', function($http) {
    return {
        list                : function() {
            return $http.get('/cargos/list');
        },
        salvar              : function(elemData) {
            return $http.post('/cargos/salvar', elemData);
        },
        erase               : function(id) {
            return $http.post('/cargos/erase/' + id);
        }
    }
});