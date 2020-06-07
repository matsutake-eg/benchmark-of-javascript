import bench from './bench.js'

const loopTargets = new Array(10 ** 5).fill(0).map((_, i) => String(i))

function plusFunc() {
  let ans = ''
  for (let i = 0; i < loopTargets.length; i++) {
    ans += loopTargets[i]
  }
  return ans.length >= 0
}

function joinFunc() {
  return loopTargets.join('').length >= 0
}

bench([
  { name: 'plus', func: plusFunc },
  { name: 'join', func: joinFunc },
])
