import jwt from 'jsonwebtoken'
import UserService from '../usuarios/usuarios.service.js'

const userService = new UserService();

class AuthService {
    async login (email, senha) {
        const user = await userService.findByEmail(email);

        if (!user) throw Error("Usuário não encontrado");

        if (user.senha !== senha) throw new Error("Senha incorreta");

        const token = jwt.sign({id: user.id}, "secret", {expiresIn: "5m"});

        return {token};
    }

    async cadastro (email, senha, usuario) {
        const novoUsuario = await userService.criarUsuario(email, senha, usuario);

        return novoUsuario;
    }
}

export default AuthService;