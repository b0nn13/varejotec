(function () {
    'use strict';

    angular.module('varejotec', [
    ])
        .config(config)
        .run(run);

    function config($httpProvider) {
        
        // CROSS DOMAIN CONFIG
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'origin, content-type, accept, authorization';
        $httpProvider.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
        $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD';
        $httpProvider.defaults.headers.common['Origin'] = '*';


        $httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        $httpProvider.defaults.headers.post['Access-Control-Allow-Headers'] = 'origin, content-type, accept, authorization';
        $httpProvider.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
        $httpProvider.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD';
        $httpProvider.defaults.headers.post['Origin'] = '*';
    }

    function run() {

    }
})();