const http =require('http')

const server =http.createServer((req,res)=>{
    if (req.url==='/')
    {
        res.end('welcome to home page')
    }
    if(res.url==='/about')
    {
        res.end('this is an about page')
    }
    res.end(`
        <h1>this is defaul if the page is not available</h1>
        <a href="/"> back to home</a>
        `)

})

server.listen(5000)