/**
 * 实现一个深拷贝函数deepClone
 */

function isObject(data) {
  return typeof data === 'object' && typeof data !== null;
}


function deepClone(data, map = new WeakMap()) {
  // 基本数据类型直接返回
  if (!isObject(data)) return data;
  // 循环引用
  if(map.get(data)) return map.get(data);
  // 判断是数组还是对象
  const result = Array.isArray(data) ? [] : {};

  map.set(data, result)

  for(let key in data) {
    // 遍历循环，只遍历自身属性
    if (data.hasOwnProperty(key)) {
      result[key] = deepClone(data[key], map)
    }
  }

  return result;
}

let obj = {
  a: 1,
  b: '2',
  c: [1, 2, 3],
  d: undefined,
  e: function () {
    console.log('1');
  },
  f: {
    a: {
      b: 2
    }
  },
  g: NaN
}

obj['obj'] = obj;


const deepObj = deepClone(obj)
console.log(deepObj);
