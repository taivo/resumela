angular.module('resumela')
.directive('section', [
function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      header: '@'
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
      var columns = [];
      var registerColumn = function(elm){
        columns.push(elm);
        return columns.length - 1;
      }
      this.getColumnType = function(elm){
        var index = registerColumn(elm);

        if($scope.columnLayout === 'single'){
          return $scope.columnLayout;
        } else{
          var colTypes = $scope.columnLayout.split('-');
          console.log('colTypes', colTypes);
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
      scope.isWideColumn = (blockCtrl.getColumnType(elm) === 'wide');
      console.log('isWide?', scope, scope.isWideColumn)
    },
  };
}])
;
