var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

//enable CORS for request verbs
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Handle GET method for listing all users
app.get('/users', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        res.end(data);
    });
})

//Handle GET method to get only one record
app.get('/users/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        users = JSON.parse(data);
        var user = users["user" + req.params.id]
        res.end(JSON.stringify(user));
    });
})

//Handle POST method
app.post('/users', function (req, res) {
    // First read existing users.  
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var obj = JSON.parse('[' + data + ']');
        obj.push(req.body);

        res.end(JSON.stringify(obj));
        fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });
    });
})

//Handle DELETE method
app.delete('/users/:id', function (req, res) {

    // First read existing users.  
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);

        delete data["user" + req.params.id];

        res.end(JSON.stringify(data));
        fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });
    });
})

//Handle GET method
app.put('/users/:id', function (req, res) {

    // First read existing users.  
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        //var obj = JSON.parse('[' + data + ']' );  
        data = JSON.parse(data);
        var arr = {};
        arr = req.body;

        data["user" + req.params.id] = arr[Object.keys(arr)[0]]; //  req.body;   //obj[Object.keys(obj)[0]]  

        res.end(JSON.stringify(data));
        fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });
    });
});

//handle products

//Handle GET method for listing all users
app.get('/products', function (req, res) {
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function (err, data) {
        res.end(data);
    });
})

//Handle GET method to get only one record
app.get('/products/:id', function (req, res) {
    // First read existing users.  
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function (err, data) {
        users = JSON.parse(data);
        var user = users["product" + req.params.id]
        res.end(JSON.stringify(user));
    });
})

//Handle POST method
app.post('/products', function (req, res) {
    // First read existing users.  
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function (err, data) {
        var obj = JSON.parse('[' + data + ']');
        obj.push(req.body);

        res.end(JSON.stringify(obj));
        fs.writeFile(__dirname + "/" + "products.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });
    });
})

//Handle DELETE method
app.delete('/products/:id', function (req, res) {

    // First read existing users.  
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function (err, data) {
        data = JSON.parse(data);

        delete data["product" + req.params.id];

        res.end(JSON.stringify(data));
        fs.writeFile(__dirname + "/" + "products.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });

    });
})

//Handle GET method
app.put('/products/:id', function (req, res) {

    // First read existing users.  
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function (err, data) {
        //var obj = JSON.parse('[' + data + ']' );  
        data = JSON.parse(data);
        var arr = {};
        arr = req.body;

        data["product" + req.params.id] = arr[Object.keys(arr)[0]]; //  req.body;   //obj[Object.keys(obj)[0]]  

        res.end(JSON.stringify(data));
        fs.writeFile(__dirname + "/" + "products.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });
    });
});


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})  