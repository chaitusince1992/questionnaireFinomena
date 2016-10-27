questionApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/enterName', {
            templateUrl: 'view/enterName.template.html',
            controller: 'enterNameController'
        })
        .when('/', {
            templateUrl: 'view/enterName.template.html',
            controller: 'enterNameController'
        })
        .when('/questions/:questionNo', {
            templateUrl: 'view/questions.template.html',
            controller: 'questionsController'
        })
        .when('/answers/:questionNo', {
            templateUrl: 'view/answers.template.html',
            controller: 'answersController'
        })
        .otherwise("/", {
            url: '/enterName'
        })
}]);
