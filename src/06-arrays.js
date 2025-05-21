const names = ['diego', 'alejandro', 'noemi', 'sara']
names.push('diego','mario')

let value = names.length > 0 ? true : false

if (value) console.log(names)

names.forEach(name => console.log(name))

console.log('/////////////////////////////')
for (let name of names) console.log(name)


console.log('/////////////////////////////')
for (let i = 0 ; i < names.length; i++) console.log(names[i])