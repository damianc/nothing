Object.defineProperty(Array.prototype, 'nothing', {
    get() {
        var that = this;

        return {
            atTheBeginning() {
                return that.unshift(that.shift());
            },

            atTheEnd() {
                return that.push(that.pop());
            },

            atThePosition(index) {
                return that.splice(index, 0, that.splice(index, 1)[0]);
            },

            atARandomPosition() {
                var maxNum = that.length - 1;
                var randomPosition = Math.round(Math.random() * maxNum);

                return this.atThePosition(randomPosition);
            },
            
            nowhere() {
                return that;
            },

            withTheFirstItem() {
                return this.atThePosition(0);
            }
        };
    }
});
