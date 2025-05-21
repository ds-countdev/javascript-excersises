const fruitsArr = ['apple','banana','orange','grape','mango']
fruitsArr.push('pineapple','wathermelon')
const productsArr = ['tv','keyboard','mouse','fridge','speeker',...fruitsArr]

const market =  [...fruitsArr, ...productsArr, 'lettuce' , 'potato']

for (let obj of market) console.log(obj)

