import bench from './bench.js'

const loopCount = 10 ** 5

function sringFunc() {
  let ans = ''
  for (let i = 0; i < loopCount; i++) {
    ans += String(i)
  }
  return ans.length >= 0
}

function toSringFunc() {
  let ans = ''
  for (let i = 0; i < loopCount; i++) {
    ans += i.toString()
  }
  return ans.length >= 0
}

function plusFunc() {
  let ans = ''
  for (let i = 0; i < loopCount; i++) {
    ans += '' + i
  }
  return ans.length >= 0
}

bench([
  { name: 'String', func: sringFunc },
  { name: 'toString', func: toSringFunc },
  { name: "'' + num", func: plusFunc },
])
