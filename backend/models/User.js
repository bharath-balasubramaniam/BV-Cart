const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        img: {
            type: String,
            default:
                'https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-wenjing-girl-cute-girl-q-version-girl-cute-little-girl-png-image_336974.jpg',
        },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);
const User = mongoose.model('User', userSchema);
module.exports = User;
