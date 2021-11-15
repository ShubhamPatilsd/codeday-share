interface PostCardProps {
  message: string;
  media?: string;
  resourceType?: string;
  username: string;
  pfp: string | undefined | null;
  date: string;
}

const PostCard = ({
  message,
  media,
  resourceType,
  username,
  pfp,
  date,
}: PostCardProps) => {
  return (
    <div className="p-4 rounded-md bg-gray-100 shadow-md w-min space-y-6">
      <div>
        <div className="flex items-center space-x-2">
          <img src={pfp} className="w-8 h-8  rounded-full" />{" "}
          <p className="font-bold">{username}</p>
        </div>
        <p>{new Date(date).toLocaleString()}</p>
      </div>

      <p>{message}</p>
      {resourceType && resourceType === "image" ? (
        <img src={media} className="max-w-xs" />
      ) : (
        <video className="max-w-5xl h-auto" controls>
          {" "}
          <source src={media} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default PostCard;
