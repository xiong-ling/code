/**
 * forEach() 方法对数组的每个元素执行一次给定的函数。
 */

/**
 * @param {Array} array
 * @param {Function} callback(currentValue, index, array)
 * @param {Object} thisArg
 */

function forEach(array, callback, thisArg) {
    if (!Array.isArray(array)) {
        throw new Error('function forEach expect Array, but get other');
    }

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        callback.call(thisArg, value, i, array)
    }
}

/** test测试用例 */
forEach([1, 2], function (value, index) {
    console.log(value, index);
});


function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function (array) {
    forEach(array, function (entry) {
        this.sum += entry;
        ++this.count;
    }, this);
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);
// 3 === (1 + 1 + 1)
console.log(obj.sum);;
  // 16 === (2 + 5 + 9)
