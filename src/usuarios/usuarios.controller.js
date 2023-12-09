import Usuarios from "./usuarios.service.js";
import jwtGuard from "../auth/guards/jwt.guard.js";
import { Router } from "express"

const routerUsuarios = Router();
const usuarios = new Usuarios();

routerUsuarios.get("/usuarios/:id?", async (req, res) => {
    var usuariosTotal;
    if (req.params.id) {
        usuariosTotal = await usuarios.findById(parseInt(req.params.id));
    } else usuariosTotal = await usuarios.getUsuarios();
    
    res.status(200).json(usuariosTotal)
})

routerUsuarios.delete("/usuarios/:id", jwtGuard, async (req, res) => {
    const user = req.user;

    if (user.id !== +req.params.id)
        return res.status(403).json({ message: "Você não tem permissão para deletar este usuário"})
    
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