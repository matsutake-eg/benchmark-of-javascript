import Benchmark from 'benchmark'

export default function bench(targets) {
  const maxNameLengh = Math.max(...targets.map((target) => target.name.length))
  const formattedTarget = targets.map((target) => {
    return {
      name: target.name.padEnd(maxNameLengh, ' '),
      func: target.func,
    }
  })

  const suite = new Benchmark.Suite()
  formattedTarget
    .reduce((acc, target) => acc.add(target.name, target.func), suite)
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function () {
      console.log('Fastest is ' + this.filter('fastest').map('name'))
    })
    .run({ async: true })
}
