// 实现add(1)(2)(3)，函数柯里化

function curry(func, ...args) {
  const length = func.length; // 该函数所需参数个数

  if (length <= args.length) {
    // 参数够了, 执行函数
    return func.apply(null, args)
  } else {
    return function(..._args) {
      return curry(func, ...args, ..._args)
    }
  }
}

function addNumber(x,y,z){
  return x+y+z
}

// 获取经过 curry 柯里化包装后的 add 方法
const add = curry(addNumber)
console.log(add(1)(2)(3)) // 输出 6
console.log(add(1,2,3))   // 输出 6
console.log(add(1,2)(3))  // 输出 6
