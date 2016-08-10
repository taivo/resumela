angular.module('resumela')
.directive('templateEditPane', ['templateManager',function(templateManager){
    return {
        restrict: 'E',
        templateUrl: 'toolPanel/templateEditPane.html',
        link: function(scope, elem, attrs){
            var editableTemplates = templateManager.editableTemplates();

            scope.editableTemplates = Object.keys(editableTemplates);
            scope.selectedTemplate = scope.editableTemplates[0];
        }
    }
}]);
