const express = require('express');
const bodyParser = require('body-parser');
const locationRoutes= require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

//app.use(bodyParser.urlencoded({extended:false}));

// app.use((req, res, next)=>{
//     res.setHeader('Content-Type', 'text/html');
//     next();
// });

// app.use((req, res, next)=>{
//     let username = req.body.username || 'Unknown';
//     res.render('index', {
//         user: username,
//         surname: 'Mykoman'
//     });
//     //res.send(`<h2>Hi ${username} </h2><form method="POST" action="/"><input type="text" name="username" /> <button type="submit">Submit</button></form>`);
// });
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-Type');
    next();
});
app.use(locationRoutes);

app.listen(3001);