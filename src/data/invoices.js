export const invoices = [
    {
        id : 1,
        invoiceNumber : 'inv01',
        client : {
            clientName : 'diego',
            age : 31
        },
        items : [{
            itemName : 'computer',
            itemPrice : 3034,
            quantity : 4
        },
        {
            itemName : 'lightfire',
            itemPrice : 20,
            quantity : 3
        },
        {
            itemName : 'keyboard',
            itemPrice : 200,
            quantity : 3
        }
        ],
        totalPrice : function(){
            let total = 0
            this.items.forEach(item => {
                total += item.itemPrice * item.quantity
        });
        return total
        }
    }
]

const invoiceTwo = {...invoices[0]}
invoices.push(invoiceTwo)
invoices[0].id = 2
invoices[0].invoiceNumber = 'invTwo '


export const findItemByName = itemName => {
    let name = '';
    for (let i=0 ; i<invoices.length; i++){
        name = invoices[i].items.find(item => item.itemName == itemName)
    }
    return name
    
}

export const findById = invoiceId => {
    return invoices.find(invoice => invoice.id == invoiceId);      
}

export default itemPrice => {

    let invoicesArray = []
    for (let invoice of invoices){
        invoice.items.filter(item => {
           if( item.itemPrice > itemPrice) invoicesArray.push(item)
    })
        return invoicesArray
    }
    
}

export const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = findById(1)

        if (result) resolve(result)
            else reject('error that invoice doesnt exists')
    }, 2000)
})



export const promiseByfunction = invoiceId => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = findById(invoiceId)
            if(result) resolve(result)
            else reject('erro, that invoice doesnt exists')
        },2000)
    })
    return promise;
}
    


// export {
//     invoices,
//     findItemByName,
//     findByID
//     itemPrice as default
    
// }

