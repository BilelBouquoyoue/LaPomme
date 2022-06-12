const express = require('express');
const router = express.Router();
const config = require('config');
const Rec = require('../../models/Recompense');
var bodyParser = require('body-parser');


// @route    POST api/clients
// @desc     Register Client
// @access   Public
router.post('/', 
    async(req, res) => {

        var telephone = req.body.telephone
        var recompense = req.body.recompense

    try {

        recompense = new Rec({
            telephone,
            recompense,
        });

        await recompense.save();

} 

    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    return res.json(Score);
    }

);

module.exports = router;