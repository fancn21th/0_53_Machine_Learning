const brain = require('brain.js')
const network = new brain.NeuralNetwork()

// whether the given data
network.train([
    {input: { height: 120, weight: 35 }, output: { adult: 0 }},
    {input: { height: 130, weight: 45 }, output: { adult: 0 }},
    {input: { height: 150, weight: 70 }, output: { adult: 0 }},
    {input: { height: 160, weight: 98 }, output: { adult: 1 }},
    {input: { height: 170, weight: 120 }, output: { adult: 1 }},
    {input: { height: 175, weight: 130 }, output: { adult: 1 }},
])

const result = network.run({ height: 185, weight: 140 })

console.log(result)