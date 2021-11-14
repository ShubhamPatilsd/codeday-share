 interface PostCardProps{
    message: string,
    media?: string,
    resourceType?: string
  }

const PostCard = ({message, media, resourceType}:PostCardProps)=>{

    return(
        <div className="p-4 rounded-md bg-gray-100 shadow-md w-min space-y-6">
            <p>{message}</p>
            {
                resourceType && resourceType === "image" ? <img src={media} className="max-w-xs"/> : <video className="max-w-5xl h-auto" controls> <source src={media} type="video/mp4"/></video>

            }
        </div>
    )

}

export default PostCard