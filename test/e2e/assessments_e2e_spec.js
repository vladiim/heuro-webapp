'use strict';

describe('Loads assessment', function() {

  describe('click assessmentss sub-nav', function() {
    it('loads the assessments sub-nav', function() {
      browser().navigateTo('/');
      expect(repeater('a.insights')).toBe();
    });
  });

  var insightsData = {
    "name": "insights",
    "categories": [
      { "name": "category 1", "topics": [
          { "name": "topic 1", "ranking": { "0": "Don't know", "1": "Bad nav", "2": "Something else", "3": "A different answer", "4": "Lolz. Smart" } },
          { "name": "new topic 2", "ranking": { "0": "Don't know", "1": "Bad nav", "2": "Something else", "3": "A different answer", "4": "Lolz. Smart" } } ] } ] }

  var heuroTest = angular.module('heuroTest', ['heuro', 'ngMockE2E']);

  heuroTest.run(function($httpBackend) {
    $httpBackend.whenGET('/assessments/insights.json').respond(insightsData);
  });


  describe('visit assessments/insights', function() {
    beforeEach(function() {
      browser().navigateTo('/assessments/insights');
    });

    it('loads the assessments/insights url', function() {
      expect(browser().window().path()).toBe('/assessments/insights');
    });

    it('loads the insights assessment', function() {
      expect(element('[ng-view] h1').html()).toContain('Insights');
    });

    it('loads the first insights category', function() {
      expect(element('[ng-view] .category-name').html()).toContain('Category 1');
    });

    it('loads the first insights topic', function() {
      expect(element('[ng-view] .topic-name').html()).toContain('Topic 1');
    });

    describe('click ranking 1', function() {
      beforeEach(function() {
        element('ul.rankings li:first').click();
      });

      it('loads topic 2', function() {
        expect(element('[ng-view] .topic-name').html()).toContain('New Topic 2');
      });
    });
  });
});