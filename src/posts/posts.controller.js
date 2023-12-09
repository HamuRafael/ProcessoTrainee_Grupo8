import Posts from "./posts.service.js";

import { Router } from "express"

const routerPosts = Router();
const posts = new Posts();

routerPosts.get("/posts/:id?", async (req, res) => {
    var postsTotal;
    if (req.params.id) {
        postsTotal = await posts.findById(parseInt(req.params.id));
    } else postsTotal = await posts.getPosts();
    
    res.status(200).json(postsTotal)
})

routerPosts.post("/posts", async (req, res) => {
    const {texto} = req.body;
    console.log(req.body);
    
    try {
        const novoPost = await posts.criarPost(texto);
        res.status(201).json({novoPost});
    }
    catch (err) {
        console.log(err.message);
        res.status(400).json({erro: err.message});
    }
})

routerPosts.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const postDeletado = await posts.deletarPost(+id);
        res.status(201).json({postDeletado});
    }
    catch (err) {
        res.status(400).json({erro: err.message});
    }
})

export default routerPosts