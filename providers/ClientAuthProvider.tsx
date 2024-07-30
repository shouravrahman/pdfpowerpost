"use client";

import { useSession, SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const CLientAuthProvider = ({ children }: { children: ReactNode }) => {
	const session = useSession();

	return <SessionProvider>{children}</SessionProvider>;
};
