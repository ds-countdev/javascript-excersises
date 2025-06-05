import filter, {invoices, findItemByName} from './data/invoices'

const invoicesArr = invoices;

console.log(invoices)

const item = findItemByName('computer')
const itemTwo = findItemByName('mouse')

console.log(`Item ${item.itemName}`)

const items = filter(10)
console.log(items)


