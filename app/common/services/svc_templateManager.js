angular.module('resumela')
.factory('templateManager', [function(){
    var templateMap = {
        job: 'item/job.html',
        skill: 'item/skill.html',
        project: 'item/project.html',
        education: 'item/education.html'
    };

    var templateList = Object.keys(templateMap).map(function(name){
        return {name: name, templateId: templateMap[name]};
    });

    var templateMan = {
        editableTemplates: function(){
            return templateList;
        }
    };
    return templateMan;
}])
