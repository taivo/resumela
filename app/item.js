angular.module('resumela')
/*.directive('item', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/item.html',
    scope: {
      itemType: '='
    }
  }
}])
*/
.directive('job', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/job.html',
    scope: {
      job: '='
    },
  };
}])
.directive('candidate', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/candidate.html',
    scope: {
      candidate: '='
    }
  };
}])
.directive('skill', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/skill.html',
    scope: {
      skill:'='
    }
  };
}])
.directive('education', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/education.html',
    scope: {
      degree:'='
    }
  };
}])
.directive('project', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/project.html',
    scope: {
      project:'='
    }
  };
}])
.directive('publication', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/publication.html',
    scope: {
      publication:'='
    }
  };
}])
.directive('achievement', [
function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/achievement.html',
    scope: {
      achievement:'='
    }
  };
}])
;
