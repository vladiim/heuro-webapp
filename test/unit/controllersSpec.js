'use strict';

describe('AssessmentListCtrl', function() {
  var scope, ctrl, $httpBackend;

  var phoneData = [{ "completion": 0, "id": "insights", "name": "insights" }];

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/data/assessments.json').respond(phoneData);

    scope = $rootScope.$new();
    ctrl  = $controller(AssessmentListCtrl, { $scope: scope });
  }));

  it('creates an "assessments" model with data from xhr req', function() {
    expect(scope.assessments).toBeUndefined();
    $httpBackend.flush();

    expect(scope.assessments).toEqual(phoneData);
  });
});