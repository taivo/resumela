angular.module('resumela')
.factory('templateManager', [function(){
    var templateMan = {
        editableTemplates: function(){
            return {
                job: 'item/job.html',
                skill: 'item/skill.html',
                project: 'item/project.html',
                education: 'item/education.html'
            }
        }
    };
    return templateMan;
}])
