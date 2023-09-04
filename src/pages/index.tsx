import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "~/utils/api";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser;

  return (
    <>
      <Head>
        <title>Joshua Jacobs</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="outer-container" className="relative">
        <main
          className="flex min-h-screen flex-auto flex-col items-center justify-center from-[#2e026d]  to-[#15162c] bg-cover bg-no-repeat"
          id="page-wrap"
          style={{
            backgroundImage: "url('../smoke-pulse.gif')",
          }}
        >
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 sm:mt-2">
            <h1 className="text-5xl font-extrabold tracking-tight text-emerald-500 sm:text-[5rem]">
              My <span className="text-[hsl(280,100%,70%)]">DEV</span> Portfolio
            </h1>
          </div>
          <div className="info-div flex flex-grow flex-col bg-emerald-500 px-6 pt-1">
            <h4 className="my-3 text-base font-medium">
              I am a full stack developer. I love to code and I am passionate. I
              grew up in Sacramento California. I have 3+ years of experience in
              Web Development and I have a Youtube Channel where I teach Full
              Stack Web Development
            </h4>
          </div>
          <div>
            {!user && (
              <h2 className="center items-center text-2xl font-bold text-white">
                sign in with clerk
              </h2>
            )}
            <div className="flex flex-col items-center justify-center gap-4 rounded bg-white">
              {!user && <SignInButton />}
            </div>
            <div>
              <h2 className="center items-center text-center text-2xl font-bold text-emerald-500">
                sign <span className="text-[hsl(280,100%,70%)]">out</span> with
                clerk
              </h2>
              <div className="flex flex-col items-center justify-center gap-4 rounded bg-white">
                {!!user && <SignOutButton />}
              </div>
            </div>
          </div>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </main>
      </div>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-cyan-500 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export default Home;
