Object.defineProperty(Array.prototype, 'nothing', {
	get() {
		var that = this;

		return {
			atTheBeginnig: function () {
				return that.unshift(that.shift());
			},
			atTheEnd: function () {
				return that.push(that.pop());
			}
		};
	}
});
