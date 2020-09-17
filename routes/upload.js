const express = require('express');

const router = express.Router();

const data = require('../models/post');
//GET DATA
router.get('/', async (req, res)=>{
    const tampil = await data.find();
    res.json(tampil);
});
//POST DATA
router.post('/', async (req, res)=>{
    const tambah = new data({
        namacpu : req.body.namacpu,
        tipe : req.body.tipe,
        platform : req.body.platform,
        rilis : req.body.rilis,
        ramsisa : req.body.ramsisa,
        ramtotal : req.body.ramtotal
    });
    try{
    const tambahdata = await tambah.save();
        res.json(tambahdata);
    }catch (err){
        res.json({message : err});
    }
});


//UPDATE DATA
router.patch(':/dataId', async (req, res)=>{
    try{
        const update = await data.updateOne
            ({_id : req.params.dataId}, 
            {$set : { namacpu : req.body.namacpu,
                    tipe : req.body.tipe,
                    platform : req.body.platform,
                    rilis : req.body.rilis,
                    ramsisa : req.body.ramsisa
                    }
            });
                res.json(update);
        }   catch (err){
        res.json({message : err});
    }
});

module.exports = router;