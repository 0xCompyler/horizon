/**
 * Rapyd Integrations: Request Signature.
 *
 * This app implements the Rapyd's API request signature. The crypto-js library
 * is required (https://www.npmjs.com/package/crypto-js). To install it, run:
 * 
 * npm install crypto-js
 *
 * @link   https://docs.rapyd.net/
 * @file   This files defines the main node.js application.
 * @author Isaac Benitez.
 * @version 0.0.1
 * 
 * @requires express
 * @requires https
 * @requires crypto-js
 */

 const express = require('express');

 const makeRequest = require('./utilities').makeRequest;
 
 const app = express();
 
 app.set('json spaces', 4);
 
 app.listen(5000);
 
 app.get('/country', async (req, res) => {
 
     try {
         const result = await makeRequest('GET', '/v1/payment_methods/country?country=IN');
     
         res.json(result);
       } catch (error) {
         res.json(error);
       }
 
 })
 
//  app.get('/country', async (req, res) => {
 
//      try {
//          const result = await makeRequest('GET', '/v1/payment_methods/country?country=it');
     
//          res.json(result);
//        } catch (error) {
//          res.json(error);
//        }
 
//  })
 
 app.post('/checkout', async (req, res) => {
 
    console.log(req.body);
    
     try {
         const body = {
             "amount":"100",
            //  "complete_payment_url": "http://example.com/complete",
             "country": "IN",
             "currency": "INR",
            //  "error_payment_url": "http://example.com/error",
             "merchant_reference_id": "0912-2021",
             "language": "en",
             "metadata": {
                 "merchant_defined": true
             },
             "payment_method_types_include": [
                "in_paytm_ewallet",
                "in_upi_bank",
                "in_googlepay_upi_bank",
                "in_pnbcorp_bank",
                "in_mastercard_credit_card",
                "in_debit_visa_card"
            ],
         }
 
         const result = await makeRequest('POST', '/v1/checkout', body);
         res.json(result);
     } catch (error) {
         res.json(error);
     }
 
 })
 
 