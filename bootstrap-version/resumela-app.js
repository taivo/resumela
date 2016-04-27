angular.module('resumela', [])
  .controller('ResGenController', ['$scope','$http',
  function($scope, $http) {
    $http.get('../user-data/taivo-resume.json'
    ).then(function successCallback(res) {
        var resume = res.data;
        $scope.candidate = resume.candidate;
        $scope.jobs = resume.experience;
        $scope.skills = resume.skills.map(function(sk){
          //
          // skill score is 1--10 in resume.
          // multiply 10 for use with slider
          return angular.extend({}, sk, {score: 10 * Number(sk.score)});
        });

        $scope.degrees = resume.education;
        $scope.projects = resume.projects;
        $scope.publications = resume.publications;
        $scope.achievements = resume.achievements;

      }, function errorCallback(res) {
        console.error(res);
      });
  }]);
