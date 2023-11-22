import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456' , 10),
        isAdmin: true
    },
    {
        name: 'Inam',
        email: 'inam@example.com',
        password: bcrypt.hashSync('123456' , 10),
    },
    {
        name: 'Zainab',
        email: 'zainab@example.com',
        password: bcrypt.hashSync('123456' , 10),
    },
]

export default  users