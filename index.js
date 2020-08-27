const http = require('http');
const port = 3000;        

const fs = require('fs');
let readhtml;

fs.readFile('index.html', 'utf-8', (err, data) => {
    readhtml = data;
});

http.createServer((req, res) => { 
    if (req.url === '/'){
        res.write('Hello World');   
        res.end();                      
    } else if (req.url === '/about'){
        console.log(req);   
        res.end();  
    } else if (req.url === '/contact'){
        res.write(readhtml);
        res.end();
    } else {
        res.write('Route not found');   
        res.end();                        
    }                
}).listen(port, () => {          
    console.log('Server at http://localhost:3000');
})