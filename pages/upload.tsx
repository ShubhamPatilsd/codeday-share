import type { NextPage } from 'next'
import { getSession, signIn } from 'next-auth/client';
import { useEffect } from 'react';

const Upload: NextPage = () => {

  useEffect(()=>{
  (async ()=>{
    const session = await getSession();
    if(!session){
      signIn();
    }
    })()
  }, [])

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
