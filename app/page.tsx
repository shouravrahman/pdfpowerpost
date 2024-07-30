import { UploadButton } from "@/utils/uploadthing.ts";
import {
	RegisterLink,
	LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
	const { isAuthenticated } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();

	return (
		<main className="flex  flex-col items-center justify-center h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
			<div className="text-center">
				<h1
					className="text-4xl font-bold   
 mb-4"
				>
					PDFPowerPost
				</h1>
				<p className="text-lg mb-8">
					Turn your PDFs into beautiful, searchable content in seconds.
				</p>
			</div>
			{isUserAuthenticated ? (
				<div className="flex flex-col items-center">
					<UploadButton
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
					/>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
						Go to Chat
					</button>
				</div>
			) : (
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Login
				</button>
			)}
		</main>
	);
}
