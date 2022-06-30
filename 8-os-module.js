const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`the system has been up ${os.uptime()} seconds `)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem()/1000/1000/1000,
    freeMemory: os.freemem()/1000/1000/1000
}

console.log(currentOS)