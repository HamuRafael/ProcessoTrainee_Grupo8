import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

class Comentarios {
    async criarComentario(texto, idPostPai) {
        return await prisma.comentario.create({
            data: {
                texto,
                post: {
                    connect: {
                        id: idPostPai,
                    }
                }
            }
        }).catch(e => {
            if (e.code === "P2002")
                throw new Error("E-mail já cadastrado")
            throw e;
        })
    }

    async deletarComentario(id) {
        return await prisma.comentario.delete({
            where: {
                id
            }
        }).catch(e => {
            if (e.code === "P2025") {
                throw new Error("Usuário não encontrado")
            }
        })
    }

    async getComentarios() {
        return await prisma.comentario.findMany();
    }

    

}

export default Comentarios