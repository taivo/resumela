angular.module('resumela')
.directive('candidate', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/candidate.html',
    scope: {
      candidate: '='
    }
  };
}])
;
