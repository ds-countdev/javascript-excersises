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

const validate = () => {
    
}

if (invoice.company?.name) console.log(invoice.company.name)
    else console.log('no viene')

if (invoice.company?.client?.name) console.log(invoice.company.client.name)
    else console.log('no viene')

