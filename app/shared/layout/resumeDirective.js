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
    templateUrl: 'templates/resume.html'
  };
}]);
