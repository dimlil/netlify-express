import User from '../models/AuthModel.js'
import bcrypt from 'bcrypt'
import { generateToken } from './verifyUser.js';

export const register = async (req, res) => {
    const { name, username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const cryptedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        username,
        password: cryptedPassword
    });

    try {
        await user.save();
        const token = await generateToken(username);
        res.cookie('aid', token, { httpOnly: true, sameSite: 'none', secure: true });
        res.cookie('userId', user._id.toHexString(), { httpOnly: true, sameSite: 'none', secure: true });
        return res.status(200).send('Successful');
    } catch (e) {
        console.log(e);
        return res.status(401).json({
            'error': e
        });
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) { return res.status(404).send('User Not Found') }

    const status = await bcrypt.compare(password, user.password);
    if (status) {
        const token = await generateToken(username);
        res.cookie('aid', token, { httpOnly: true, sameSite: 'none', secure: true });
        res.cookie('userId', user._id.toHexString(), { httpOnly: true, sameSite: 'none', secure: true });
        return res.status(200).send('Successfuly logged in');
    }
    return res.status(404).send('Wrong Password');
}

export const logout = (req, res) => {
    try {
        res.clearCookie('aid', { httpOnly: true, sameSite: 'none', secure: true });
        res.clearCookie('userId', { httpOnly: true, sameSite: 'none', secure: true });
        res.status(200).send('Successfuly logged out');
    } catch (error) {
        if (error) {
            res.status(400).send(error);
        }
    }
}