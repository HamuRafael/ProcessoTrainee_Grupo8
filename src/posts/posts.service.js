import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

class Posts {
    async criarPost(texto) {
        return await prisma.post.create({
            data: {
                texto
            }
        }).catch(e => {
            if (e.code === "P2002")
                throw new Error("E-mail já cadastrado")
            throw e;
        })
    }

    async deletarPost(id) {
        return await prisma.post.delete({
            where: {
                id
            }
        }).catch(e => {
            if (e.code === "P2025") {
                throw new Error("Usuário não encontrado")
            }
        })
    }

    async getPosts() {
        return await prisma.post.findMany({
            include: {
                comentarios: true
            }
        });
    }

    async findById(id) {
        const postEncontrado =  await prisma.post.findUnique({
            where: {
                id
            },
            include: {
                comentarios: true
            }
        })
        return postEncontrado;
    }

}

export default Posts