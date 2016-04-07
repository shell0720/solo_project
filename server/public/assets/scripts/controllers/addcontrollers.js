myApp.controller("AddController", ["$scope", "$http", "DataService", function($scope, $http, DataService){
    //$scope.translate = {};
    //$scope.words = {};
    //$scope.diary={};
    $scope.randomWord = [];
    $scope.data = [];
    $scope.vocabulary = [];
//search synoym and antynom
    $scope.search = function(data){
      console.log("We are going to go look for ", data);
      $http.get("http://words.bighugelabs.com/api/2/784ce18f8301cae5e5e361a7ec795aca/" + data.name + "/json").then(function(response){
          console.log(response.data);
          $scope.data = [];
          $scope.data.push(response.data);
      });
    };
//search chinese-english
    $scope.look = function(data){
      console.log("We are going to go look for ", data);
      $http.get("http://fanyi.youdao.com/openapi.do?keyfrom=shell0720&key=1801546933&type=data&doctype=json&version=1.1&q="+ data.name).then(function(response){
          console.log(response.data);
          $scope.vocabulary = [];
          $scope.vocabulary.push(response.data);
      });
    };

    $scope.random = function (data) {
      $http.get("http://randomword.setgetgo.com/get.php").then(function(response){
        $scope.randomWord = [];
        $scope.randomWord.push(response.data);
      });
    }


//save translation
    $scope.addWord = function(data){
        console.log(data);
        var postObject = {};
        postObject.translation = data.translation;
        postObject.query = data.query;
        DataService.postVocabulary(postObject);
    };
//save diary
    $scope.diaryEntry = function(data){
        console.log(data);
        var postObject = {};
        postObject.content = data.content;
        postObject.title = data.title;
        postObject.date = data.date;
        postObject.weather = data.weather;
        DataService.postDiary(postObject);
    };

    //save exercise
    $scope.exerciseEntry = function(data){
        console.log(data);
        var postObject = {};
        postObject.type = data.type;
        postObject.time = data.time;
        postObject.duration = data.duration;
        postObject.mood = data.mood;
        postObject.author = data.author;
        DataService.postExercise(postObject);
    };
}]);
