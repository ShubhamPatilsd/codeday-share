import React, { useState } from "react";

import { signOut, useSession } from "next-auth/client";
import { useEffect } from "react";

export default function Navbar() {
  const [session, loading] = useSession();
  const [userPfp, setUserPfp] = useState("");

  useEffect(() => {
    if (session) {
      setUserPfp(session.user.image);
    }
  }, [session]);

  return (
    <div className="flex space-x-4 md:space-x-8 items-center border-b border-gray-300 md:px-4 py-2 font-bold">
      <div className="w-full justify-end flex space-x-6">
        <button
          className="flex space-x-2 bg-accent-primary hover:bg-accent-primary-darker transition ease-in-out p-2 rounded-lg text-base"
          onClick={() => signOut()}
        >
          Logout
        </button>
        <img
          className="w-12 h-12 rounded-full border border-gray-300"
          src={session && session.user.image}
        />
      </div>
    </div>
  );
}
