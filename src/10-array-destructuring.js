const user = {
    username : 'diego',
    email : 'diegoalejandro.solano@hotmail.com',
    age : 31,
    ranking : 9
}

const products = ['tv', 'pc','keyboard', 'camera', 'mouse', 'cell phone', 'speaker']

const [camera, ...rest] = products

console.log(rest)
console.log(camera)
