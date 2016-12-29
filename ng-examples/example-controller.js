(function () {
    'use strict';

    angular.module('varejotec')
        .controller('ExampleController', ExampleController);

    /*@ngInject*/
    function ExampleController() {
        var vm = this;

        vm.lista = [];
        vm.model = {};
        vm.addItem = addItem;

        activate();

        ////////////////

        function activate() {
            listar();
        }

        function addItem() {
            if (vm.model && vm.model.codigo && vm.model.descricao && vm.model.preco) {
                vm.lista.push(vm.model);
            }
        }

        function listar() {
            vm.lista.push({ codigo: 1, descricao: 'Mc Double Sinistrão', preco: 25.99 });
            vm.lista.push({ codigo: 2, descricao: 'Mc Doncio X Picanha', preco: 45.99 });
            vm.lista.push({ codigo: 3, descricao: '"Tlês Pastel de Cáine"', preco: 15.99 });
        }
    }
})();
