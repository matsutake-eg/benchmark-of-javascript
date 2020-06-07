import bench from './bench.js'

const loopTargets = new Array(10 ** 5).fill(0).map((_, i) => String(i))

function numberFunc() {
  let ans = 0
  for (let i = 0; i < loopTargets.length; i++) {
    ans += Number(loopTargets[i])
  }
  return ans >= 0
}

function parseIntFunc() {
  let ans = 0
  for (let i = 0; i < loopTargets.length; i++) {
    ans += parseInt(loopTargets[i], 10)
  }
  return ans >= 0
}

function minusZeroFunc() {
  let ans = 0
  for (let i = 0; i < loopTargets.length; i++) {
    ans += loopTargets[i] - 0
  }
  return ans >= 0
}

function verticalZeroFunc() {
  let ans = 0
  for (let i = 0; i < loopTargets.length; i++) {
    ans += loopTargets[i] | 0
  }
  return ans >= 0
}

function plusFunc() {
  let ans = 0
  for (let i = 0; i < loopTargets.length; i++) {
    ans += +loopTargets[i]
  }
  return ans >= 0
}

bench([
  { name: 'Number', func: numberFunc },
  { name: 'parseInt', func: parseIntFunc },
  { name: 'str - 0', func: minusZeroFunc },
  { name: 'str | 0', func: verticalZeroFunc },
  { name: '+str', func: plusFunc },
])
