myApp.controller("AddController", ["$scope", "$http", "MovieService", function($scope, $http, MovieService){
    $scope.movies = {};
    $scope.words = {};
    $scope.diary={};
    $scope.randomWord = [];
    $scope.data = [];
    $scope.vocabulary = [];

    $scope.search = function(data){
      console.log("We are going to go look for ", data);
      $http.get("http://words.bighugelabs.com/api/2/784ce18f8301cae5e5e361a7ec795aca/" + data.name + "/json").then(function(response){
          console.log(response.data);
          $scope.data = [];
          $scope.data.push(response.data);
      });
    };

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

    $scope.addWord = function(data){
        console.log(data);
        var postObject = {};
        postObject.translation = data.translation;
        postObject.query = data.query;
        MovieService.postMovie(postObject);
    };

    $scope.diaryEntry = function(data){
        console.log(data);
        var postObject = {};
        postObject.content = data.content;
        MovieService.postWord(postObject);
    };
}]);

myApp.controller("ShowController", ["$scope", "MovieService", function($scope, MovieService){
    MovieService.getMovies();
    MovieService.getWord();

    $scope.data = MovieService.data;
    $scope.wordsEntered = MovieService.words;
}]);
