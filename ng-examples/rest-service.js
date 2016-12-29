(function () {
    'use strict';
    angular.module('varejotec')
    .service('RESTService', RESTService);

    /*@ngInject*/
    function RESTService($http) {

        var self = this;

        self.post = post;
        self.get = get;
        self.put = put;
        self.delete_ = delete_;

    

        var properties = {
            contextPath: 'http://backoffice:8888/restfood/',
            //contextPath: 'http://10.62.15.61:8899/restfood/',
            servicesRest: 'services/'
        };


        function post(url, data, config) {
            return $http.post(properties.contextPath + properties.servicesRest + url, data, config);
        }

        function get(url, config) {
            return $http.get(properties.contextPath + properties.servicesRest + url);
        }

        function put(url, data, config) {
            return $http.put(properties.contextPath + properties.servicesRest + url, data, config);
        }
    
        function delete_(url, config) {
            return $http.delete(properties.contextPath + properties.servicesRest + url, config);
        }


        
        return self;
    }
})();

