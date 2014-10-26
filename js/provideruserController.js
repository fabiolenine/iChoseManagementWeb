// js/provideruserController.js
angular.module('provideruserController',[])

    //inject the Event service factory into our controller
    .controller('provideruserCTRL', function($scope, $http, ProviderUsers) {
        
        $scope.reset = function() {            
            $scope.formData         = {};
        };
    
        $scope.reset();
    
        $scope.predicate        = 'nome';
        
        // List ===================================================================================
        // When landing on the page, get all events and show them
        // use the service to get all the events
        ProviderUsers.list()
            .success(function(data) {
                console.log(data);
                $scope.collections = data;
            });
            
        // Insert =================================================================================
        // When submitting the add form, send the text to the node API
        $scope.salvar = function() {
            
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same event anymore
            
            if(!$.isEmptyObject($scope.formData)) {
                
                // call the insert function from our service (returns a promise object)
                
                ProviderUsers.salvar($scope.formData)
                
                // if successful creation, call our get function to get all the new events
                
                .success(function(data) {
                    
                    $scope.pesquisa(data,function(callback){
                        if(callback == -1){
                            $scope.collections.push(data);
                        }
                        else {
                            $scope.collections[callback] = data;
                        }
                    });
                    $scope.reset(); // clear the form so our user is ready to enter another
                });
            }
        };

        // Editar =================================================================================
        // Atualiza os campos com o registro corrente.
        $scope.editar = function(data){
            $scope.formData = data;
        };
        
        // Erase ==================================================================================
        // delete a event after checking it
        $scope.erase = function(data) {
            ProviderUsers.erase(data._id)
                //if successful insert, call our list function to list all the new events
            .success(function(retorno) {
                var index = $scope.collections.indexOf(data);
                // $scope.collections.splice(index,1);
                // usar as duas linhas acima comentadas, no projeto provider.
                $scope.collections[index].forauso = true;
            });
        };
    
        $scope.pesquisa = function(data,callback){
            var index = -1;
                    
            for(i = 0; i < $scope.collections.length; i++) {
                if($scope.collections[i]._id == data._id) {
                    return i;
                }
            }
            return index;
        };
    });