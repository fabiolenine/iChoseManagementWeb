// js/localController.js
angular.module('providerController',[])

    //inject the Event service factory into our controller
    .controller('providerCTRL', function($scope, $http, Controllers) {
        $scope.formData         = {};
        $scope.predicate        = 'nomefantasia';
        $scope.status           = { estado     : 'escolha o Estado',
                                    cidade     : 'escolha a Cidade'};
        $scope.arrayscidades    = [];
        
        // Novo ===================================================================================
        $scope.novo = function(){
            $scope.formData = {};
        };

        
        // List ===================================================================================
        // When landing on the page, get all events and show them
        // use the service to get all the events
        Controllers.list()
            .success(function(data) {
                $scope.collections = data;
            });
        
        Controllers.estadoscidadeslista()
            .success(function(data) {
                $scope.estadoscidades = data;
            }); 
    
        $scope.uf = function(data) {
            $scope.status.estado = data.nome;
            $scope.formData.estado = data.nome;
            for(i=0; i< data.cidades.length; i++) {
                $scope.arrayscidades.push(data.cidades[i]);
            }
        };
    
        $scope.city = function(data) {
            $scope.status.cidade = data;
            $scope.formData.cidade = data;
        };
    
        // Insert =================================================================================
        // When submitting the add form, send the text to the node API
        $scope.salvar = function() {
            
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same event anymore
            
            if(!$.isEmptyObject($scope.formData)) {
                
                // call the insert function from our service (returns a promise object)
                
                Controllers.salvar($scope.formData)
                
                // if successful creation, call our get function to get all the new events
                
                .success(function(data) {
                    
                    $scope.pesquisa(data,function(callback){
                        if(callback == -1){
                            $scope.collections.push(data);
                        }
                        else {
                            console.log('passei por aqui');
                            console.log(callback);
                            $scope.collections[callback] = data;
                        }
                    });
                    $scope.formData = {}; // clear the form so our user is ready to enter another
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
            console.log(data);
            console.log(data._id);
            Controllers.erase(data._id)
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