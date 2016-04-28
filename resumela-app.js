angular.module('resumela', ['ngMaterial', 'ngStorage'])
  .controller('ResGenController', ['$scope','$http','$localStorage',
  function($scope, $http, $localStorage) {
    var Helper = {
      renderResume: function(resume){
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


        $scope.activeResume = {
          candidate: $scope.candidate,
          jobs: $scope.jobs,
          skills: $scope.skills,
          degrees: $scope.degrees,
          projects: $scope.projects,
          publications: $scope.publications,
          achievements: $scope.achievements
        }
      }
    }
    $scope.$errors = {};

    $scope.renderLocalResume = function(){
      if($scope.$storage.localRes){
        $http.get($scope.$storage.localRes
        ).then(function successCallback(res) {
          Helper.renderResume(res.data);
          $scope.$errors.localRes = false;
          }, function errorCallback(res) {
            $scope.$errors.localRes = true;
          });
      }
    }

    $scope.renderSample = function(){
      $scope.$storage.localRes = 'sample-resume.json';
      $scope.renderLocalResume();
    }

    $scope.renderInputString = function(){
      if($scope.jsonResInput){
        var resume = JSON.parse($scope.jsonResInput);
        Helper.renderResume(resume);
      }
    }

    $scope.pasteSample = function(){
      var sampleResFilename = 'sample-resume.json';
      if($scope.sampleRes){
        $scope.jsonResInput = JSON.stringify($scope.sampleRes, null, '\t');
      } else{
        $http.get(sampleResFilename
        ).then(function successCallback(res) {
            $scope.sampleRes = res.data;
            $scope.jsonResInput = JSON.stringify($scope.sampleRes, null, '\t');
          }, function errorCallback(res) {
            console.error('Unable to load ' + sampleResFilename);
            console.error(res);
          });
      }
    }

    $scope.$storage = $localStorage.$default({localRes:'sample-resume.json'});
    $scope.renderLocalResume();

    $scope.selTab = 2;
    $scope.onSel = function(){
      console.log('onSel', arguments);
    }
    $scope.$watch('selTab', function(){
      console.log('selTab changed', arguments);
    })
  }]);
