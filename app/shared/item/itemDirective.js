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
    controller: ['$scope', function($scope){
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

      $scope.getTemplateUrl = function(){
        var itemTag = itemTypeToTag($scope.itemType);

        var templateUrl = ['templates/items/',itemTag, '.html'].join('');
        return templateUrl;
      }
    }]
  }
}]);
