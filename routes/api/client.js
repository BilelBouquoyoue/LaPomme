const express = require('express');
const router = express.Router();
const config = require('config');
const Client = require('../../models/Client');
var bodyParser = require('body-parser');


// @route    POST api/clients
// @desc     Register Client
// @access   Public
router.post('/', 
    async(req, res) => {

        var adresse = req.body.adresse;
        var telephone = req.body.telephone
        var nomClient = req.body.nomClient

    try {
        //See if client exists
        let client = await Client.findOne({ telephone });

        if (client) {
            return res.status(400).json({ errors: [{ msg: 'Utilisateur déja existant' }] });
        }

        client = new Client({
            nomClient,
            adresse,
            telephone,
        });

        await client.save();
        console.log(client)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    return res.json(Client);

});

module.exports = router;