describe('Unit test for item directives', function(){
    var $compile, $scope, sampleResume;

    function getFixture(key){
        return window.__fixtures__[key];
    }

    beforeEach(module('resumela','test-templates'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $scope = _$rootScope_.$new();

        sampleResume = getFixture('samples/sampleResume');

        $scope.resume = angular.copy(sampleResume);

    }));

    it('Check <candidate>', function(){
        var elem = $compile('<candidate candidate="resume.candidate"></candidate>')($scope);

        $scope.$digest();

        var candRef = sampleResume.candidate;
        expect(elem.html()).toContain(candRef.name);
        expect(elem.html()).toContain(candRef.brief);
        expect(elem.html()).toContain(candRef.phone);
    });


    it('Check <item item-type="experience">', function(){

        $scope.itemType = "experience";
        var elem = $compile('<div><item item-type="itemType" item="resume.experience[0]" ></item></div>')($scope);

        $scope.$digest();

        var jobRef = sampleResume.experience[0];

        expect(elem.html()).toContain(jobRef.company);
        expect(elem.html()).toContain(jobRef.title);
    });
});
