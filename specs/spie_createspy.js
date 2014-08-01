'use strict';

describe('sp when created manually', function () {
    var whatAmI;
    
    beforeEach(function () {
        whatAmI = jasmine.createSpy('whatAmI');
        whatAmI('I', 'am', 'a', 'spy');
    });

    it('is named, which helps in error reporting', function () {
        expect(whatAmI.and.identity()).toEqual('whatAmI');
    });

    it('tracks that the spy was called', function () {
        expect(whatAmI).toHaveBeenCalled();
    });

    it('tracks all arguments of its calls', function () {
        expect(whatAmI).toHaveBeenCalledWith('I', 'am', 'a', 'spy');
    });

    it('access recent call', function () {
        expect(whatAmI.calls.mostRecent().args[0]).toEqual('I');
    });

});
