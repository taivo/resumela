describe("resumeManagerService", function() {
   var resumeManagerService, $httpBackend;

   var sampleResumeFile = '/base/assets/samples/sample-resume.json';

   function syncGetFile(method, url, data, headers, params){
      var req = new XMLHttpRequest();
      req.open('GET', url, false);
      req.send(null);
      return [req.status, req.response];
   }

   beforeEach(function(){
      module('resumela');
      inject(function(resumeManager, _$httpBackend_){
         resumeManagerService = resumeManager;
         $httpBackend = _$httpBackend_;

         $httpBackend.whenGET(sampleResumeFile).respond(syncGetFile);
      })
   });

   it("loads a local resume into activeResume", function(done) {
      resumeManagerService.loadFromLocalFile(sampleResumeFile).then(
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
