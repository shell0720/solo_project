myApp.controller("AddController", ["$scope", "$http", "DataService", function($scope, $http, DataService){
  //set variables to store objects
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

    // $scope.random = function (data) {
    //   $http.get("http://randomword.setgetgo.com/get.php").then(function(response){
    //     $scope.randomWord = [];
    //     $scope.randomWord.push(response.data);
    //   });
    // }


//save translation
    $scope.addWord = function(data){
        console.log(data);
        DataService.postVocabulary(data);
    };
//save diary
    $scope.diaryEntry = function(data){
        console.log(data);
        DataService.postDiary(data);
    };

    //save exercise
    $scope.exerciseEntry = function(data){
        console.log(data);
        DataService.postExercise(data);
    };
}]);
