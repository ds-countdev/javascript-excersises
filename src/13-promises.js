import {promiseByfunction, promise} from './data/invoices'

promise.then(console.log).catch(console.warn)

promiseByfunction(1).then(console.log).catch(console.log)





