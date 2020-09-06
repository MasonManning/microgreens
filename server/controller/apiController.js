var bodyParser = require('body-parser')

module.exports = function(app) {
    app.get('/api/test', function(req, res){
        console.log("Server API Test!!!")
        // res.send("Test Response")
        res.send({test: "This is a test"})
    })
}