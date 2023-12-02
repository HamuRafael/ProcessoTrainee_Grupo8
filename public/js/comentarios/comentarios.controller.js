import Comentarios from "./comentarios.service.js";

import { Router } from "express"

const router = Router();
const comentarios = new Comentarios();

router.get("/comentarios/:usuarioId", async (req, res) => {
    const postsTotal = await comentarios.getComentarios();
    res.status(200).json(postsTotal)
})

router.post("/comentarios", async (req, res) => {
    const {texto} = req.body;
    console.log(req.body)
    
    try {
        const novoPost = await comentarios.criarComentario(texto);
        res.status(201).json({novoPost});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

router.delete("/comentarios/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const postDeletado = await comentarios.deletarComentario(id);
        res.status(201).json({postDeletado});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

export default router