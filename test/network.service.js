const express = require('express')
const app = express()


const networkServer = function(){
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        if (/Safari/gi.test(req.headers['user-agent'])) {
            res.header("Access-Control-Allow-Headers", 'keepObserver-reportAjax,authorization,Origin, X-Requested-With, Content-Type, Accept');
        } else {
            res.header("Access-Control-Allow-Headers", '*');
        }
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
        res.header("X-Powered-By", ' 3.2.1')
        if (req.method === 'OPTIONS') {
            res.status(200).send('');
        } else {
            next();
        }
    });

    app.get('/report', (req, res) => {
        return res.send('success')
    })
    
    app.get('/timeout', (req, res) => {
        setTimeout(()=>{
            return res.send('timeout')
        },40000)
    })

    app.get('/404', (req, res) => {
        res.status(404).send('');
    })

    app.get('/500', (req, res) => {
        res.status(500).send('');
    })
    
    app.listen(9003, () => console.log('network serive is http://localhost:9003'))
}


module.exports = networkServer