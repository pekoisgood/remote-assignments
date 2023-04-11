const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
})

app.get('/getData', (req, res) => {
    const { number } = req.query;
    if (!number){
        return res.send('<h1>Lack of Parameter</h1>')
    } else if ( +number >= 0 ) {
        let initNumber = 0;
        for (let i =0; i < +number+1; i++){
            initNumber += i;
        }
        return res.send(`<h1>${initNumber}</h1>`)
    }
    return res.send('<h1>Wrong Parameter</h1>')
})

const port = process.env.PORT || 3000;
app.listen( port, () => console.log('The server is listening on localhost:3000...'));