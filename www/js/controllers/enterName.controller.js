questionApp.controller('enterNameController', ['$scope', '$location','commonConstants', 'commonServices',
    function ($scope,$location, commonConstants, commonServices) {
        var self = $scope;
        console.log('inside login controller');
        self.init = function () {
        };
        self.submitUserName = function() {
            console.log(self.userName);
        };
        self.submitButtonForAnimation = function($event) {
            console.log(self.userName);
            $location.path("questions/1");
        };
    }
]);
