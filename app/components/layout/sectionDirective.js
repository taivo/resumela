angular.module('resumela')
.directive('section', [
function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      header: '@',
      items: '='
    },
    templateUrl: 'layout/section.html',
  };
}]);
