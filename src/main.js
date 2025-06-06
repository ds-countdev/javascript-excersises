

const findAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    console.log(users)

    const ul = document.createElement('ul')

    users.forEach(user => {
        const li = document.createElement('li')
        li.innerText = user.name
        ul.append(li)
        console.log(user.name)
    })

    document.getElementById('root').append(ul)
}

findAllUsers()


