myApp.factory("DataService", ["$http", function($http){
    var data = {};
    var entry = {};
    var exercise = {};
    var user = {};

    var getUser = function (data){
      $http.get("/user/name").then(function(response){
          console.log(response.data);
          user.response = response.data;
      });
    }

    var postVocabulary = function(data){
        $http.post("/data/voc", data).then(function(response){
            console.log("Vocabulary SAVED! ", response);
            getVocabulary();
        });
    };
    var postDiary = function(data){
        $http.post("/data/diary", data).then(function(response){
            console.log("diary SAVED! ", response);
            getDiary();
        });
    };

    var postExercise = function(data){
        $http.post("/data/exercise", data).then(function(response){
            console.log("exercise SAVED! ", response);
            getExercise();
        });
    };

    var getExercise = function(){
        $http.get("/data/exercise").then(function(response){
            console.log(response.data);
            exercise.response = response.data;
        });
    };

    var getVocabulary = function(){
        $http.get("/data/voc").then(function(response){
            console.log(response.data);
            data.response = response.data;
        });
    };

    var getDiary = function(){
        $http.get("/data/diary").then(function(response){
            console.log(response.data);
            entry.response = response.data;
        });
    };

    var deleteVocData = function(data){
        $http.delete("/data/voc/"+data._id).then(function(response){
        console.log(data);
        console.log(response.data);
        getVocabulary();
    });
  };

    var deleteDiaryData = function(data){
        $http.delete("/data/diary/"+data._id).then(function(response){
        console.log(data);
        console.log(response.data);
        getDiary();
    });
  };

    var deleteExerciseData = function(data){
        $http.delete("/data/exercise/"+data._id).then(function(response){
        console.log(data);
        console.log(response.data);
        getExercise();
    });
  }

    return {
        postVocabulary : postVocabulary,
        getVocabulary : getVocabulary,
        postDiary: postDiary,
        getDiary: getDiary,
        postExercise: postExercise,
        getExercise: getExercise,
        deleteVocData: deleteVocData,
        deleteExerciseData: deleteExerciseData,
        deleteDiaryData: deleteDiaryData,
        getUser: getUser,
        data : data,
        entry: entry,
        exercise: exercise,
        user: user
    };
}]);
