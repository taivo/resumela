angular.module('resumela', ['ngMaterial', 'ngStorage', 'ngJsonDisplay', 'ui.ace',
                            'resumela.templates', 'ngTemplateEditor'])
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

    $scope.$storage = $localStorage.$default({localRes:'samples/sample-resume.json'});
    $scope.renderLocalResume();
  }]);
