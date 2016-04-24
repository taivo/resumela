angular.module('resumela')
.directive('section', [
function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'templates/section.html',
    scope: {
      header: '@'
    }
  };
}])
;
