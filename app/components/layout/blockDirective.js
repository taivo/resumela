angular.module('resumela')
.directive('block', [
function(){
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      columnLayout:'@',
    },
    templateUrl: 'layout/block.html',
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
}]);
