import prisma from '../../db/prisma'
import middleware from '../../middlewares/middleware'
import nextConnect from 'next-connect'
import cloudinary from 'cloudinary'


cloudinary.v2.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});



const handler = nextConnect()
handler.use(middleware)



export const config = {
    api: {
      bodyParser: false,
    },
  }

handler.post(async (req: any, res:any) => {
console.log("name",process.env.CLOUDINARY_NAME)
    const {message} = req.body; 
    console.log(req.body)
    console.log(req.files)

    cloudinary.v2.uploader.upload(req.files.image[0].path, 
    async function(error, result) {
      console.log(result, error);
      if(!error){

        
          const resultData = await prisma.post.create({
            data:{
                media:result.url,
                message:message[0],
                resourceType: result.resource_type
            }
          })
        
          res.json(resultData)

      }
     });
    
  
    //...
  })

// export default async function handler(
//     req, res
//   ) {
//     const {message} = req.body;

//     console.log(message)

//     await prisma.post.create({
//         data:{
//             message:message
//         }
//     })
//     res.status(200).json({ name: 'John Doe' })
//   }

export default handler;