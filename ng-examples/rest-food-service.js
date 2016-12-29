(function () {
    'use strict';

    angular
        .module('varejotec')
        .service('RESTFoodService', RESTFoodService);

    /*@ngInject*/
    function RESTFoodService(RESTService) {

        var self = this;

        self.listarcardapio = listarcardapio;
        self.iniciarpedido = iniciarpedido;
        self.adicionarproduto = adicionarproduto;
        self.removerproduto = removerproduto;
        self.listarprodutopedido = listarprodutopedido;
        self.consultarvalortotaltotalpedido = consultarvalortotaltotalpedido;
        self.finalizarpedido = finalizarpedido;


        function listarcardapio() {
            return RESTService.post('atendimento/listarcardapio',{});
        }

        function iniciarpedido() {
            return RESTService.post('atendimento/iniciarpedido',{});
        }

        function adicionarproduto(item) {
            return RESTService.post('atendimento/adicionarproduto', item);
        }

        function removerproduto(item) {
            return RESTService.post('atendimento/removerproduto', item);
        }

        function listarprodutopedido() {
            return RESTService.post('atendimento/listarprodutopedido',{});
        }

        function consultarvalortotaltotalpedido() {
            return RESTService.post('atendimento/consultarvalortotaltotalpedido');
        }

        function finalizarpedido() {
            return RESTService.post('atendimento/finalizarpedido');
        }

       return self;
    }

})();