/*global describe, beforeEach, afterEach, it, expect*/

'use strict';

describe('setup and teardown: before/afterEach describe scope', function () {
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

});
