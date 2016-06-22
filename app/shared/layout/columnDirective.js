angular.module('resumela')
.directive('column', [
function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    require: '^block',
    scope: {},
    templateUrl: 'templates/column.html',
    link: function(scope, elm, attrs, blockCtrl) {
      var columnType = blockCtrl.getColumnType(elm);
      scope.isWide = false;
      scope.isSlim = false;
      scope.isSingle = false;
      scope.isHalf = false;
      scope.isFlex = false;

      switch(columnType){
        case 'wide': scope.isWide = true; break;
        case 'slim': scope.isSlim = true; break;
        case 'single': scope.isSingle = true; break;
        case 'fifty': scope.isHalf = true; break;
        default: scope.isFlex = true; break;
      }
    },
  };
}])
;
