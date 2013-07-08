'use strict';

// var insightsData = {
//   "name": "insights",
//   "categories": {
//     "name": "category 1",
//     "topics": {
//       "name": "topic 1",
//       "rankings": {
//         "0": "Don't know",
//         "1": "Bad nav",
//         "2": "Something else",
//         "3": "A different answer",
//         "4": "Lolz. Smart"          
//       }
//     }
//   }
// }

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
      expect(element('[ng-view] h1').html()).toContain('Insights');
    });

    it('loads the first insights category', function() {
      // expect(element('[ng-view] .categories').html()).toContain('category 1');
      // expect(binding('assessment.categories')).toMatch(/insights/);
    });
  });
});