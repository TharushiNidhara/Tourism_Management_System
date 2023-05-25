/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Refund = new Schema({
    reason: {
        type: String
    }
 
 },
  {
    collation: 'refund'
});

module.exports = mongoose.model('Refund',Refund);