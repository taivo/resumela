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
}])
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
    templateUrl: 'templates/section.html',
  };
}])
.directive('block', [
function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      columnLayout:'@',
    },
    templateUrl: 'templates/block.html',
    controller: ['$scope', function($scope) {
      $scope.isSingleColumn = ($scope.columnLayout === 'single' || $scope.columnLayout === 'full');

      var columns = [];
      var registerColumn = function(elm){
        columns.push(elm);
        return columns.length - 1;
      }
      this.getColumnType = function(elm){
        var index = registerColumn(elm);

        if($scope.isSingleColumn){
          return 'single';
        } else{
          var colTypes = $scope.columnLayout.split('-');
          return colTypes[index];
        }
      }

    }]
  };
}])
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
