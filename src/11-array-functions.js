const papper = {
    prodcutName : 'papper',
    price : 200,
    quantity : 2
}

const invoices = [
{
    id : 10,
    name : 'office purchase',
    client : {
        clientName : 'diego',
        clientLastName : 'Rodriguez',
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
        },
        paper
    ],
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
},
{
    id : 11,
    name : 'computer purchase',
    client : {
        clientName : 'diego',
        clientLastName : 'Rodriguez',
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
},
{
    id : 10,
    name : 'cooking purchase',
    client : {
        clientName : 'diego',
        clientLastName : 'Rodriguez',
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
]

const inovicesName = invoices.map(invoice => {
    console.log(invoice.name)
    return invoice.name;
})

const invoicesClientName = invoices.map(invoice => {
    return invoice.client.clientName;
})

//find and bring just one result
const invoiceFind = invoices.find(invoice => invoice.id === 10)
console.log(invoiceFind)

const invoiceFindTwo = invoices.find(invoice => invoice.id > 1)
console.log(invoiceFindTwo)


const invoiceFilter = invoices.filter(invoice => invoice.id > 1)
console.log(invoiceFilter)

//incloude find an coincidence with the reference of the object
console.log("///////////////////")
const invoiceIncloude = invoices.filter(invoice => invoice.items.includes(paper))
console.log(invoiceIncloude);


const invoiceSome = invoices.some(invoice => invoice.client.clientName === 'diego')
console.log(invoiceSome)


