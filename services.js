angular.module('resumela')
.factory('resumeManager', ['$http', '$q',function($http, $q){
  var DATA = {
    activeResume: {}
  };
  console.log('resumeManager');
  return {
    loadFromLocalFile: function(localFilename){
      return $http.get(localFilename)
      .then(function successCallback(res) {
        angular.extend(DATA.activeResume, res.data);
console.log('resume loadeddddd')
        return DATA.activeResume;
        }, function errorCallback(res) {
          $scope.$errors.localRes = true;
        });
      },
    /*fetchActiveResume: function(){
      var deferred = $q.defer();

      if(DATA.activeResume){
        deferred.resolve(DATA.activeResume);
      } else{

      }
    },
    */
    activeResume: function(){
      return DATA.activeResume;
    }
  }
}])
;
