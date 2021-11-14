import { getSession, signIn } from "next-auth/client";

export default function Login() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <h1 className="text-codeday">Login Page</h1>
        <div>
          <button
            onClick={() => {
              signIn("github");
            }}
            className=""
          >
            Login With GitHub
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              signIn("discord");
            }}
            className=""
          >
            Login With Discord
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the request and result from the context
  const { req } = context;
  //get the session object
  const session = await getSession({ req });

  // see if the user is logged in
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  //blank return statement because react will yell at me if i dont include a return statement
  return {
    props: {},
  };
}
