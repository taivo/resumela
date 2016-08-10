angular.module('resumela')
.directive('resume', ['$compile','$templateCache',
function($compile, $templateCache){
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
