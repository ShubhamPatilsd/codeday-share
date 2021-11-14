import prisma from '../../../db/prisma'

export async function findAllPosts(){
    return await prisma.post.findMany({})
}

export default async function handler(req, res){
    return await findAllPosts()
}