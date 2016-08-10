angular.module('ngTemplateEditor', [])

/**
 * @ngdoc directive
 * @module resumela
 * @name templateEditor
 *
 * @element ANY
 * @param none
 * @description
 * Edit a template, update it to $templateCache and broadcast a templateChanged message.
 *
 * @example
 *
 ```
 */
.directive('templateEditor', ['$templateCache','$rootScope', function($templateCache, $rootScope){
    return {
        restrict: 'E',
        templateUrl: 'templateEditor/templateEditor.html',
        scope: {
            templateId: '@',
            templateModel: '<'
        },
        link: function(scope, elem, attrs){
            scope.$watch('templateId', function(newId){
                scope.templateContent = $templateCache.get(newId) || "";
            });

            scope.updateTemplate = function(){
                $templateCache.put(scope.templateId, scope.templateContent);
                $rootScope.$broadcast('templateChanged', scope.templateId);
            }
        }
    }
}]);
