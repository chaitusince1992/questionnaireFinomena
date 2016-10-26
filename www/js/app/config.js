mainApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/enterName');
    $stateProvider
        .state('enterName', {
            url: '/enterName',
            templateUrl: 'view/enterName.template.html',
            controller: 'enterNameController'
        })
        .state("otherwise", {
            url: '/enterName'
        })
}]);
