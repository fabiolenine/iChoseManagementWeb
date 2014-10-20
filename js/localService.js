// js/localService.js
angular.module('localService',[])

// super simple service
// each function returns a promise object

.factory('Locals', function($http) {
    return {
        list                : function() {
            return $http.get('/local/list');
        },
        estadoscidadeslista : function() {
            return $http.get('/estadosecidades/list');
        },
        providerlista       : function() {
            return $http.get('/fornecedor/providerlist');
        },
        salvar              : function(elemData) {
            return $http.post('/local/salvar', elemData);
        },
        erase               : function(id) {
            return $http.post('/local/erase/' + id);
        }
    }
});