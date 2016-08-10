angular.module('ngTemplateEditor')

/**
 * @ngdoc directive
 * @module resumela
 * @name templateReloader
 *
 * @element ANY
 * @param none
 * @description
 * Work in conjunction with templateEditor. templateEditor broadcasts a message from $rootScope.
 * Upon receiving that message, this templateReloader recompiles the associated DOM element and its children.
 * Use sparingly.
 *
 * @example
 *
 ```
 */
.directive('templateReloader', ['$compile',function($compile){
    return {
        restrict: 'AE',
        link: function(scope, elem, attrs){
            scope.$on('templateChanged', function(){
                //
                // recompile with element's original scope,
                // not the scope that comes with this link function
                $compile(elem)(elem.scope());
            });
        }
    }
}]);
