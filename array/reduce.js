/**
 * reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
 * 
 * 第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。
 * 否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。
 */

/**
 * @param {Array} array
 * @param {Function} callback previousValue currentValue currentIndex 被遍历的对象
 * @param {any} initValue 初始值
 */

function reduce(array, callback, initValue) {
    // 不存在 initValue 时，去第一项，否则就是 initValue
    let previousValue = initValue != undefined ? initValue : array[0];
    // 遍历开始索引
    let index = initValue != undefined ? 0 : 1;
    // 遍历次数，没有 initValue 时，第一项 直接被赋值了，不需要遍历
    const length = array.length;

    for (let i = index; i < length; i++) {
        const currentValue = array[i];
        previousValue = callback(previousValue, currentValue, i, array)
    }

    return previousValue;
}

/** 测试用例 */
let sum = reduce([4, 0, 1, 2, 3], function (previousValue, currentValue) {
    return previousValue + currentValue
}, 0)
// sum is 6
console.log(sum);

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = reduce(names, function (allNames, name) {
    if (name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
console.log(countedNames);
