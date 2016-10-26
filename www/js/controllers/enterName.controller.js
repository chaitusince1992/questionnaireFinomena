mainApp.controller('enterNameController', ['$state', '$rootScope', '$scope', 'commonConstants', 'commonServices',
    function ($state, $rootScope, $scope, commonConstants, commonServices) {
        var self = $scope;
        console.log('inside login controller');
        self.init = function () {
        };
        self.submitUserName = function() {
            console.log(self.userName);
        };
        self.submitButtonForAnimation = function($event) {
            console.log(self.userName);
            console.log($event);
            console.log($event.offsetX);
            console.log($event.offsetY);
            $(".another-svg-image").css("right",$event.offsetX-$(".another-svg-image").width()/2);
            $(".another-svg-image").css("bottom",$event.offsetY-$(".another-svg-image").height()/2);
            $(".svg-2").animate({
                width: '100px',
                height: '100px'
            },1000)
        };
    }
]);
