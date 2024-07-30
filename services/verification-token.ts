import prismadb from "@/lib/prismadb.ts";
import { setTokenExpiration } from "@/lib/utils";
import { v4 as uuid } from "uuid";

export const generateVerificationToken = async (email: string) => {
  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await deleteVerificationTokenById(existingToken.id);
  }

  const token = uuid();
  const expires = setTokenExpiration();

  const verificationToken = await prismadb.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};

export const getVerificationToken = async (token: string) => {
  try {
    const verificationToken = await prismadb.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prismadb.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const deleteVerificationTokenById = async (id: string) => {
  try {
    return await prismadb.verificationToken.delete({
      where: { id },
    });
  } catch {
    return null;
  }
};
