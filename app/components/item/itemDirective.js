angular.module('resumela')
.directive('item', [
function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<ng-include src="getTemplateUrl()" />',
    scope: {
      item : '=',
      itemType: '='
    },
    controller: ['$scope', '$templateCache',function($scope, $templateCache){
      var itemTypeToTag = function(itemType){
        var lower = itemType.toLowerCase();

        var typeToTag = {
          experience: 'job',
          skills: 'skill',
          projects: 'project',
          education: 'education',
          publications: 'publication',
          achievements: 'achievement'
        }
        return typeToTag[lower] || lower;
      }

      if($scope.item.startDate && $scope.item.endDate){
          var startM = moment($scope.item.startDate);
          var endM   = moment($scope.item.endDate);

          if(!endM.isValid()){
              endM = moment();
          }

          $scope.item.startDateStr = startM.format('MMM YYYY');
          $scope.item.endDateStr   = endM.format('MMM YYYY');


          var years = Math.round(10 * endM.diff(startM, 'years', true)) /10;
          if(years <= 1){
              $scope.item.durationStr = years + ' year';
          } else{
              $scope.item.durationStr = [years, 'years'].join(' ');
          }
          //var months = Math.round(10 * moment($scope.item.endDate).diff($scope.item.startDate, 'months', true)) /10;
          //$scope.item.durationStr = [Math.floor(months/12), 'year', months % 12, 'months'].join(' ');
      }

      $scope.getTemplateUrl = function(){
        var itemTag = itemTypeToTag($scope.itemType);

        var templateUrl = ['item/',itemTag, '.html'].join('');

        return templateUrl;
      }
    }]
  }
}]);
