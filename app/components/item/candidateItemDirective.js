angular.module('resumela')
.directive('candidate', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'item/candidate.html',
    scope: {
      candidate: '='
    }
  };
}])
;
