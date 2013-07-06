'use strict';

describe('AssessmentListCtrl', function() {
  beforeEach(function() {
    browser().navigateTo('/');
  });

  describe('click insights sub-nav', function() {
	  beforeEach(function() {
	    element('a.insights').click();
	  });

    // it('adds the active class to insights', function() {
      // expect(element('a.insights.active')).toBe();
      // expect(element('a.web.active')).not().toBe();
    // });

  });

  describe('visit assessments/insights', function() {
    beforeEach(function() {
      browser().navigateTo('/assessments/insights');
    });

    it('loads the insights assessment', function() {
      expect(binding('assessment.name')).toBe('Insights Assessment');
    });

    it('loads the assessments/insights url', function() {
      expect(browser().window().path()).toBe('/assessments/insights');
    });
  });
});