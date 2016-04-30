angular.module('resumela')
.directive('toolPanel', ['resumeManager',
function(resumeManager){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: 'templates/tool-panel.html',
    controller: ['$scope', '$localStorage', function($scope, $localStorage){
      $scope.selectedTab = 0;
      $scope.$storage = $localStorage.$default({localRes:'sample-resume.json'});
      $scope.activeResume = resumeManager.activeResume();
    }]
  };
}])
;
