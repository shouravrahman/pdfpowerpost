import type { Metadata } from "next";
import "./globals.css";
import { Bubblegum_Sans, Roboto } from "next/font/google";
import { ToasterProvider } from "@/providers/ToasterProvider.tsx";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});
const bubblegum = Bubblegum_Sans({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bubblegum",
});

export const metadata: Metadata = {
	title: "pdfpowerpost",
	description: "Create content from pdf",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${bubblegum.variable} ${roboto.variable}`}>
				<ToasterProvider />
				{children}
			</body>
		</html>
	);
}
