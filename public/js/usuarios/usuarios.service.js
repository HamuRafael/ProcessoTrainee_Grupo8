import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

class Usuarios {
    usuarios = {}

    async criarUsuario(email, senha, usuario) {
        return await prisma.usuario.create({
            data: {
                email, senha, usuario
            }
        }).catch(e => {
            if (e.code === "P2002")
                throw new Error("E-mail já cadastrado")
            throw e;
        })
    }

    async deletarUsuario(id) {
        return await prisma.usuario.delete({
            where: {
                id
            }
        }).catch(e => {
            if (e.code === "P2025") {
                throw new Error("Usuário não encontrado")
            }
        })
    }

    async getUsuarios() {
        return await prisma.usuario.findMany();
    }

}

export default Usuarios