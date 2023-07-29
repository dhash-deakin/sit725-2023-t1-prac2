let express = require('express');
let app = express();
let portnumber = process.env.port || 3000;

app.use(express.static(__dirname+'/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.listen(portnumber, ()=>{
    console.log("Server Started");
}); // this is the logic that will fired upon server start
