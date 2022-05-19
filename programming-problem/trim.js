/**
 * 实现一个trim方法
 */
String.prototype._trim = function () {
    const str = this.toString();

    if (!str) return str;

    let start_idx = -1;
    let end_idx = str.length;

    for(let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            start_idx = i;
            break;
        }
    }
    for(let i = str.length - 1; i >=0 ; i--) {
        if (str[i] !== ' ') {
            end_idx = i;
            break;
        }
    }

    return str.slice(start_idx, end_idx + 1);
}

/** 测试用例 */
console.log(''._trim().length === 0) // true
console.log('12345'._trim().length === 5)  // true
console.log(' 12345'._trim().length === 5)  // true
console.log(' 12345 '._trim().length === 5)  // true
console.log(' 123 45'._trim().length === 6)  // true
console.log('12 345 '._trim().length === 6)  // true
