import Posts from "./posts.service.js";

import { Router } from "express"

const router = Router();
const posts = new Posts();

router.get("/posts/:usuarioId", async (req, res) => {
    const postsTotal = await posts.getPosts();
    res.status(200).json(postsTotal)
})

router.post("/posts", async (req, res) => {
    const {texto} = req.body;
    console.log(req.body)
    
    try {
        const novoPost = await posts.criarPost(texto);
        res.status(201).json({novoPost});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

router.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const postDeletado = await posts.deletarPost(id);
        res.status(201).json({postDeletado});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

export default router