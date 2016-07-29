describe("resumeManagerService", function() {
   var resumeManagerService, $httpBackend;
   var sampleResumeFixture = 'samples/sampleResume';

   var getFixture = function(key){
       return window.__fixtures__[key];
   }

   beforeEach(module('resumela'));

   beforeEach(function(){
      inject(function(resumeManager, _$httpBackend_){
         resumeManagerService = resumeManager;
         $httpBackend = _$httpBackend_;

         $httpBackend.whenGET(sampleResumeFixture)
                     .respond(200, getFixture(sampleResumeFixture));
     });
   });

   it("loads a local resume into activeResume", function(done) {
      resumeManagerService.loadFromLocalFile(sampleResumeFixture).then(
         function(res){
            var activeResume = resumeManagerService.activeResume();
            expect(activeResume.jobs.length, "boo").toBeGreaterThan(0, "minimum job entries");
            expect(activeResume.candidate).toBeDefined("must have candidate section");
            done();
         },
         function(){
            done.fail(JSON.stringify(arguments));
         }
      );

      $httpBackend.flush();
   });

});
