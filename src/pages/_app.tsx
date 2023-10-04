import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "../styles/globals.css";
import Header from "~/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import user from "~/components/Header";

const [name, setName] = useState("Joshua Jacobs");

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ClerkProvider {...pageProps}>
        <Header />
        <Component {...pageProps} />
      </ClerkProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
