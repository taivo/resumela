angular.module('resumela', ['ngMaterial', 'ngStorage', 'ngJsonDisplay'])
  .controller('ResGenController', ['$scope','$localStorage', 'resumeManager',
  function($scope, $localStorage, resumeManager) {
    $scope.$errors = {};

    $scope.renderLocalResume = function(){
      if($scope.$storage.localRes){
        resumeManager.loadFromLocalFile($scope.$storage.localRes)
        .then(function(activeResume){
          $scope.activeResume = activeResume;
        });
      }
    }


    $scope.renderInputString = function(){
      if($scope.jsonResInput){
        var resume = JSON.parse($scope.jsonResInput);
        Helper.renderResume(resume);
      }
    }

    $scope.pasteSample = function(){
      var sampleResFilename = 'sample-resume.json';
      if($scope.sampleRes){
        $scope.jsonResInput = JSON.stringify($scope.sampleRes, null, '\t');
      } else{
        $http.get(sampleResFilename
        ).then(function successCallback(res) {
            $scope.sampleRes = res.data;
            $scope.jsonResInput = JSON.stringify($scope.sampleRes, null, '\t');
          }, function errorCallback(res) {
            console.error('Unable to load ' + sampleResFilename);
            console.error(res);
          });
      }
    }

    $scope.$storage = $localStorage.$default({localRes:'sample-resume.json'});
    $scope.renderLocalResume();
  }]);
