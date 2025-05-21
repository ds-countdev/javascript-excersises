const invoice = {
    id : 10,
    name : 'office purchase',
    client : {
        id: 1,
        clientName : 'diego',
        clientLastName : 'Rodriguez',
        age : 31
    },
    items : [
        {
            productName : 'keyboard',
            price : 300,
            quantity : 1
        },
        {
            productName: 'mouse',
            price : 500,
            quantity : 2
        },
        {
            productName : 'monitor',
            price : 1289,
            quantity : 2
        }
    ],
    date : new Date(),
    total : 1000,
    gretting : function () {
        return `hello ${this.client.clientName}`
    },
    totalPrice : function (){
        let total = 0;
        this.items.forEach(item => {
            console.log(`${item.productName} = ${item.price * item.quantity}`)
            total = total + item.price * item.quantity
        })
        return total;
    }
}

// do a copy of the same instance
//const invoiceTwo = invoice;

//make a diferent instance
const invoiceTwo = {...invoice}
const result = invoice === invoice;

if(result) console.log(result)
    else console.log('no son iguales')


invoice.id = 30;
invoiceTwo.id = 20;

console.log(invoice.id)
console.log(invoiceTwo.id)