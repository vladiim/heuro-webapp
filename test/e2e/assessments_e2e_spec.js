'use strict';

describe('Loads assessment', function() {

  describe('click insights sub-nav', function() {
    it('loads the assessments sub-nav', function() {
      browser().navigateTo('/');
      expect(repeater('a.insights')).toBe();
    });
  });

  describe('visit assessments/insights', function() {
    beforeEach(function() {
      browser().navigateTo('/assessments/insights');
    });

    it('loads the assessments/insights url', function() {
      expect(browser().window().path()).toBe('/assessments/insights');
    });

    it('loads the insights assessment', function() {
      expect(element('#ng-view').html()).toContain('insights');
    });
  });
});