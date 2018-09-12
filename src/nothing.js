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
            },
            atARandomPosition: function () {
                var maxNum = that.length - 1;
                var randomPosition = Math.round(Math.random() * maxNum);

                return this.atThePosition(randomPosition);
            },
            nowhere: function () {
                return that;
            }
        };
    }
});
