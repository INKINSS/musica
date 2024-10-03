import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ImgProfile = () => {
  return (
    <Avatar>
  <AvatarImage alt='avatar_image' />
  <AvatarFallback>ik</AvatarFallback>
</Avatar>
  )
}

export default ImgProfile