const router = require('express').Router();
// here i  used cryptojs  for encrypt and decrypt the password  AES  is a method  i used from encrypt and decrypt(Advanced Encryption Standard)
const User = require('../models/User');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
//  Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password,
            'P@55w0rd'
        ).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
});
//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json('wrong credentials!');
        const hashedPassword = CryptoJs.AES.decrypt(user.password, 'P@55w0rd');
        const actualPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
        actualPassword !== req.body.password &&
            res.status(401).json('wrong credentials');
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: '2d' }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error.message);
    }
});
module.exports = router;
