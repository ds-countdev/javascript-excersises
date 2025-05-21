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


//we can update the json object
invoice.client.clientName = 'Alejandro Doe'
invoice.total = 3000
invoice.jakuna = 'diego'
const total = invoice.totalPrice();
const gretting = invoice.gretting();

console.log(invoice)
console.log(gretting)
console.log(`total price = ${total}`)