// js/provideruserService.js
angular.module('provideruserService',[])

// super simple service
// each function returns a promise object

.factory('ProviderUsers', function($http) {
    return {
        list                : function() {
            return $http.get('/fornecedor/userlist');
        },
        salvar              : function(elemData) {
            return $http.post('/fornecedor/usersalvar', elemData);
        },
        erase               : function(id) {
            return $http.post('/fornecedor/usererase/' + id);
        }
    }
});