questionApp.controller('resultController', ['$scope', '$routeParams', '$filter', '$location', '$timeout', 'commonConstants', 'commonServices',
    function ($scope, $routeParams, $filter, $location, $timeout, commonConstants, commonServices) {
        var self = $scope;
        self.selectedAnswers = [];
        console.log('inside login controller');
        self.init = function () {
            self.getData();
        };
        /*self.correctWidth = function () {
             commonServices.db().transaction(function (tx) {
                tx.executeSql('SELECT * FROM questions', [], function (tx, res) {
                    console.log(res);
                    var dataFromSQLLite = new Array();
                    var i = 0,
                        count = 0;
                    while (i < res.rows.length) {
                        if (res.rows.item(i).givenOption == res.rows.item(i).correctOption) {
                            count++
                        }
                        i++;
                    }
                    console.log((count / 5) * 100 + "%");
                    return (count / 5) * 100 + "%";
                }, function (error) {});
            });
        };
        self.wrongWidth = function () {
            commonServices.db().transaction(function (tx) {
                tx.executeSql('SELECT * FROM questions', [], function (tx, res) {
                    console.log(res);
                    var dataFromSQLLite = new Array();
                    var i = 0,
                        count = 0;
                    while (i < res.rows.length) {
                        if (res.rows.item(i).givenOption != res.rows.item(i).correctOption) {
                            count++
                        }
                        i++;
                    }
                    console.log((count / 5) * 100 + "%");
                    return (count / 5) * 100 + "%";
                }, function (error) {});
            });
        };*/
        self.getData = function () {
            commonServices.db().transaction(function (tx) {
                tx.executeSql('SELECT * FROM questions', [], function (tx, res) {
                    console.log(res);
                    var dataFromSQLLite = new Array();
                    var i = 0,
                        count1 = 0, count2 = 0;
                    while (i < res.rows.length) {
                        if (res.rows.item(i).givenOption == res.rows.item(i).correctOption) {
                            count1++;
                        } else {
                            count2++;
                        }
                        i++;
                    }
                    self.wrongWidth = (count2/5)*100+"%";
                    self.correctWidth = (count1/5)*100+"%";
//                    return count;
                }, function (error) {});
            });
        }
    }
]);
