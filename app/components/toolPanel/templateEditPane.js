angular.module('resumela')
.directive('templateEditPane', ['templateManager',function(templateManager){
    return {
        restrict: 'E',
        templateUrl: 'toolPanel/templateEditPane.html',
        link: function(scope, elem, attrs){

            scope.editableTemplates = templateManager.editableTemplates();
            scope.selectedTemplate = scope.editableTemplates[Object.keys(scope.editableTemplates)[0]];
        }
    }
}]);
