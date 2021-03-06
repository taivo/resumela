angular.module('resumela')
.factory('resumeManager', ['$http', '$q', '$localStorage', function($http, $q, $localStorage){
  var DATA = {
    hasResume: false,
    activeResume: {
      getItems: function(sectionTitle){
        var section = sectionTitle.toLowerCase();
        return this[section] || this[section + 's'];
      },
      _activeVersion: null,
      initActiveVersion: function(){
        this._activeVersion = null;
      },
      getActiveVersion: function(){
        var self = this;
        if(!self._activeVersion){
          var versionNames = Object.keys(self.versions);

          //
          // find default version specified by resume
          versionNames.forEach(function(versionName){
            if(self.versions[versionName].default){
              self._activeVersion = versionName;
            }
          });

          //
          // if no default version specified, take the first one
          if(!self._activeVersion){
            self._activeVersion = versionNames[0];
          }
        }
        return self.versions[self._activeVersion];
      },
      getActiveLayout: function(){
        return this.getActiveVersion().layout;
      },
      switchVersion: function(versionName){
        if(this.versions[versionName]){
          this.getActiveVersion().default = false;

          this.versions[versionName].default = true;
          this._activeVersion = versionName;
        }
      }
    }
  };

  var Helper = {
    standardize: function(rawResume){
      var skill100_to_skill10 = function(sk){
        //
        // skill score is 1--10 in resume. multiply 10 for use with slider
        return angular.extend({}, sk, {score: 10 * Number(sk.score)});
      };

      return angular.extend({
        jobs: rawResume.experience,
        degrees: rawResume.education
      }, rawResume, {
        skills: rawResume.skills.map(skill100_to_skill10)
      });
    }
  }

  var $storage = $localStorage.$default({localRes: 'samples/sample-resume.json'});
  return {
      fetchCurrentResume: function(){
          if(DATA.hasResume){
              return $q(function(resolve, reject){
                  resolve(DATA.activeResume);
              })
          } else{
              return this.loadFromLocalFile($storage.localRes);
          }
      },
      loadFromLocalFile: function(localFilename){
          return $http.get(localFilename)
            .then(function successCallback(res) {
                var data = {}
                if(res.data.meta){
                    //newer resume format
                    data.candidate = res.data.candidate;

                    var sections = res.data.sections;

                    data.experience = sections.experience.items;
                    data.skills = sections.skill.items;
                    data.projects = sections.project.items;
                    data.education = sections.education.items;
                    data.achievements = sections.achievement.items;
                    data.publications = sections.publication.items;

                    data.versions = res.data.layouts;
                    
                    console.log('data', data);
                } else{
                    data = res.data;
                }

                angular.extend(DATA.activeResume, Helper.standardize(data));

                DATA.activeResume.initActiveVersion();
                DATA.activeResume.getActiveLayout();
                DATA.hasResume = true;

                return DATA.activeResume;
            }, function errorCallback(res) {
                console.error('error: ' + JSON.stringify(res));
            });
      },

      activeResume: function(){
          return DATA.activeResume;
      }
  }
}])
;
