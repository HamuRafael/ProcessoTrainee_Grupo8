import jwt from 'jsonwebtoken';
import UserService from '../usuarios/usuarios.service.js';
import bcrypt from 'bcrypt';

const userService = new UserService();

class AuthService {
    async login (email, senha, res) {
        const user = await userService.findByEmail(email);

        if (!user) throw Error("Usuário não encontrado");

        if (!(await bcrypt.compare(senha, user.senha))) throw new Error("Senha incorreta");

        const token = jwt.sign({id: user.id}, "secret", {expiresIn: "5m"});

        res.send({redirect: '/perfil', id: user.id});

        return {token};
    }

    async cadastro (email, senha, usuario) {
        
        const salt = await bcrypt.genSalt();
        senha = await bcrypt.hash(senha, salt);
        const novoUsuario = await userService.criarUsuario(email, senha, usuario);

        return novoUsuario;
    }
}

export default AuthService;