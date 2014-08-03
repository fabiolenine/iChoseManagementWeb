function providerCTRL($scope, $window, $http){
    
    var $ = jQuery;
    
    $scope.salvar = function()
    {
        //Adicionar aqui a chamada ao serviço.
        $scope.lista.unshift($scope.fornecedor);
    }
    
    var init = function()
    {
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
        $scope.lista = [];
    };

    init();
}