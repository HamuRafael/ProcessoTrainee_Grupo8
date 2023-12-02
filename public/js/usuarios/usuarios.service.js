import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

class Usuarios {
    usuarios = {}

    async criarUsuario(email, senha, nome, genero, cargo) {
        return await prisma.usuario.create({
            data: {
                email, senha, nome, genero, cargo
            }
        }).catch(e => {
            if (e.code === "P2002")
                throw new Error("E-mail já cadastrado")
            throw e;
        })
    }

    async deletarUsuario(email) {
        return await prisma.usuario.delete({
            where: {
                email
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