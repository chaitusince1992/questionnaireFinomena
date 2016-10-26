questionApp.controller('questionsController', ['$scope', '$routeParams','$location','$timeout','commonConstants', 'commonServices',
    function ($scope,  $routeParams, $location,$timeout,commonConstants, commonServices) {
        var self = $scope;
        console.log('inside login controller');
        self.init = function () {
            console.log($routeParams.questionNo);
            self.parameters = $routeParams;
            commonServices.selectRowsQuery(self.parameters.questionNo).then(function(result) {
                console.log(result);
                self.questionInformation = result[0];
            },function() {
                
            });
        };
        self.goBack = function() {
            history.back();
        };
        self.clickedOnOption = function($event) {
            console.log($event);
            if(self.parameters.questionNo < 5) {
                var goTo = Number(self.parameters.questionNo) + 1;
                $location.path("questions/"+goTo);
            } else {
                console.log("go to result");
            }
        }
    }
]);
