myApp.controller("ShowController", ["$scope", "DataService", function($scope, DataService){
    //show vocabulary
    DataService.getVocabulary();
    $scope.vocabularyEntered = DataService.data;
    //show diary
    DataService.getDiary();
    $scope.diaryEntered = DataService.entry;
    //show exercise
    DataService.getExercise();
    $scope.exerciseEnterd = DataService.exercise;
    //delete vocabulary
    $scope.deleteVoc = function(data){
      DataService.deleteVocData(data);
      console.log("meow");
    }
    //delete diary
    $scope.deleteDiary = function(data){
      DataService.deleteDiaryData(data);
      console.log("meow");
    }
    //delete exercise
    $scope.deleteEercise = function(data){
      DataService.deleteExerciseData(data);
      console.log("meow");
    }
}]);
