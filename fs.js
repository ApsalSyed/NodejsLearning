const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./fileSystem/readFileSync.txt','utf-8')
const second=readFileSync('./fileSystem/writeFileSync.txt','utf-8')

writeFileSync(`./fileSystem/Creating-using-WFS.txt `,`thi is a new text created with write file sync --------------> and this is these are the text already created ${first} <---------> ${second}`)
