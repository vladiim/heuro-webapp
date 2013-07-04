'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('AssessmentListCtrl', function() {
  beforeEach(function() {
    // browser().navigateTo('../../app/index.html')
    browser().navigateTo('/index.html');
  });

  describe('click insights sub-nav', function() {
	  beforeEach(function() {
	    element('a.insights').click();
	  });

    it('loads the insights assessment', function() {
      expect(element('.assessment h1').text()).toBe('Insights Assessment');
    });
  });
});