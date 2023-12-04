import express from "express"
import routerUsuarios from "./public/js/usuarios/usuarios.controller.js"
import routerPosts from "./public/js/posts/posts.controller.js"
import routerComentarios from "./public/js/comentarios/comentarios.controller.js"
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(routerUsuarios);
app.use(routerPosts);
app.use(routerComentarios);

app.set('view engine', 'html')

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/', 'login.html'))
})


app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/', 'login.html'))
})

app.get("/feed/:idPerfil?", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/', 'feed.html'))
})

app.get("/comments/:idPost", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/', 'comments.html'))
})

app.get("/comments-logado/:idPost", (req, res) => {    
    res.sendFile(path.join(__dirname, 'views/', 'comments-logado.html'))
})

app.get("/feed-logado/:idPerfil?", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/', 'feed-logado.html'))
})

app.get("/perfil-deslogado", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/', 'perfil-deslogado.html'))
})

app.listen(3000, () => {
    console.log("running on 3000")
})