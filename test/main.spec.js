var expect = require('expect');
var nothing = require('../nothing');

describe('# OBJECT OPERATIONS', function () {
	it('should do nothing at the beginning of an array', function () {
		var arrOriginal = [1, 2, 3, 4];
		var arrCopy = Array.from(arrOriginal);
		
		arrCopy.nothing.atTheBeginning();
		expect(arrCopy.join('')).toEqual(arrOriginal.join(''));
	});

	it('should do nothing in the middle of an array', function () {
		var arrOriginal = [1, 2, 3, 4];
		var arrCopy = Array.from(arrOriginal);
		
		arrCopy.nothing.atThePosition(Math.floor(arrCopy.length / 2));
		expect(arrCopy.join('')).toEqual(arrOriginal.join(''));
	});

	it('should do nothing at the end of an array', function () {
		var arrOriginal = [1, 2, 3, 4];
		var arrCopy = Array.from(arrOriginal);
		
		arrCopy.nothing.atTheEnd();
		expect(arrCopy.join('')).toEqual(arrOriginal.join(''));
	});
});
