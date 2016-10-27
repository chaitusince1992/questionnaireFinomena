questionApp.service('commonServices', ['commonConstants','$q', function (commonConstants,$q) {
    var _db;
    self = this;
    self.db = function() {
        _db = window.openDatabase(commonConstants.dbName, "1.0", "Questions", 200000);
        window.db = _db;
//        console.log(_db);
        return _db;
    };
    
    self.preloadDataBase = function() {
        var deferred = $q.defer();
        self.db().transaction(function(tx) {
            var queries = 'CREATE TABLE IF NOT EXISTS questions (srNo integer primary key, questionText varchar, option1 varchar, option2 varchar, option3 varchar, option4 varchar, correctOption integer, givenOption integer)';
//            var queries = 'CREATE TABLE questions';
            tx.executeSql(queries);
        }, function(error) {
            deferred.reject(error);
        }, function(msg) {
            deferred.resolve('Completing the creation of the database');
            self.insertRowsQuery();
        });
        return deferred.promise;
    };
    
    self.insertRowsQuery = function() {
        self.db().transaction(function(tx) {
            console.log(tx);
            tx.executeSql("INSERT OR REPLACE INTO questions(srNo, questionText, option1, option2, option3, option4, correctOption, givenOption) VALUES (?,?,?,?,?,?,?,?)", [1,'When does india on the world cup','2008','2009','2010','2011',4,0]);
            tx.executeSql("INSERT OR REPLACE INTO questions(srNo, questionText, option1, option2, option3, option4, correctOption, givenOption) VALUES (?,?,?,?,?,?,?,?)", [2,'Author of who will cry when you die?','2008','2009','2010','2011',4,1]);
            tx.executeSql("INSERT OR REPLACE INTO questions(srNo, questionText, option1, option2, option3, option4, correctOption, givenOption) VALUES (?,?,?,?,?,?,?,?)", [3,'Who won the silver medal in last olympics?','2008','2009','2010','2011',4,2]);
            tx.executeSql("INSERT OR REPLACE INTO questions(srNo, questionText, option1, option2, option3, option4, correctOption, givenOption) VALUES (?,?,?,?,?,?,?,?)", [4,'Who is Krishna?','2008','2009','2010','2011',4,3]);
            tx.executeSql("INSERT OR REPLACE INTO questions(srNo, questionText, option1, option2, option3, option4, correctOption, givenOption) VALUES (?,?,?,?,?,?,?,?)", [5,'Who is Chiranjeevi?','2008','2009','2010','2011',4,4]);
        },function(data) {
            console.log(data);
        },function(data) {
            console.log(data);
        });
    };
    self.insertAnswers = function(answer, srNo) {
        self.db().transaction(function(tx) {
            console.log(tx);
            tx.executeSql("UPDATE questions SET givenOption = ? where srNo = ?", [answer, srNo]);
        },function(data) {
            console.log(data);
        },function(data) {
            console.log(data);
        });
    };
    self.selectRowsQuery = function(id) {
        var deferred = $q.defer();
        self.db().transaction(function(tx) {
            console.log(tx);
            tx.executeSql('SELECT * FROM questions where srNo = ?', [id],function(tx, res) {
                console.log(res);
                var dataFromSQLLite = new Array();
                var i = 0;
                while (i < res.rows.length) {
                    dataFromSQLLite[i] = res.rows.item(i);
                    i++;
                }
                console.log(dataFromSQLLite);
                deferred.resolve(dataFromSQLLite);
            },function(error) {
                console.log(error); 
                deferred.reject(error);
            });
        },function(err) {
        },function(res) {
        });        
        return deferred.promise;
    };
    self.farmatOptionsData = function(data) {
        var formatedData = new Object();
        formatedData["srNo"] = data.srNo;
        formatedData["questionText"] = data.questionText;
        formatedData["correctOption"] = data.correctOption;
        formatedData["givenOption"] = data.givenOption;
        var optionsArray = new Array();
        optionsArray.push({
            id:1,
            option:data.option1
        });
        optionsArray.push({
            id:2,
            option:data.option2
        });
        optionsArray.push({
            id:3,
            option:data.option3
        });
        optionsArray.push({
            id:4,
            option:data.option4
        });
        formatedData["options"] = optionsArray;
        return formatedData;
    }
}]);
