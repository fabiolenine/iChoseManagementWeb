// js/providerService.js
angular.module('providerService',[])

// super simple service
// each function returns a promise object

.factory('Controllers', function($http) {
    return {
        list                : function() {
            return $http.get('/fornecedor/list');
        },
        estadoscidadeslista : function() {
            return $http.get('/estadosecidades/list');
        },
        salvar              : function(elemData) {
            return $http.post('/fornecedor/salvar', elemData);
        },
        erase               : function(id) {
            return $http.post('/fornecedor/erase/' + id);
        }
    }
});