angular.module('resumela')

/**
 * @ngdoc directive
 * @module ng
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

                /*
                var newElem = $compile($templateCache.get(dir.templateUrl))(scope);

                console.log('which template', dir.templateUrl);

                if(scope.$$isolateBindings && Object.keys(scope.$$isolateBindings).length > 0){
                    console.log('empty');
                    newElem.removeClass('ng-scope').addClass('ng-isolate-scope');
                } else console.log('NOT EMPTY');

                elem.replaceWith(newElem); //update DOM
                elem = newElem; //save current element for next update else elem will be invalidated
                */

                /*
                elem.replaceWith($templateCache.get(dir.templateUrl));
                console.log('elem.html1', elem.html());
                $compile(elem)(scope);

                console.log('elem.html2', elem.html());
                console.log('elem2', elem);
                */
            });
        }
    }
}]);
