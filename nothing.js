Object.defineProperty(Array.prototype, 'nothing', {
    get() {
        var that = this;

        return {
            atTheBeginning: function () {
                return that.unshift(that.shift());
            },
            atTheEnd: function () {
                return that.push(that.pop());
            },
            atThePosition: function (index) {
                return that.splice(index, 0, that.splice(index, 1)[0]);
            }
        };
    }
});
