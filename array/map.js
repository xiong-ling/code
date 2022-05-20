/**
 * map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成
 */

/**
 * @param {Array} array
 * @param {Function} callback(currentValue, index, array)
 * @param {Object} thisArg
 */

function map(array, callback, thisArg) {
    if (!Array.isArray(array)) {
        throw new Error('function map expect Array, but get other');
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        const value = callback.call(thisArg, array[i], i, array);
        result.push(value)
    }
    return result;
}

var numbers = [1, 4, 9];
var roots = map(numbers, Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
console.log(roots, numbers);

console.log(map([1, 2, 3], function(value, index, array) {
    console.log(value, index, array);
    return value * 2;
}));
