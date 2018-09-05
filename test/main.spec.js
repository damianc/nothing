var nothing = require('../src/nothing');
var [should] = [require('should'), require('should-spies')];

describe('# OBJECT OPERATIONS', function () {
	it('should do nothing at the beginning of an array', function () {
		var arrOriginal = [1, 2, 3, 4];
		var arrCopy = Array.from(arrOriginal);
		
		arrCopy.nothing.atTheBeginning();
		arrCopy.should.be.eql(arrOriginal);
	});

	it('should do nothing in the middle of an array', function () {
		var arrOriginal = [1, 2, 3, 4];
		var arrCopy = Array.from(arrOriginal);
		
		arrCopy.nothing.atThePosition(Math.floor(arrCopy.length / 2));
		arrCopy.should.be.eql(arrOriginal);
	});

	it('should do nothing at the end of an array', function () {
		var arrOriginal = [1, 2, 3, 4];
		var arrCopy = Array.from(arrOriginal);
		
		arrCopy.nothing.atTheEnd();
		arrCopy.should.be.eql(arrOriginal);
	});
});

describe('# INTERNAL OPERATIONS', function () {
	it('should call unshift() and shift() methods of the Array.prototype object', function () {
		var arr = [1, 2, 3, 4];
		var spyUnshift = should.spy.on(arr, 'unshift');
		var spyShift = should.spy.on(arr, 'shift');

		arr.nothing.atTheBeginning();

		spyUnshift.should.be.calledWith(1).and.be.calledOn(arr);
		spyShift.should.be.calledOn(arr);
	});

	it('should call splice() method of the Array.prototype object', function () {
		var arr = [1, 2, 3, 4];
		var spySplice = should.spy.on(arr, 'splice');

		arr.nothing.atThePosition(2);

		spySplice.should.be.calledOn(arr);
		spySplice.should.have.callCount(2);
	});

	it('should call push() and pop() methods of the Array.prototype object', function () {
		var arr = [1, 2, 3, 4];
		var spyPush = should.spy.on(arr, 'push');
		var spyPop = should.spy.on(arr, 'pop');

		arr.nothing.atTheEnd();

		spyPush.should.be.calledWith(4).and.be.calledOn(arr);
		spyPop.should.be.calledOn(arr);
	});
});
