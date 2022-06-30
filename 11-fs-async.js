const {readFile, writeFile} = require('fs')

// callbacks are called when the function is finished running
console.log('start')
readFile('./content/first.txt','utf-8', (err,res) => {
    
    if(err) {
        console.log(err)
        return;
    }

    const first = res

    readFile('./content/second.txt','utf-8', (err, res) => {
        if (err) {
            console.log(err)
            return
        }

        const second = res

        writeFile('./content/result-sync.txt',`async spaghetti: ${first}, ${second}`,(err,res) => {
            if(err) {
                console.log(err)
                return
            }

            console.log(res)
            console.log('done with this task')
        })
    })
    
})

console.log('starting next task')