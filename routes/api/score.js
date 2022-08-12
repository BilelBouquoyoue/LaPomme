const express = require('express');
const router = express.Router();
const config = require('config');
const Client = require('../../models/Score');
var bodyParser = require('body-parser');


// @route    POST api/clients
// @desc     Register Client
// @access   Public
router.post('/', 
    async(req, res) => {

        var telephone = req.body.telephone
        var total = req.body.total

    try {
        //See if client exists
        let score2 = await Score.findOne({ telephone });
 
        

        if (score2) {
            let score = await Score.findOneAndUpdate({telephone: req.body.telephone}, { total: score2.total + parseInt(req.body.total)}, { new: true });   
            return res.json(score);
        }

        else{
        score = new Score({
            telephone,
            total,
        });

        await score.save();

    } 
}
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    return res.json(Score);
    }

);


router.post('/change/:tel', 
    async(req, res) => {

        try {
            let score = await Score.findOneAndUpdate({telephone: req.params.tel}, { telephone: req.body.tel}, { new: true });   
            return res.json(score);        
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
        return res.json(Score);
        }

);


router.post('/glace/:tel', 
    async(req, res) => {
        let score2 = await Score.findOne({ telephone:req.params.tel });

        try {
            let score = await Score.findOneAndUpdate({telephone: req.params.tel}, { total: score2.total - 160}, { new: true });   
            return res.json(score);        
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
        return res.json(Score);
        }

);

router.post('/vin/:tel', 
    async(req, res) => {
        let score2 = await Score.findOne({ telephone:req.params.tel });

        try {
            let score = await Score.findOneAndUpdate({telephone: req.params.tel}, { total: score2.total - 140}, { new: true });   
            return res.json(score);        
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
        return res.json(Score);
        }

);

router.post('/promo/:tel', 
    async(req, res) => {
        let score2 = await Score.findOne({ telephone:req.params.tel });

        try {
            let score = await Score.findOneAndUpdate({telephone: req.params.tel}, { total: score2.total - 200}, { new: true });   
            return res.json(score);        
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
        return res.json(Score);
        }

);



router.get('/:tel', async(req, res) => {
    try {
        const score = await Score.findOne({telephone:req.params.tel});
        res.send(score);

    } catch (err) {
        console.error(err)
            //res.render('error/500')
    }
})

module.exports = router;