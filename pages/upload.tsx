import axios from "axios";
import type { NextPage } from "next";
import { getSession, signIn, useSession } from "next-auth/client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Upload: NextPage = () => {
  const [session, loading] = useSession();

  useEffect(() => {
    (async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      }
    })();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("username", session.user.name);
    formData.append("pfp", session.user.image);

    axios("/api/upload", { method: "POST", data: formData });
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <form
          method="post"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="space-y-3">
            <div className="flex justify-center">
              <input
                name="message"
                type="text"
                placeholder="Your share (e.g: CodeDay BA is 🔥)"
                className="rounded-md p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-codeday transition w-full"
              />
            </div>
            <div className="flex justify-center">
              <input
                name="image"
                type="file"
                className="mx-auto"
                accept="image/*, video*/"
              />
            </div>

            <div className="flex justify-center w-full">
              <input
                type="submit"
                value="Upload"
                className="bg-codeday p-2 rounded-md text-white hover:text-codeday hover:bg-white transition ease-in-out cursor-pointer border hover:border-codeday w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
