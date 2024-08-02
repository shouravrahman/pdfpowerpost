"use client";

import { useSession, SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const CLientAuthProvider = ({ children }: { children: ReactNode }) => {


	return <SessionProvider >{children}</SessionProvider>;
};
