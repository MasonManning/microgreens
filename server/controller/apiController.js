var bodyParser = require('body-parser')
var Microgreen = require('../models/microgreensModel')

module.exports = function (app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.get('/api/microgreens', (req, res)=>{
        Microgreen.find({}, (err, microgreen)=>{
            console.log(err)
            if(err)throw err
            res.send(microgreen)
        })
    })

    app.post('/api/microgreens', (req, res) => {
        console.log("Post   Microgreens")
        // console.log(req.body.seed)
        console.log(req.body)

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

    app.delete('/api/microgreens', (req, res) => {
        console.log("******************************Api Delete")
        Microgreen.findByIdAndDelete(req.body.id, (err)=>{
            if(err) throw err;
            res.send('success')
        })
    })
}