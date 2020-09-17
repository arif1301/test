const mongoose = require('mongoose');


const postschema = mongoose.Schema({
        namacpu :  String,
        tipe : String,
        platform : String,
        rilis : String,
        ramsisa : String,
        ramtotal : String
});

module.exports = mongoose.model('upload', postschema);