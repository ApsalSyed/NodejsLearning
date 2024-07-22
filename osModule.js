const os = require('os')

// info about the current user

const user =os.machine()
console.log(user);

// method  returns system uptime in second

console.log(`The system uptime is ${os.uptime()} scconds`);

const currentOS=
{
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()

}
console.log(currentOS);