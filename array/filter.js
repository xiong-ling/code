/**
 * filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
 */

/**
 * @param {Array} array
 * @param {Function} callback(currentValue, index, array)
 * @param {Object} thisArg
 */

function filter(array, callback, thisArg) {
    if (!Array.isArray(array)) {
        throw new Error('function filter expect Array, but get other');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('callback is not a function')
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        const value = callback.call(thisArg, array[i], i, array);
        if (value) {
            result.push(array[i]);
        }
    }
    return result;
}

/** 测试用例 */

function isBigEnough(element) {
    return element >= 10;
}
// filtered is [12, 130, 44]
console.log(filter([12, 5, 8, 130, 44], isBigEnough));

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
    return filter(fruits, (el) =>
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

