(function () {
    'use strict';

    angular.module('varejotec')
        .controller('RESTFoodController', RESTFoodController);

    /*@ngInject*/
    function RESTFoodController(RESTFoodService) {
        var vm = this;

        vm.cardapio = [];
        vm.pedido = null;


        vm.iniciarPedido = iniciarPedido;
        vm.cancelarPedido = cancelarPedido;
        vm.finalizarPedido = finalizarPedido;
        vm.removeItem = removeItem;

        vm.addItem = addItem;

        activate();


        function activate() {
            listarcardapio();
        }

        function iniciarPedido() {

            vm.pedido = null;
            RESTFoodService.iniciarpedido().then(
                function (response) {
                    criarPedido();
                },
                function (error) {
                    alert('Erro ao criar pedido');
                }
            );
        }

        function cancelarPedido() {
            vm.pedido = null;
            alert('Pedido CANCELADO');
        }

        function finalizarPedido() {

            vm.pedido = null;
            RESTFoodService.finalizarpedido().then(
                function (response) {
                    alert('Pedido Realizado com Sucesso!');
                },
                function (error) {
                    alert('Erro ao finalizar pedido');
                }
            );
        }

        function criarPedido() {
            vm.pedido = {};
            vm.pedido.item = [];
        }

        function addItem(item) {
            vm.pedido.items = [];
            RESTFoodService.adicionarproduto(item).then(
                function (response) {
                    listarpedidos();
                },
                function (error) {
                    alert('Erro ao adicionar item');
                }
            );
        }

        function removeItem(item) {
            vm.pedido.items = [];
            RESTFoodService.removerproduto(item).then(
                function (response) {
                    listarpedidos();
                },
                function (error) {
                    alert('Erro ao remover item');
                }
            );
        }

        function listarpedidos() {
            RESTFoodService.listarprodutopedido().then(
                function (response) {
                    vm.pedido.items = response.data;
                    totalizarPedido();
                },
                function (error) {
                    alert('Erro ao listar itens do pedido');
                }
            );
        }


        function totalizarPedido() {
            RESTFoodService.consultarvalortotaltotalpedido().then(
                function (response) {
                    vm.pedido.valorTotal = response.data.valorTotal;
                },
                function (error) {
                    alert('Erro ao calcular pedido');
                }
            );
            
        }


        function listarcardapio() {
            vm.cardapio = [];
            RESTFoodService.listarcardapio().then(
                function (response) {
                    vm.cardapio = response.data;
                },
                function (error) {
                    alert('Erro ao listar cardapio');
                }
            );
        }
    }
})();
