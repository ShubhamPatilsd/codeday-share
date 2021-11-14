 interface PostCardProps{
    message: string,
    media?: string,
    resourceType?: string
  }

const PostCard = ({message, media}:PostCardProps)=>{

    return(
        <div className="p-4 rounded-md bg-gray-100 shadow-md">
            <p>{message}</p>
            {

            }
        </div>
    )

}

export default PostCard