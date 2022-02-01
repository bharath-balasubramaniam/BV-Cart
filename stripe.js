const router = require('express').Router();

const KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(KEY);
router.post('/payment', (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: 'INR',
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                // res.status(500).json(stripeErr);
                res.status(200).send('stripe.js is done');
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});
module.exports = router;
