angular.module('resumela')
.directive('toolPanel', ['resumeManager',
function(resumeManager){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'toolPanel/toolPanel.html',
    controller: ['$scope', '$localStorage', function($scope, $localStorage){
      $scope.selectedTab = 0;
      $scope.$storage = $localStorage.$default({localRes:'sample-resume.json'});
      $scope.activeResume = resumeManager.activeResume();

      $scope.switchVersion = function(versionName){
        $scope.activeResume.switchVersion(versionName);
      }

      $scope.loadLocalResume = function(){
        if($scope.$storage.localRes){
          return resumeManager.loadFromLocalFile($scope.$storage.localRes).then(
            function(activeResume){
              $scope.activeResume = activeResume;
            }
          )
        }
      }

      $scope.loadSampleResume = function(){
        $scope.$storage.localRes = 'samples/sample-resume.json';
        $scope.loadLocalResume();
        $scope.$applyAsync();
      }

    }]
  };
}])
;
