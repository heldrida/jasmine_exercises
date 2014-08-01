/*global describe, beforeEach, afterEach, it, expect*/

'use strict';

describe('Track calls and arguments: How to use spies', function () {
    var foo, bar = null;

    beforeEach(function () {
        foo = {
	   setBar: function (value) {
	       bar = value;
	   }
	};

        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it('tracks that the spy was called', function () {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it('tracks all args of its calls', function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it('stops all execution on a function', function () {
        expect(bar).toBeNull();
    });

});