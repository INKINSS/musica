import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ImgProfile = ({ url, content }) => {
  return (
    <Avatar>
      <AvatarImage src={url} alt="avatar_image" />
      <AvatarFallback>{content}</AvatarFallback>
    </Avatar>
  );
};

export default ImgProfile;
