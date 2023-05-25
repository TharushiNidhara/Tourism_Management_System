const express = require('express');
const refundRoutes = express.Router();

// Require the 'register.model' module and assign it to the variable 'Customer'
let Refund = require('./refund');



refundRoutes.route('/add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let refund = new Refund(req.body);
     // Save the new customer to the database
     refund.save()
        .then(hotel => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'refund' : 'new refund is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});


module.exports = refundRoutes;
