angular.module('resumela')
.factory('resumeManager', ['$http', '$q',function($http, $q){
  var DATA = {
    activeResume: {
      getItems: function(sectionTitle){
        var section = sectionTitle.toLowerCase();
        return this[section];
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

  return {
    loadFromLocalFile: function(localFilename){
      return $http.get(localFilename)
      .then(function successCallback(res) {
        angular.extend(DATA.activeResume, Helper.standardize(res.data));

        return DATA.activeResume;
        }, function errorCallback(res) {
          $scope.$errors.localRes = true;
        });
      },
    activeResume: function(){
      console.log('activeResume', DATA.activeResume);
      return DATA.activeResume;
    }
  }
}])
;
