var bodyParser = require('body-parser')
var Microgreen = require('../models/microgreensModel')

module.exports = function (app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.get('/api/test', function (req, res) {
        console.log("Server API Test!!!")
        // res.send("Test Response")
        Microgreen.find({}, function (err, crop) {
            if (err) throw err;
            res.send(crop)
        })
    })

    app.post('/api/microgreens', (req, res) => {
        if (req.body.id) {
            Microgreen.findByIdAndUpdate(req.body.id, {
                seed: req.body.seed,
                seedQty: req.body.seedQty,
                soilType: req.body.soilType,
                stage: req.body.stage,
                notes: req.body.notes
            }, (err, microgreen) => {
                if (err) throw err;
                res.send("success")
            })
        } else {
            var newMicrogreen = Microgreen({
                seed: req.body.seed,
                seedQty: req.body.seedQty,
                soilType: req.body.soilType,
                stage: req.body.stage,
                notes: req.body.notes
            })
            newMicrogreen.save((err) => {
                if (err) throw err;
                res.send('success')
                // res.status(200).json({ id: newMicrogreen._id });
            })
        }
    })

    app.delete('api/microgreens', (req, res) => {
        Microgreen.findByIdAndDelete(req.body.id, (err)=>{
            if(err) throw err;
            res.send('success')
        })
    })
}