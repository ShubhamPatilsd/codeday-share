import type { NextPage } from 'next'
import axios from 'axios'




const Upload: NextPage = () => {
  return (
    <div>
        <form method="post" action="/api/upload" encType="multipart/form-data">
        <input name="image" type="file" />
        <input name="message" type="text"/>
        <input type="submit" value="Upload"/>
        </form>
        
    </div>
  )
}

export default Upload
