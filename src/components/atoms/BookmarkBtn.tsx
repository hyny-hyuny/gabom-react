import { ComponentProps } from "react"
import Bookmark from '@/assets/bookmark.svg?react';

type BookmarkBtnProps = ComponentProps<'button'> & {
  isBookmark:boolean
}

function BookmarkBtn ({isBookmark, onClick}:BookmarkBtnProps){
  return  <button
  type="button"
  onClick={onClick}
  className={`cursor-pointer ${isBookmark ? 'text-primary' : 'text-gray-100'}`}
>
  <Bookmark width={24} height={24} />
</button>
}

export default BookmarkBtn