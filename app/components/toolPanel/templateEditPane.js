angular.module('resumela')
.directive('templateEditPane', ['templateManager','resumeManager', function(templateManager, resumeManager){
    return {
        restrict: 'E',
        templateUrl: 'toolPanel/templateEditPane.html',
        link: function(scope, elem, attrs){

            scope.editableTemplates = templateManager.editableTemplates();
            scope.selectedTemplate = scope.editableTemplates[0];

            scope.$watch('selectedTemplate', function(selected){
                resumeManager.fetchCurrentResume()
                    .then(function(resume){
                        console.log('RRRRR', resume);
                        scope.templateModel = resume.getItems(selected.name)[0];
                        scope.$applyAsync();
                    });
            });
        }
    }
}]);
