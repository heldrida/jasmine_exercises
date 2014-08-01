/*global describe, beforeEach, afterEach, it, expect*/

'use strict';

describe('Nesting: Using `describe` blocks for nesting', function () {
    var foo = 0;

    beforeEach(function () {
        foo += 1;
    });

    afterEach(function () {
        foo += 5;
    });

    it('should equal one', function () {
        expect(foo).toEqual(1);
    });

    it('should equal 6', function () {
        expect(foo).toEqual(7);
    });

    describe('Nested inside a second describe', function () {
        var bar;
        
        beforeEach(function () {
            bar = 5;
        });

    });

    it('can reference both scopes', function () {
        expect(foo).toEqual(13);
    });

});
