questionApp.controller('questionsController', ['$scope', '$routeParams', '$location', '$timeout', 'commonConstants', 'commonServices',
    function ($scope, $routeParams, $location, $timeout, commonConstants, commonServices) {
        var self = $scope;
        console.log('inside login controller');
        self.init = function () {
            console.log($routeParams.questionNo);
            self.parameters = $routeParams;
            commonServices.selectRowsQuery(self.parameters.questionNo).then(function (result) {
                console.log(result);
                self.questionInformation = commonServices.farmatOptionsData(result[0]);
            }, function () {

            });
        };
        self.goBack = function () {
            history.back();
        };
        self.clickedOnOption = function ($event, id) {
            console.log($event);
            console.log(id);
            commonServices.insertAnswers(id, self.parameters.questionNo);
            console.log($event.currentTarget.children[1].children[0].checked);
            var toColor;
            var elem = $event.currentTarget.children[0];
            if ($event.currentTarget.children[1].children[0].checked == true) {
                console.log("checked checked");
                toColor = '#4cdc4c'; //green
            } else if ($event.currentTarget.children[1].children[0].checked == false) {
                console.log("not checked");
                toColor = '#b3adaa'; //grey
            }
            elem.style.background = toColor;
            var top = 0;
            var left = 0;
            var width = 0;
            var height = 0;
            var id = setInterval(frame, 1);

            function frame() {
                if (width >= 1000) {
                    clearInterval(id);
                    elem.style.width = '0px';
                    elem.style.height = '0px';
                    elem.style.top = '0px';
                    elem.style.left = '0px';
                    $event.currentTarget.style.background = toColor;
                } else {
                    width += 10;
                    height += 10;
                    top = $event.offsetY - $(elem).height() / 2;
                    left = $event.offsetX - $(elem).width() / 2
                    elem.style.width = width + 'px';
                    elem.style.height = height + 'px';
                    elem.style.top = top + 'px';
                    elem.style.left = left + 'px';
                }
            }
        };
        self.goToNextQuestionOrEndTest = function () {
            if (self.parameters.questionNo < 5) {
                var goTo = Number(self.parameters.questionNo) + 1;
                $location.path("questions/" + goTo);
            } else {
                console.log("go to result");
            }
        };
    }
]);
