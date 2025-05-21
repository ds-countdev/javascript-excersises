const user = {
    username : 'diego',
    email : 'diegoalejandro.solano@hotmail.com',
    age : 31,
    ranking : 9
}

const {username, email} = user 

console.log(`${username} has an email ${email}`)

const detail = ({username, email}) => console.log(`${username} and his email ${email}`)

detail(user)
