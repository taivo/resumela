angular.module('resumela')
.directive('templateEditPane', [function(){
    return {
        restrict: 'E',
        templateUrl: 'toolPanel/templateEditPane.html',
        link: function(scope, elem, attrs){
            console.log('scope', scope);
            scope.templateNames = ['job','education','skill'];
            scope.templateName = scope.templateNames[0];
        }
    }
}]);
