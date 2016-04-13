myApp.controller("ShowController", ["$scope", "DataService", function($scope, DataService){
    //show vocabulary

    DataService.getVocabulary();
    $scope.vocabularyEntered = DataService.data;
    //show diary
    DataService.getDiary();
    $scope.diaryEntered = DataService.entry;
    // $scope.diaryNum = $scope.diaryEntered.response.length;

    //show exercise
    DataService.getExercise();
    $scope.exerciseEnterd = DataService.exercise;
    // $scope.exerNum = $scope.exerciseEntered.response.length;
    //delete vocabulary
    $scope.deleteVoc = function(data){
      DataService.deleteVocData(data);
    }
    //delete diary
    $scope.deleteDiary = function(data){
      DataService.deleteDiaryData(data);
    }
    //delete exercise
    $scope.deleteEercise = function(data){
      DataService.deleteExerciseData(data);
    }
}]);
