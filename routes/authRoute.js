import { Router } from "express";
import { login, logout, register } from "../controllers/auth.js";
import { checkRenter } from "../controllers/checkRenter.js";
import { checkToken } from "../controllers/verifyUser.js";
const authRouter = Router();

authRouter.post('/register', (req, res) => {
    register(req, res);
});

authRouter.post('/login', (req, res) => {
    login(req, res);
});

authRouter.get('/logout', async (req, res) => {
    logout(req,res);
});

authRouter.get('/verify', async (req, res) => {
    const token = req.cookies['aid'];
    const result = await checkToken(token);
    res.send(result)
});

authRouter.get('/check-renter/:id', async (req, res) => {
    checkRenter(req,res)
});

export default authRouter