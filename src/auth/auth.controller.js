import { Router } from "express";
import AuthService from "./auth.service.js";

const authService = new AuthService();
const authRouter = Router();

authRouter.post("/sign-in", async (req, res) => {
    const {email, senha} = req.body;

    try {
        const token = await authService.login(email, senha);
        res.status(200).json(token);
    }
    catch(e) {
        res.status(400).json({ message: e.message })
    }
})

authRouter.post("/sign-up", async (req, res) => {
    const {email, senha, usuario} = req.body;

    try {
        const novoUsuario = await authService.cadastro(email, senha, usuario);
        res.status(200).json(novoUsuario);
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
})

export default authRouter;