angular.module('resumela')
.directive('toolPanel', [
function(){
  return {
    restrict: 'E',
    //replace: true,
    scope: {},
    templateUrl: 'templates/tool-panel.html',
    link: function(scope, elm, attrs){
      scope.selectedTab = 1;
      console.log('selected tab', scope.selectedTab);

    }
  };
}])
;
