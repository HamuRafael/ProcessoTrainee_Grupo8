import Usuarios from "./usuarios.service.js";
import jwtGuard from "../auth/guards/jwt.guard.js";
import { Router } from "express"

const routerUsuarios = Router();
const usuarios = new Usuarios();

routerUsuarios.get("/usuarios", async (req, res) => {
    const usuariosTotal = await usuarios.getUsuarios();
    res.status(200).json(usuariosTotal)
})



routerUsuarios.delete("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const usuarioDeletado = await usuarios.deletarUsuario(+id);
        res.status(201).json({usuarioDeletado});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

export default routerUsuarios