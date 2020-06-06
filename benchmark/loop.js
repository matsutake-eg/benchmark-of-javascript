import bench from './bench.js'

const targets = new Array(10 ** 5).fill(0).map((_, i) => i)

function forFunc() {
  let ans = 0
  for (let i = 0; i < targets.length; i++) {
    ans += targets[i]
  }
  return ans >= 0
}

function forEachFunc() {
  let ans = 0
  targets.forEach((v) => (ans += v))
  return ans >= 0
}

function forOfFunc() {
  let ans = 0
  for (const v of targets) {
    ans += v
  }
  return ans >= 0
}

function reduceFunc() {
  return targets.reduce((sum, v) => (sum += v), 0) >= 0
}

bench([
  { name: 'for', func: forFunc },
  { name: 'forEach', func: forEachFunc },
  { name: 'forOf', func: forOfFunc },
  { name: 'reduce', func: reduceFunc },
])
