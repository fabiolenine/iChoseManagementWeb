function providerCTRL($scope, $window, $http){
    
    var $ = jQuery;
    
    $scope.salvar = function()
    {
        //Adicionar aqui a chamada post ao serviço.
        //if($scope.fornecedor.id > 0 ){
        //    $http.put('/blabla/fornecedor', $scope.fornecedor).success(function(data){
        //        
        //    });
        //}
        //else
        //{
        //  $http.post('/blabla/fornecedor', $scope.fornecedor).success(function(data){
        //      $scope.lista.unshift(data);
        //
        //  });
        $scope.lista.unshift($scope.fornecedor);
        
        reset();
        //}
    }
    
    $scope.editar = function(unidade){
        $scope.fornecedor = unidade;
    };
    
    $scope.excluir = function(unidade){
        var confirm = $window.confirm('Tem certeza que deseja excluir ' + unidade.nomefantasia + '?');
        
        if(confirm){
            //acrescentar aqui um post de alteração do forauso.
            var index = $scope.lista.indexOf(unidade);
            $scope.lista.splice(index,1);
            // fecha o $http do post aqui --> });
        }
    };
    
    var reset = function(){
        $scope.fornecedor = {razaosocial        : ''
                            ,nomefantasia       : ''
                            ,nomeresponsavel    : ''
                            ,cnpj               : ''
                            ,inscricaoestadual  : ''
                            ,inscricaomunicipal : ''
                            ,logradouro         : ''
                            ,complemento        : ''
                            ,bairro             : ''
                            ,cidade             : ''
                            ,estado             : ''
                            ,cep                : ''
                            ,caixapostal        : ''
                            ,nomecontato        : ''
                            ,cargo              : ''
                            ,setor              : ''
                            ,email              : ''
                            ,telefone           : ''
                            ,website            : ''
                            ,situacao           : ''
                            ,forauso            : false 
                            ,id                 : 0};        
    };
    
    var init = function()
    {   
        //realizar uma get aqui para formar a lista, exemplo:
        // $http.get('/blabla/fornecedor').success(function(data){
        //      $scope.lista = data;
        // });
        $scope.lista = [];
        
        reset();
    };

    init();
}