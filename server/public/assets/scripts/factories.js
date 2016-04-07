myApp.factory("MovieService", ["$http", function($http){
    var data = {};
    var words = {};

    var postMovie = function(data){
        $http.post("/data/voc", data).then(function(response){
            console.log("Vocabulary SAVED! ", response);
            getMovies();
        });
    };
    var postWord = function(data){
        $http.post("/data/word", data).then(function(response){
            console.log("word SAVED! ", response);
            getWord();
        });
    };

    var getMovies = function(){
        $http.get("/data/voc").then(function(response){
            console.log(response.data);
            data.response = response.data;
        });
    };

    var getWord = function(){
        $http.get("/data/word").then(function(response){
            console.log(response.data);
            words.response = response.data;
        });
    };

    return {
        postMovie : postMovie,
        getMovies : getMovies,
        getWord: getWord,
        postWord: postWord,
        data : data,
        words: words
    };
}]);
