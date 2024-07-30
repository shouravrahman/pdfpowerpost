import { currentUser } from "@/lib/auth.ts";
import { UploadButton } from "@/utils/uploadthing.ts";

import Link from "next/link";

export default async function Home() {
	const isAuth = await currentUser();
	return (
		<main className="flex  flex-col items-center justify-center h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
			<div className="text-center ">
				<h1 className="text-5xl font-bubblegum font-bold mb-4 text-white">
					PDFPowerPost: Your Content Creation Ally
				</h1>
				<p className="text-lg mb-8 max-w-2xl font-roboto mx-auto text-pretty text-gray-400">
					Transform PDFs into engaging content with AI-powered tools.
				</p>
			</div>

			{isAuth ? (
				<div className="flex flex-col items-center">
					{/* <UploadButton
						endpoint="imageUploader"
						onClientUploadComplete={(res) => {
							// Do something with the response
							console.log("Files: ", res);
							alert("Upload Completed");
						}}
						onUploadError={(error: Error) => {
							// Do something with the error.
							alert(`ERROR! ${error.message}`);
						}}
					/> */}
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
						Go to Chat
					</button>
				</div>
			) : (
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
					<Link href={"/login"}>Try for free!</Link>
				</button>
			)}
		</main>
	);
}
