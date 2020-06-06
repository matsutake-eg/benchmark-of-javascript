import bench from './bench.js'

const loopTargets = new Array(10 ** 5).fill(0).map((_, i) => i)

function forFunc() {
  let ans = 0
  for (let i = 0; i < loopTargets.length; i++) {
    ans += loopTargets[i]
  }
  return ans >= 0
}

function forEachFunc() {
  let ans = 0
  loopTargets.forEach((v) => (ans += v))
  return ans >= 0
}

function forOfFunc() {
  let ans = 0
  for (const v of loopTargets) {
    ans += v
  }
  return ans >= 0
}

function reduceFunc() {
  return loopTargets.reduce((sum, v) => (sum += v), 0) >= 0
}

bench([
  { name: 'for', func: forFunc },
  { name: 'forEach', func: forEachFunc },
  { name: 'forOf', func: forOfFunc },
  { name: 'reduce', func: reduceFunc },
])
