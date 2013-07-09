'use strict';

describe('heuroFilters', function() {
  beforeEach(module('heuroFilters'));

  describe('capitalise', function() {
  	it('converts the first charecter of every sentence to a capital',
  		  inject(function(capitaliseFilter) {
      expect(capitaliseFilter('blah')).toBe('Blah');
      expect(capitaliseFilter('blah lolz')).toBe('Blah Lolz');
  	}));
  });
});
