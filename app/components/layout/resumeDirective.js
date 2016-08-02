angular.module('resumela')
.directive('resume', [
function(){
  return {
    restrict: 'A',
    replace: true,
    scope: {
      resume:'=',
      resumeLayout:'='
    },
    templateUrl: 'layout/resume.html'
  };
}]);
