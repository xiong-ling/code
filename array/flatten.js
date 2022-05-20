/**
 * flat函数用来扁平化数组，在lodash中支持指定扁平层级
 * 
 * _.flattenDepth(array, 1);
 * // => [1, 2, [3, [4]], 5]
 * _.flattenDepth(array, 2);
 * // => [1, 2, 3, [4], 5]
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */

function baseFlatten(array, depth, result = []) {
    const length = array.length;
    let index = -1;
    // 遍历每一项
    while(++index < length) {
        const value = array[index];
        if (Array.isArray(value) && depth > 0) {
            // 如果是数组并且depth > 0 就继续递归
            baseFlatten(value, depth - 1, result)
        } else {
            // 非数组，直接push
            result.push(value)
        }
    }
    return result;
}


function flatten (array, depth = Infinity) {
    // 检验数据是否合法
    if (!Array.isArray(array)) {
        throw new Error('function flatten expect Array, but get other');
    }
    const length = array.length;
    // 空数组直接返回
    if (!length) return [];
    // 扁平化数组
    return baseFlatten(array, depth)
}

console.log(flatten([1, [2, [3, [4]], 5]])); // [ 1, 2, 3, 4, 5 ]
console.log(flatten([1, [2, [3, [4]], 5]], 1)); // [ 1, 2, [ 3, [ 4 ] ], 5 ]
console.log(flatten([1, [2, [3, [4]], 5]], 2)); // [ 1, 2, 3, [ 4 ], 5 ]
