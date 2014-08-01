/*global describe, beforeEach, afterEach, it, expect*/

'use strict';

describe('setup and teardown: before/AfterEach `this` keyword', function () {

    beforeEach(function () {
        this.foo = 0;
        this.foo += 1;
    });

    afterEach(function () {
        this.foo += 5;
    });

    it('should equal one', function () {
        expect(this.foo).toEqual(1);
    });

    it('should equal 1', function () {
        expect(this.foo).toEqual(1);
    });

});
