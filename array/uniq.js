/**
 * 数组去重
 */

function uniq(array) {
    if (!Array.isArray(array)) {
        throw new Error('function uniq expect Array, but get other');
    }
    const result = [];

    for(let i = 0; i < array.length; i++) {
        const value = array[i];
        // includes 能识别到 NaN， indexOf 不行
        if (!result.includes(value)) {
            result.push(value)
        }
    }

    return result;
}

console.log(uniq([1, 1, 2, 3, 3, 5, 7, 2])); // [1, 2, 3, 5, 7]
console.log(uniq([1, 1, 2, 3, 3, undefined, undefined, 2])); // [1, 2, 3, undefined]
console.log(uniq([1, 1, 2, 3, 3, NaN, NaN, undefined, 2])); // [1, 2, 3, undefined]
