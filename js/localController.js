// js/localController.js
angular.module('localController',[])

    //inject the Event service factory into our controller
    .controller('localCTRL', function($scope, $http, Locals) {
        $scope.formData = {};
        $scope.predicate = 'estabelecimento';
        $scope.status = {estado: 'escolha o Estado',
                        cidade: 'escolha a Cidade'};        
        
        // Novo ===================================================================================
        $scope.novo = function(){
            $scope.formData = {};
        };

        
        // List ===================================================================================
        // When landing on the page, get all events and show them
        // use the service to get all the events
        Locals.list()
            .success(function(data) {
                $scope.locals = data;
            });
        
        Locals.estadoscidadeslista()
            .success(function(data) {
                $scope.estadoscidades = data;
            });
    
        $scope.uf = function(data) {
            console.log(data.nome);
            $scope.status.estado = data.nome;
            $scope.formData.estado = data.nome;
        };
    
        // Insert =================================================================================
        // When submitting the add form, send the text to the node API
        $scope.salvar = function() {
            
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same event anymore
            
            if(!$.isEmptyObject($scope.formData)) {
                
                // call the insert function from our service (returns a promise object)
                
                Locals.salvar($scope.formData)
                
                // if successful creation, call our get function to get all the new events
                
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.locals.push(data); // assign our new list of events
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
            Locals.erase(data._id)
                //if successful insert, call our list function to list all the new events
            .success(function(retorno) {
                var index = $scope.locals.indexOf(data);
                // $scope.locals.splice(index,1);
                // usar as duas linhas acima comentadas, no projeto provider.
                $scope.locals[index].forauso = true;
            });
        };
    });