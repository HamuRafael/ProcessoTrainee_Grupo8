import Usuarios from "./usuarios.service.js";
import { Router } from "express"

const router = Router();
const usuarios = new Usuarios();

router.get("/usuarios", async (req, res) => {
    const usuariosTotal = await usuarios.getUsuarios();
    res.status(200).json(usuariosTotal)
})

router.post("/usuarios", async (req, res) => {
    const {email, senha, nome, genero, cargo} = req.body;
    console.log(req.body)
    
    try {
        const novoUsuario = await usuarios.criarUsuario(email, senha, nome, genero, cargo);
        res.status(201).json({novoUsuario});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

router.delete("/usuarios/:email", async (req, res) => {
    const { email } = req.params;
    
    try {
        const usuarioDeletado = await usuarios.deletarUsuario(email);
        res.status(201).json({usuarioDeletado});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

export default router