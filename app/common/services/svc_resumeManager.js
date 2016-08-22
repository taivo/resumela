angular.module('resumela')
.factory('resumeManager', ['$http', '$q', '$localStorage', function($http, $q, $localStorage){

    var $storage = $localStorage.$default({localRes: 'samples/sample-resume.json'});

    var ResumeContent = function(){

    };

    var ResumeLayout = function(){
        return {}
    };

    var Resume = function(){
        return {
            meta: {},
            content: {},
            layout: {},
            hasContent: function(){
                return this.content.hasOwnProperty('candidate');
            },
            getSection: function(key){
                return this.content.sections[key];
            },
            getSectionItems: function(key){
                return this.content.sections.items;
            },
            clearAll: function(){
                this.meta = {};
                this.content = {};
                this.layout = {};
            },
            loadJson: function(jsonObj){
                this.clearAll();

                RES.meta = jsonObj.meta;
                RES.content = {candidate: jsonObj.candidate, sections: jsonObj.sections};

                RES.layout = angular.extend({name: RES.meta.layout}, RES.layouts)
            }
        }
    }

    var RES = new Resume();

    return {
        fetchCurrentResume: function(){
            if(RES.hasContent()){
                return $q(function(resolve, reject){
                    resolve(RES);
                })
            } else{
                return this.loadFromLocalFile($storage.localRes);
            }
        },
        loadFromLocalFile: function(localFilename){
            return $http.get(localFilename)
                .then(function successCallback(res) {
                    console.log('loaded local file', res.data);

                    RES.loadJson(res.data);

                    console.log(RES);
                    return RES;
                    //angular.extend(DATA.activeResume, Helper.standardize(res.data));
                    //DATA.activeResume.initActiveVersion();
                    //DATA.activeResume.getActiveLayout();
                    //DATA.hasResume = true;

                    //return DATA.activeResume;
                }, function errorCallback(res) {
                    console.error('Error loading resume from file: ' + JSON.stringify(res));
                });
        },

        activeResume: function(){
            return RES;
        }
    }
}]);


/*
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

      console.log(rawResume)

      return angular.extend({
        jobs: rawResume.experience,
        degrees: rawResume.education
      }, rawResume, {
        skills: rawResume.skills.map(skill100_to_skill10)
      });
    }
  }
  */
