const a = []

const b = {}

console.log(typeof a, typeof b)

console.log(Array.isArray(a))

const c = {a: 1}

const d = {a: 1}

console.log(Object.prototype.toString.call(a))
console.log(Object.prototype.toString.call(b))
console.log(Object.prototype.toString.call(null))

