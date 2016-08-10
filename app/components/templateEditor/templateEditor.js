angular.module('resumela')
.directive('templateEditor', ['$templateCache','$rootScope', function($templateCache, $rootScope){
    return {
        restrict: 'E',
        templateUrl: 'templateEditor/templateEditor.html',
        scope: {
            templateId: '@',
            sampleData: '<'
        },
        link: function(scope, elem, attrs){
            console.log('template cache', $templateCache);

            scope.templateContent = $templateCache.get(scope.templateId) || "";

            scope.updateTemplate = function(){
                $templateCache.put(scope.templateId, scope.templateContent);
                console.log('templateCache entry updated', scope.templateId);
                $rootScope.$broadcast('templateChanged');
            }
        }
    }
}]);
